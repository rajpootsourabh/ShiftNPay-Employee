// src/components/Layout.js

import React from 'react';
import Header from './HeaderComponent';   // Import Header component
import Footer from './Footer';   // Import Footer component
import Sidebar from './SidebarComponent'; // Import Sidebar component
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AuthenticatedLayout = ({ children }) => {
  return (
    <div className="flex justify-center">
      <ToastContainer position="bottom-right" autoClose={3000} />
      {/* <Header /> */}
      <div className="flex flex-1 w-full flex-nowrap">
        <Sidebar />   {/* Render Sidebar */}
        <div className="flex-1   bg-white mt-6 ml-3"  >  {/* Main content area */}
          {children}  {/* Render child components */}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default AuthenticatedLayout;
