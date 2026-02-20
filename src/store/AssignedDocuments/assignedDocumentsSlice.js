import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BaseUrl } from '../../Page/common/BaseUrl';

const getAuthHeaders = () => {
    const token = localStorage.getItem("token");
    return {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
    };
};

// Fetch assigned documents for employee
export const fetchAssignedDocuments = createAsyncThunk(
    'assignedDocuments/fetchAssignedDocuments',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${BaseUrl}/emp/assignedDocuments`, getAuthHeaders());
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || 'Failed to fetch documents');
        }
    }
);

// Upload document by employee
export const uploadDocument = createAsyncThunk(
    'assignedDocuments/uploadDocument',
    async ({ documentId, file }, { rejectWithValue, dispatch }) => {
        try {
            const token = localStorage.getItem("token");
            const formData = new FormData();
            formData.append('file', file);
            formData.append('documentId', documentId);

            const response = await axios.post(
                `${BaseUrl}/emp/uploadDoucment`,
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            dispatch(fetchAssignedDocuments());
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || error.response?.data?.msg || 'Failed to upload document');
        }
    }
);

// Update document status
export const updateDocumentStatus = createAsyncThunk(
    'assignedDocuments/updateStatus',
    async ({ documentId, status }, { rejectWithValue, dispatch }) => {
        try {
            const response = await axios.post(
                `${BaseUrl}/emp/update-document-status`,
                { documentId, status },
                getAuthHeaders()
            );
            dispatch(fetchAssignedDocuments());
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || 'Failed to update status');
        }
    }
);

const assignedDocumentsSlice = createSlice({
    name: 'assignedDocuments',
    initialState: {
        documents: [],
        loading: false,
        uploadLoading: false,
        error: null,
        uploadSuccess: false,
    },
    reducers: {
        clearUploadSuccess: (state) => {
            state.uploadSuccess = false;
        },
        clearError: (state) => {
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            // Fetch documents
            .addCase(fetchAssignedDocuments.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchAssignedDocuments.fulfilled, (state, action) => {
                state.loading = false;
                state.documents = action.payload;
            })
            .addCase(fetchAssignedDocuments.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            // Upload document
            .addCase(uploadDocument.pending, (state) => {
                state.uploadLoading = true;
                state.error = null;
                state.uploadSuccess = false;
            })
            .addCase(uploadDocument.fulfilled, (state) => {
                state.uploadLoading = false;
                state.uploadSuccess = true;
            })
            .addCase(uploadDocument.rejected, (state, action) => {
                state.uploadLoading = false;
                state.error = action.payload;
            })
            // Update status
            .addCase(updateDocumentStatus.fulfilled, (state) => {
                state.error = null;
            })
            .addCase(updateDocumentStatus.rejected, (state, action) => {
                state.error = action.payload;
            });
    },
});

export const { clearUploadSuccess, clearError } = assignedDocumentsSlice.actions;
export default assignedDocumentsSlice.reducer;
