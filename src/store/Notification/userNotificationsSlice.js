// src/redux/userNotificationsSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import dayjs from 'dayjs'; // For formatting dates
import relativeTime from 'dayjs/plugin/relativeTime'; // For relative time
import axios from 'axios';
import { BaseUrl } from './../../Page/common/BaseUrl';

dayjs.extend(relativeTime);

export const notificationList = createAsyncThunk(
    'notification/notificationList',
    async (empId, thunkAPI) => {
        try {
            const response = await axios.post(`${BaseUrl}/emp/notifications/list`, {
                id: empId
            });
            if (!response.data.success) {
                throw new Error('Network response was not ok');
            }
            return response.data.result;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const markAllAsRead = createAsyncThunk(
    'notification/markAllAsRead',
    async (empId, thunkAPI) => {
        try {
            const response = await axios.post(`${BaseUrl}/emp/notifications/markAllAsRead`, {
                id: empId
            });
            if (!response.data.success) {
                throw new Error('Network response was not ok');
            }
            return response.data.result;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const getUnreadCount = createAsyncThunk(
    'notification/getUnreadCount',
    async (empId, thunkAPI) => {
        try {
            const response = await axios.post(`${BaseUrl}/emp/notifications/unreadCount`, {
                id: empId
            });
            if (!response.data.success) {
                throw new Error('Network response was not ok');
            }
            return response.data.unReadNotifications;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

const initialState = {
    notifications: [],
    unreadCount: 0,
    status: 'idle',
    error: null,
};

const userNotificationsSlice = createSlice({
    name: 'notifications',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(notificationList.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(notificationList.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.notifications = action.payload;
            })
            .addCase(notificationList.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            .addCase(markAllAsRead.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(markAllAsRead.fulfilled, (state) => {
                state.status = 'succeeded';
            })
            .addCase(markAllAsRead.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            .addCase(getUnreadCount.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getUnreadCount.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.unreadCount = action.payload;
            })
            .addCase(getUnreadCount.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    },
});

export default userNotificationsSlice.reducer;
