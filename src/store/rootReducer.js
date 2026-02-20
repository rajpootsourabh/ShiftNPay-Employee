import { combineReducers } from '@reduxjs/toolkit';
import trackerReducer from './Tracker/trackerSlice';
import notificationReducer from './Notification/userNotificationsSlice';
import overTimeReducer from './OverTimeList/overTimeSlice';
import profileReducer from './Profile/profileSlice';
import assignedDocumentsReducer from './AssignedDocuments/assignedDocumentsSlice';

const rootReducer = combineReducers({
  timeTracker: trackerReducer,
  notifications: notificationReducer,
  overTime: overTimeReducer,
  profile: profileReducer,
  assignedDocuments: assignedDocumentsReducer
});

export default rootReducer;
