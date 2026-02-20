import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { BaseUrl } from "./../../Page/common/BaseUrl";
import axios from 'axios';


export const myJobsList = createAsyncThunk(
    'tracker/myJobsList',
    async (empId, thunkAPI) => {
        try {
            const response = await fetch(`${BaseUrl}/tracking/get-tracking-by-user-id/${empId}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const JobsDropDownList = createAsyncThunk(
    'tracker/JobsDropDownList',
    async (empId, thunkAPI) => {
        try {
            const response = await fetch(`${BaseUrl}/job/get-by-emp-id/${empId}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const emplyeesWeeklyWorkedSeconds = createAsyncThunk(
    'tracker/emplyeesWeeklyWorkedSeconds',
    async (empId, thunkAPI) => {
        try {
            const response = await fetch(`${BaseUrl}/tracking/get-week-hour/${empId}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const fetchCurrentJobTimer = createAsyncThunk(
    'tracker/fetchCurrentJobTimer',
    async (empId, { getState, rejectWithValue }) => {
        try {
            const state = getState();
            const currentJob = state.timeTracker.currentJob;
            console.log('fetching tracking details for  : ' , currentJob)
            const response = await axios.get(
                `${BaseUrl}/tracking/timer/${empId}/${currentJob._id}`
              );
              console.log(response.data)
            if (response.status != 200) {
                throw new Error('Network response was not ok');
            }
           
            return response.data;

        } catch (error) {
            console.log(error.message)
            return rejectWithValue(error.message);
        }
    }
);

export const startTimer = createAsyncThunk(
    'tracker/startTimer',
    async (empId, { dispatch,getState, rejectWithValue }) => {
        try {
            console.log('started............')
            const state = getState();
            const currentJob = state.timeTracker.currentJob;
            console.log('currentJob : ' , currentJob)
            const response = await axios.post(`${BaseUrl}/tracking/start-timer`, {
                userId: empId,
                jobId: currentJob._id
            });
           dispatch(fetchCurrentJobTimer(empId));
           dispatch(myJobsList(empId));
           return response;
        } catch (error) {
            console.log(error.message)
            return rejectWithValue(error.message);
        }
    }
);

export const pauseTimer = createAsyncThunk(
    'tracker/pauseTimer',
    async (empId, {dispatch, getState, rejectWithValue }) => {
        try {
            console.log('pausing ............')

            const state = getState();
            const currentJob = state.timeTracker.currentJob;
            console.log('currentJob pausing : ' , currentJob)
            const response = await axios.post(`${BaseUrl}/tracking/pause-timer`, {
                userId: empId,
                jobId: currentJob._id
            });
           dispatch(fetchCurrentJobTimer(empId));
           dispatch(myJobsList(empId));
           return response;


        } catch (error) {
            console.log(error.message)
            return rejectWithValue(error.message);
        }
    }
);

export const myAssignedJobs = createAsyncThunk(
    'tracker/myAssignedJobs',
    async (empId, {dispatch, getState, rejectWithValue }) => {
        try {
            console.log('assigned Jobs ............')

            const state = getState();
            const currentJob = state.timeTracker.currentJob;
            console.log('currentJob pausing : ' , currentJob)
            const response = await axios.get(`${BaseUrl}/emp/assignedJobs`, {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`
                }
              });
              return response.data;
        } catch (error) {
            console.log(error.message)
            return rejectWithValue(error.message);
        }
    }
);

export const updateJobStatus = createAsyncThunk(
    'jobs/updateJobStatus',
    async ({jobId,empId}, { dispatch,rejectWithValue }) => {
      try {
        const response = await axios.put(`${BaseUrl}/emp/assignedJobs/${jobId}`, { status: 'closed' },{
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`
            }
          });
          dispatch(myAssignedJobs());
          dispatch(JobsDropDownList(empId));
          dispatch(fetchCurrentJobTimer(empId));
           dispatch(myJobsList(empId));

        return response.data;
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );
  export const getEmployeesJobsTrackingRequests = createAsyncThunk('employees/getEmployeesJobsTrackingRequests', async (_, { dispatch, rejectWithValue }) => {
    try {
        
        const response = await axios.get(`${BaseUrl}/emp/time-tracker-requests`,{
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`
            }
          });
        return response.data.result; 
    } catch (error) {
        if (error.response && error.response.data) {
            return rejectWithValue(error.response.data.msg); // Error message from server
        } else {
            return rejectWithValue('An error occurred while fetching employees');
        }
    }
});


const trackerSlice = createSlice({
    name: 'tracker',
    initialState: {
        Jobs: [],
        JobsTracking: [],
        currentJob: {},
        currentJobTracking: {},
        assignedJobs: [],
        TimeTrackerApprovalRequests:[],
        weeklySeconds: '00:00:00',
        status: 'idle',
        rate: 0,
        error: null,
    },
    reducers: {
        setCurrentJob: (state, action) => {
            const selectedJobId = action.payload;
            const selectedJob = state.Jobs.find(job => job._id === selectedJobId);
            state.currentJob = selectedJob || {};
            state.currentJobTracking = state.JobsTracking.find(job => job.jobId === selectedJobId);

        },
        setCurrentJobTracking: (state, action) => {
            const selectedJobId = action.payload;
            state.currentJobTracking = state.JobsTracking.find(job => job.jobId === selectedJobId);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(myJobsList.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(myJobsList.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.JobsTracking = action.payload.result;
            })
            .addCase(myJobsList.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            .addCase(emplyeesWeeklyWorkedSeconds.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(emplyeesWeeklyWorkedSeconds.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.weeklySeconds = action.payload.result[0]?.totalSeconds;
            })
            .addCase(emplyeesWeeklyWorkedSeconds.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            .addCase(JobsDropDownList.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(JobsDropDownList.fulfilled, (state, action) => {
                state.status = 'succeeded';
                console.log('action.payload.result ' , action.payload.result)
                state.Jobs = action.payload.result.jobId.filter((job) => job.status !== 'closed' && job.statusByEmployee !== 'closed');
                state.rate = action.payload.result.rate;
            })
            .addCase(JobsDropDownList.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            .addCase(startTimer.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(startTimer.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.currentJobTracking = action.payload;
            })
            .addCase(startTimer.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            .addCase(pauseTimer.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(pauseTimer.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.currentJobTracking = action.payload;
            })
            .addCase(pauseTimer.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            .addCase(fetchCurrentJobTimer.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.currentJobTracking = action.payload;
            })
            .addCase(fetchCurrentJobTimer.rejected, (state, action) => {
                state.status = 'failed';
                state.currentJobTracking = {};
                state.error = action.payload;
            })
            .addCase(fetchCurrentJobTimer.pending, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            .addCase(myAssignedJobs.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(myAssignedJobs.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.assignedJobs = action.payload.result;
            })
            .addCase(myAssignedJobs.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            .addCase(getEmployeesJobsTrackingRequests.fulfilled, (state, action) => {
                state.TimeTrackerApprovalRequests = action.payload;
                state.status = 'succeeded';
            })
            .addCase(getEmployeesJobsTrackingRequests.rejected, (state, action) => {
                state.error = action.payload;
                state.status = 'failed';
            });



    },
});
export const { setCurrentJob, setCurrentJobTracking } = trackerSlice.actions;
export default trackerSlice.reducer;
