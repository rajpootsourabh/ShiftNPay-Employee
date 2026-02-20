import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { BaseUrl } from "../../Page/common/BaseUrl";
import axios from 'axios';

export const weeklyOverTimeList = createAsyncThunk(
    'overTime/weeklyOverTimeList',
    async (empId, { dispatch,getState, rejectWithValue }) => {
        try {
            const response = await axios.post(`${BaseUrl}/tracking/weekly/all`, {
                userId: empId,
            });
            return response.data;
        } catch (error) {
            console.log(error.message)
            return rejectWithValue(error.message);
        }
    }
);



const overTimeSlice = createSlice({
    name: 'overTime',
    initialState: {
        list: [],
        status: 'idle',
        error: null,
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(weeklyOverTimeList.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(weeklyOverTimeList.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.list = action.payload;
            })
            .addCase(weeklyOverTimeList.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });


    },
});
export default overTimeSlice.reducer;
