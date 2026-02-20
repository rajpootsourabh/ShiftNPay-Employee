// src/components/SidebarComponent.js

import React, { useEffect } from 'react';
import Logo from "../assets/img/logo.png";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getUnreadCount } from '../../store/Notification/userNotificationsSlice';

const SidebarComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const empId = localStorage.getItem("_id");

  const notificationCount = useSelector((state) => state.notifications.unreadCount);



  useEffect(() => {
    dispatch(getUnreadCount(empId));
  }, [empId, location.pathname]);


  useEffect(() => {
    console.log(notificationCount)
  }, [notificationCount])

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("_id");
    navigate("/login");
  };


  const getActiveItem = () => {
    const path = location.pathname;

    console.log('path : ', path)
    if (path.includes('dashboard')) return 'dashboard';
    if (path.includes('timeTracker')) return 'timetracker';
    if (path.includes('calendar')) return 'calendar';
    if (path.includes('profile')) return 'profile';
    if (path.includes('notifications')) return 'notifications';
    if (path.includes('my-documents')) return 'my-documents';
    if (path.includes('shiftTime')) return 'shiftTime';
    if (path.includes('leaveManagement')) return 'leaveManagement';
    if (path.includes('time-tracker-request')) return 'time-tracker-request';

    return '';
  };

  const activeItem = getActiveItem();

  return (
    <div className="bg-white shadow-2xl text-gray-700 w-64 min-h-screen p-4">
      <div className="text-center mt-4">
        <img
          onClick={() => navigate("/")}
          src={Logo}
          alt="Logo"
          className="h-16 cursor-pointer mx-auto mb-4"
        />
      </div>
      <div
        className={`flex items-center p-2 mb-2 cursor-pointer ${activeItem === 'dashboard' ? "bg-green-600 text-white rounded-md" : "text-black"}`}
        onClick={() => navigate("/dashboard")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill={activeItem === 'dashboard' ? "white" : "black"}
          className="w-6 h-6 mr-4"
        >
          <path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
        </svg>
        <span>Dashboard</span>
      </div>
      <div
        className={`flex items-center p-2 mb-2 cursor-pointer ${activeItem === 'timetracker' ? "bg-green-600 text-white rounded-md" : "text-black"}`}
        onClick={() => navigate("/timeTracker")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill={activeItem === 'timetracker' ? "white" : "black"}
          className="w-6 h-6 mr-4"
        >
          <path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
        </svg>
        <span>Time Tracker</span>
      </div>
      <div
        className={`flex items-center p-2 mb-2 cursor-pointer ${activeItem === 'calendar' ? "bg-green-600 text-white rounded-md" : "text-black"}`}
        onClick={() => navigate("/calendar")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill={activeItem === 'calendar' ? "white" : "black"}
          className="w-6 h-6 mr-4"
        >
          <path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zm0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm112 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H192c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H320c-8.8 0-16 7.2-16 16zm-240 96v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm112 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H192c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H320c-8.8 0-16 7.2-16 16z" />
        </svg>
        <span>Calendar</span>
      </div>

      <div
        className={`flex items-center p-2 mb-2 cursor-pointer ${activeItem === 'time-tracker-request' ? "bg-green-600 text-white rounded-md" : "text-black"}`}
        onClick={() => navigate("/time-tracker-request")}
      >
        <svg xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 512 512"
        fill={activeItem === 'time-tracker-request' ? "white" : "black"}
        className="w-6 h-6 mr-4"
        >
           <path d="M75 75L41 41C25.9 25.9 0 36.6 0 57.9L0 168c0 13.3 10.7 24 24 24l110.1 0c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24l0 104c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65 0-94.1c0-13.3-10.7-24-24-24z" /></svg>
        <span>Tracker Status</span>
      </div>
      <div
        className={`flex items-center p-2 mb-2 cursor-pointer ${activeItem === 'shiftTime' ? "bg-green-600 text-white rounded-md" : "text-black"}`}
        onClick={() => navigate("/shiftTime")}
      >
        <svg
          className="w-6 h-6 mr-4"
          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill={activeItem === 'shiftTime' ? "white" : "black"}><path d="M112 112c0 35.3-28.7 64-64 64l0 160c35.3 0 64 28.7 64 64l352 0c0-35.3 28.7-64 64-64l0-160c-35.3 0-64-28.7-64-64l-352 0zM0 128C0 92.7 28.7 64 64 64l448 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128zM176 256a112 112 0 1 1 224 0 112 112 0 1 1 -224 0zm80-48c0 8.8 7.2 16 16 16l0 64-8 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l24 0 24 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-8 0 0-80c0-8.8-7.2-16-16-16l-16 0c-8.8 0-16 7.2-16 16z" /></svg>


        <span>OT|Calculations </span>
      </div>
      <div
        className={`flex items-center p-2 mb-2 cursor-pointer ${activeItem === 'leaveManagement' ? "bg-green-600 text-white rounded-md" : "text-black"}`}
        onClick={() => navigate("/leaveManagement")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill={activeItem === 'leaveManagement' ? "white" : "black"}
          className="w-6 h-6 mr-4"
        >
          <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
        </svg>
        <span>Leave Management</span>
      </div>

      <div
        className={`flex items-center p-2 mb-2 cursor-pointer ${activeItem === 'profile' ? "bg-green-600 text-white rounded-md" : "text-black"}`}
        onClick={() => navigate("/profile")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill={activeItem === 'profile' ? "white" : "black"}
          className="w-6 h-6 mr-4"
        >
          <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
        </svg>
        <span>Profile</span>
      </div>
      <div
        className={`flex items-center p-2 mb-2 cursor-pointer ${activeItem === 'notifications' ? "bg-green-600 text-white rounded-md" : "text-black"}`}
        onClick={() => navigate("/notifications")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill={activeItem === 'notifications' ? "white" : "black"}
          className="w-6 h-6 mr-4"
        >
          <path d="M224 0c-17.7 0-32 14.3-32 32l0 19.2C119 66 64 130.6 64 208l0 18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416l384 0c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8l0-18.8c0-77.4-55-142-128-156.8L256 32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3l-64 0-64 0c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z" />


        </svg>
        <span className="flex-1">Notifications</span>
        {/* Notification count */}
        {notificationCount > 0 && (
          <span className="bg-red-600 text-white text-xs font-semibold rounded-full px-2 py-1 ml-2">
            {notificationCount}
          </span>
        )}
      </div>
      <div
        className={`flex items-center p-2 mb-2 cursor-pointer ${activeItem === 'my-documents' ? "bg-green-600 text-white rounded-md" : "text-black"}`}
        onClick={() => navigate("/my-documents")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
          fill={activeItem === 'my-documents' ? "white" : "black"}
          className="w-6 h-6 mr-4"
        >
          <path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM112 256H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
        </svg>
        <span>My Documents</span>
      </div>
      <div
        className="flex items-center p-2 mb-2 cursor-pointer text-black"
        onClick={handleLogout}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="black"
          className="w-6 h-6 mr-4"
        >
          <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 224c0 17.7 14.3 32 32 32s32-14.3 32-32l0-224zM143.5 120.6c13.6-11.3 15.4-31.5 4.1-45.1s-31.5-15.4-45.1-4.1C49.7 115.4 16 181.8 16 256c0 132.5 107.5 240 240 240s240-107.5 240-240c0-74.2-33.8-140.6-86.6-184.6c-13.6-11.3-33.8-9.4-45.1 4.1s-9.4 33.8 4.1 45.1c38.9 32.3 63.5 81 63.5 135.4c0 97.2-78.8 176-176 176s-176-78.8-176-176c0-54.4 24.7-103.1 63.5-135.4z" />
        </svg>
        <span className="flex-1">Logout</span>
      </div>
    </div>
  );
};

export default SidebarComponent;
