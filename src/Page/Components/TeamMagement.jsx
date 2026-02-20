import React from "react";
import Footer from "../common/footer";
import Navbar from "../common/navBar";
import Lower from "../common/lower";
import tracker from "../assets/img/teamMangement.png";
import logoMain from "../assets/img/f_05.png.png";
import newLogo from "../assets/img/Group 1707481309.png";
import graph from "../assets/img/f_02.png.png";
export default function TeamMangement() {
  return (
    <>
      <Navbar />
      <div className="container mt-4 mx-auto px-4 md:px-8 lg:px-16">
        <div className="lg:flex justify-center gap-10">
          <div className="mt-4 p-4 lg:w-8/12">
            <div className="text-green-600 mb-4 mt-4 text-lg">
              Employee Engagement for Restaurants
            </div>
            <div className="text-2xl lg:text-[46px] leading-[50px] font-extrabold">
              The ultimate employee engagement software
            </div>
            <div className="text-sm mt-4 w-full lg:w-9/12">
              Use our feedback and communication tools to create a more positive
              experience for your staff. ̰
            </div>
            <div className="p-2 bg-green-600 text-sm mt-4 text-white w-full lg:w-[150px] text-center rounded-2xl cursor-pointer">
              Start Free Trial
            </div>
          </div>
          <img className="w-5/12" src={tracker} alt="Performance" />
        </div>

        <div className="grid lg:grid-cols-3 mt-8 sm:grid-cols-2 grid-cols-1 gap-10 mb-10 justify-around">
          <div className="mt-6">
            <div className="flex items-center justify-center">
              <img className="w-6/12" src={logoMain} />
            </div>
            <div className="font-semibold text-sm text-center mt-4">
              Decrease high turnover
            </div>
            <div className="text-sm  text-center font-sans mt-2">
              Build trust with your team. Monitor engagement and automate shift
              feedback surveys to gather actionable insights, improve coaching,
              and identify operational issues early.
            </div>
          </div>
          <div className="mt-6">
            <div className="flex items-center justify-center">
              <img className="w-6/12" src={newLogo} />
            </div>
            <div className="font-semibold text-sm text-center mt-4">
              Stay connected
            </div>
            <div className="text-sm  text-center font-sans mt-2">
              The 7shifts Team Chat app centralizes group chats, announcements,
              and Shout-outs, building stronger relationships between team
              members and management. Plus, you’ll save time and money from
              juggling multiple communication apps.
            </div>
          </div>
          <div className="mt-6">
            <div className="flex items-center justify-center">
              <img className="w-6/12" src={graph} />
            </div>
            <div className="font-semibold text-sm text-center mt-4">
              Have impactful performance conversations
            </div>
            <div className="text-sm  text-center font-sans mt-2">
              Spend less time digging through data to track employee performance
              and engagement, and more time on creating a culture that fosters
              continuous improvement.
            </div>
          </div> 
        </div>
        <div className="bg-blue-600 p-2 ">
          <div className="text-white text-center font-bold text-2xl mt-14 mb-6">Centralize mission-critical information</div>
          <div className="flex justify-center ">
          <div className="text-center text-sm w-8/12 text-white">
            Bridge the communication gap between shifts with our digital Manager
            Log Book. Keep managers and owners in the loop on daily operations,
            even when they’re not at the restaurant.
          </div>
          </div>
          <div className="flex justify-center mt-4">

          <button className="bg-white rounded-2xl p-2 mb-24">Get Started- it's free</button>
          </div>
        </div>
      </div>
      <div className="container mt-4 mx-auto flex justify-center">
        <Lower />
      </div>
      <Footer />
    </>
  );
}
