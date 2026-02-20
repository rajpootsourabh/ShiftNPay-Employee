import React from "react";
import Navbar from "../common/navBar";
import Footer from "../common/footer";
import Lower from "../common/lower";
import firstImage from "../assets/img/first.png";
import taxOnes from "../assets/img/taxOne.png";
import taxTwo from "../assets/img/graphs.png";
import taxThree from "../assets/img/pName.png";
import mobiless from "../assets/img/moleee.png";
import mobiles from "../assets/img/beauty.png";
import mobilessss from "../assets/img/calenderss.png";
import CountUp from "react-countup";

export default function TaskMangement() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 grid-cols-1 mt-4 gap-10">
          <div>
            <div className="text-[#108A00] text-sm ">
            Bar and Brewery Employee Scheduling Software
            </div>
            <div className="text-[45px] font-bold  ">
            Build perfect schedules in minutes
            </div>
            <div className="text-sm leading-5">
            Raise your glass to spending 66% less time scheduling staff, streamlining team communication, and saving on monthly labor costs.
            </div>
            <button className="text-white rounded bg-[#108A00] text-sm p-2 mt-4 ">
              Start Free Trial
            </button>
          </div>
          <div>
            <img src={firstImage} className="" />
          </div>
        </div>
        
        <div className="text-[#3B3C4E] font-bold p-2 text-[24px] mt-14 text-center">
          Thousands Are Choosing Shiftnpay Time Tracker
        </div>
        <div className="lg:flex p-2 justify-center items-center gap-14 mt-6 ">
          <div>
            <div className="text-[36px] text-[#3B3C4E]">
              <CountUp end={11000000} duration={2} />
            </div>
            <div className="text-[18px] text-[#484A61] font-sans">
              Hours Tracked
            </div>
          </div>
          <div>
            <div className="text-[36px] text-[#3B3C4E]">
              <CountUp end={840000} duration={2} />
            </div>
            <div className="text-[18px]  text-[#484A61] font-sans">
              Tasks Completed
            </div>
          </div>
          <div>
            <div className="text-[36px] text-[#3B3C4E]">
              <CountUp end={51000} duration={2} />
            </div>
            <div className="text-[18px] text-[#484A61] font-sans">
              Productive Users
            </div>
          </div>
          <div>
            <div className="text-[36px] text-[#3B3C4E]">
              <CountUp end={35000} duration={2} />{" "}
            </div>
            <div className="text-[18px] text-[#484A61] font-sans">
              Projects Succeeded
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-10 mt-10 grid-cols-1 mb-10">
          <div>
            <img src={mobiless} />
          </div>
          <div>
            <div className=" p-2 font-bold text-lg">
            Save your bar or brewery time and money
            </div>
            <div className="text-sm p-2 font-bold">
            Bars and breweries rake in over 550B a year in the US—some of the highest sales in the industry. Is your bar making the best team management choices to get the most value out of that revenue?
            </div>
          </div>
        </div>
        <div className="font-bold text-[46px] mt-10 mb-10 text-center">
        Create the perfect schedule in minutes
        </div>
        <div className="grid lg:grid-cols-3 gap-10 grid-cols-2">
          <div>
            <img src={mobilessss} />
            <div className="text-[28px] mt-2 text-center">
            Project Management
            </div>
            <div className="text-sm mt-2 text-center">
            Tracking staff time against assigned tasks for effective project management.
            </div>
          </div>
          <div>
            <img src={taxTwo} />
            <div className="text-[28px] mt-2 text-center">
            Vendor Management
            </div>
            <div className="text-sm mt-2 text-center">
            Ability to set up your own online restaurant account and maintain staff records.
            </div>
          </div>
          <div>
            <img src={taxThree} />
            <div className="text-[28px] mt-2 text-center">Report Management</div>
            <div className="text-sm mt-2 text-center">
            Capability to monitor performance reports for admin, vendors, and staff.
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="bg-[#108A00] text-white rounded-md p-2 mt-2 mb-4">
            Request A Demo
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 mt-10 grid-cols-1 mb-10">
          <div>
            <img src={mobiless} />
          </div>
          <div>
            <div className=" p-2 font-bold text-lg">
              Your restaurant team communication app
            </div>
            <div className="text-sm p-2 font-bold">
              Send real-time messages to team members, departments, or your
              whole team. Easily create group chats, find coverage, or send
              attachments. Send one-way announcements with read receipts to
              ensure your most important messages are received.
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-10 mt-10 grid-cols-1 mb-10">
        <div>
            <div className=" p-2 font-bold text-lg">
            Custom Document Upload and Acknowledgement
            </div>
            <div className="text-sm p-2 font-bold">
            Customize your onboarding package by uploading a document for your employees to acknowledge. This can include the company handbook, company policies, and more.
            </div>
          </div>
          <div>
            <img src={mobiless} />
          </div>
         
        </div>
        <div className="grid lg:grid-cols-2 gap-10 mt-10 grid-cols-1 mb-10">
          <div>
            <div className=" p-2 font-bold text-lg">
              Custom Document Upload and Acknowledgement
            </div>
            <div className="text-sm p-2 font-bold">
              Customize your onboarding package by uploading a document for your
              employees to acknowledge. This can include the company handbook,
              company policies, and more.
            </div>
          </div>
          <div>
            <img src={mobiless} />
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-10 mt-10 grid-cols-1 mb-10">
          <div>
            <img src={mobiles} />
          </div>
          <div>
            <div className=" p-2 font-bold text-lg">Grow your business</div>
            <div className="text-sm p-2 font-bold">
              With labor costs in check, staff engaged, and work schedules
              managed, you can focus on the things that matter—serving drinks
              and growing your business.
            </div>
            <div>
              Devote more time to expanding your team and adding new locations
              to your operations. With unlimited employee and location support,
              Shiftnpay is here to scale with you all the way.
            </div>
            <div>
              If you ever need a hand, our support team is only a chat, email,
              or phone call away.
            </div>
          </div>
        </div>
        <div className="bg-[#108A00] rounded-md w-full ">
          <div className="flex justify-between p-2 items-center">
            <div className="text-white">
              Start saving your quick service time and money
            </div>
            <div className="bg-white rounded-full">
              <div className="text-green-800 p-2">Get Started Today</div>
            </div>
          </div>
        </div>
        <Lower />
      </div>
      <Footer />
    </div>
  );
}
