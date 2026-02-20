// features/profile/profileSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BaseUrl } from '../../Page/common/BaseUrl'; // Adjust the path if necessary

// Define an async thunk for fetching profile data
export const fetchProfileData = createAsyncThunk(
    'profile/fetchProfileData',
    async (userId, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${BaseUrl}/emp/profile/${userId}`);
            return response.data;
        } catch (error) {
            console.error(error.message);
            return rejectWithValue(error.message);
        }
    }
);

export const updateProfile = createAsyncThunk(
    'employee/updateProfile',
    async (profileData, { dispatch, rejectWithValue }) => {
        try {
            const response = await axios.post(`${BaseUrl}/emp/profile/${profileData.empId}`, profileData);
            return response.data;
        } catch (error) {
            console.error('Error updating profile:', error);
            return rejectWithValue(error.response.data);
        }
    }
);

// Create a slice for profile management
const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        profile: {},
        status: 'idle', // can be 'loading', 'succeeded', or 'failed'
        error: null,
    },
    reducers: {
        // You can add synchronous actions here if needed
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileData.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProfileData.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.profile = action.payload;
            })
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    },
});

// Export the reducer to be used in the store
export default profileSlice.reducer;
