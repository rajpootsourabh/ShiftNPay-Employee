import React, { useEffect, useState } from "react";
import Logo from "../assets/img/logo.png";
import men from "../assets/img/men.png";
import group from "../assets/img/group.png";
import Footer from "../common/footer";
import groups from "../assets/img/groups.png";
import performance from "../assets/img/performance.png";
import { useNavigate } from "react-router-dom";
import Navbar from "../common/navBar";
import barGraph from "../assets/img/barGraph.png";
import desktop from "../assets/img/desktop.png";
import logoMain from "../assets/img/f_05.png.png";
import newLogo from "../assets/img/Group 1707481309.png";
import graph from "../assets/img/f_02.png.png";
import kitchen from "../assets/img/male-chef-kitchen-preparing-salad-rubbing.png";
import CountUp from "react-countup";
import Lower from "../common/lower";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import review from '../assets/img/352211.png';
import Slider from 'react-slick';
const testimonials = [
  {
    name: 'James Pattinson',
    review: 'Lorem ipsum facilisis amet nisi at nec. Scelerisque risus tortor donec ipsum consequat semper consequat adipiscing ultricies.',
    rating: 5,
  },
  {
    name: 'Greg Stuart',
    review: 'Vestibulum, cum nam non amet consectetur morbi aenean condimentum eget. Ultrices integer nunc neque accumsan lorem.',
    rating: 4,
  },
  {
    name: 'Trevor Mitchell',
    review: 'Ut tristique vivamus sed porttitor arcuus. A facilisis metus pretium habitant lorem.',
    rating: 5,
  },
];

export default function Dashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(1);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };
  const ReviewCard = ({ name, review, rating }) => {
    return (
      <div className='p-6 mr-10 bg-white rounded-lg shadow-lg text-center'>
        <img className='mx-auto rounded-full w-24 h-24' src={`https://i.pravatar.cc/150?u=${name}`} alt={name} />
        <h3 className='text-lg font-semibold mt-4 text-blue-600'>{name}</h3>
        <div className='flex justify-center mt-2'>
          {Array.from({ length: rating }).map((_, index) => (
            <span key={index} className='text-orange-400'>★</span>
          ))}
        </div>
        <p className='mt-4 text-gray-600'>{review}</p>
      </div>
    );
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };
  return (
    <>
      <Navbar />
      <div className="border border-green-600"></div>
      <div className="container mx-auto">
        <div className="grid p-2 lg:grid-cols-2 grid-cols-1 mt-10 justify-center ">
          <div className="lg:ml-14 mt-10">
            <div className="text-[55px] w-11/12 leading-12 font-bold text-[#3B3C4E]">
              Building better restaurant teams one shift at a time
            </div>
            <div className="text-md text-slate-600 mt-10 font-sans">
              Schedule, pay, and retain your team in one app.
            </div>
            <div
              onClick={() => {
                navigate("/Login");
              }}
              className=" bg-[#108A00] rounded-2xl w-3/12 mt-4 cursor-pointer mb-6"
            >
              <div className="text-white p-2 text-center">Start Free Trial</div>
            </div>
          </div>
          <div>
            <img
              className={`w-10/12 ${isVisible ? "" : "opacity-0"}`}
              src={groups}
              alt="Groups"
              style={{
                opacity: isVisible ? 1 : 0,
                transition: "opacity 2s ease-in-out",
              }}
            />
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
        <div className="grid p-2 lg:grid-cols-2 grid-cols-1 mt-24">
          <div className=" mt-10">
            <div className="font-bold text-[40px] ">
              Time management features
            </div>
            <div className="text-[17px] w-9/12 mt-6 font-normal font-sans">
              Track productivity, attendance, and billable hours with a simple
              time tracker and timesheet.
            </div>
            <div className="text-[#6257E2] text-[18px] mt-14 mb-6 font-sans font-semibold">
              TIMEKEEPING
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
              <div className="border rounded-md">
                <div className="p-2">
                  <div className="text-[16px] font-sans font-semibold">
                    Accurate Payroll
                  </div>
                  <div className="text-[16px] font-sans">
                    Ensures precise employee payments by tracking exact hours
                    worked.
                  </div>
                </div>
              </div>
              <div className="border rounded-md">
                <div className="p-2">
                  <div className="text-[16px] font-sans font-semibold">
                    Efficiency
                  </div>
                  <div className="text-[16px] font-sans">
                    Streamlines operations and identifies areas for productivity
                    improvement.
                  </div>
                </div>
              </div>
            </div>
            <div className="grid lg:grid-cols-2 mt-4 grid-cols-1 gap-6">
              <div className="border rounded-md">
                <div className="p-2">
                  <div className="text-[16px] font-sans font-semibold">
                    Compliance
                  </div>
                  <div className="text-[16px] font-sans">
                    Maintains adherence to labor laws and regulations.
                  </div>
                </div>
              </div>
              <div className="border rounded-md">
                <div className="p-2">
                  <div className="text-[16px] font-sans font-semibold">
                    Employee Accountability
                  </div>
                  <div className="text-[16px] font-sans">
                    Encourages punctuality and responsibility among staff.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img className="w-11/12" src={performance} />
          </div>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 mt-24">
          <div>
            <img className="w-11/12" src={barGraph} />
          </div>
          <div className=" mt-10 p-2">
            <div className="font-bold text-[40px] ">Reporting</div>
            <div className="text-[17px] w-9/12 mt-6 font-normal font-sans">
              Track productivity, attendance, and billable hours with a simple
              time tracker and timesheet.
            </div>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6 mt-6">
              <div className="border rounded-md">
                <div className="p-2">
                  <div className="text-[16px] font-sans font-semibold">
                    Admin Dashboard
                  </div>
                  <div className="text-[16px] font-sans">
                    Centralizes management data for quick, informed
                    decision-making.
                  </div>
                </div>
              </div>
              <div className="border rounded-md">
                <div className="p-2">
                  <div className="text-[16px] font-sans font-semibold">
                    Weekly Reports
                  </div>
                  <div className="text-[16px] font-sans">
                    Provides regular insights to track performance and trends
                    over time.
                  </div>
                </div>
              </div>
            </div>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 mt-4 grid-cols-1 gap-6">
              <div className="border rounded-md">
                <div className="p-2">
                  <div className="text-[16px] font-sans font-semibold">
                    Vendor Dashboard
                  </div>
                  <div className="text-[16px] font-sans">
                    Streamlines vendor management and inventory control.
                  </div>
                </div>
              </div>
              <div className="border rounded-md">
                <div className="p-2">
                  <div className="text-[16px] font-sans font-semibold">
                    Daily Timesheet 
                  </div>
                  <div className="text-[16px] font-sans">
                    Ensures accurate and up-to-date employee attendance records.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid  p-2 lg:grid-cols-2  items-center mb-4 grid-cols-1 mt-6">
          <div className=" mt-10">
            <div className="font-bold text-[40px] ">Management</div>
            <div className="text-[17px] w-9/12 mt-6 font-normal font-sans">
              Track productivity, attendance, and billable hours with a simple
              time tracker and timesheet.
            </div>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6">
              <div className="border rounded-md">
                <div className="p-2">
                  <div className="text-[16px] font-sans font-semibold">
                    Employee Management 
                  </div>
                  <div className="text-[16px] font-sans">
                    Easily add and update employee details for streamlined HR
                    processes.
                  </div>
                </div>
              </div>
              <div className="border rounded-md">
                <div className="p-2">
                  <div className="text-[16px] font-sans font-semibold">
                    Project Definition
                  </div>
                  <div className="text-[16px] font-sans">
                    Clearly define projects and tasks to ensure organized
                    workflow and clear objectives.
                  </div>
                </div>
              </div>
            </div>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 mb-4 mt-4 grid-cols-1 gap-6 ">
              <div className="border rounded-md">
                <div className="p-2">
                  <div className="text-[16px] font-sans font-semibold">
                    Task Assignment
                  </div>
                  <div className="text-[16px] font-sans">
                    Efficiently assign tasks to staff, improving productivity
                    and accountability.
                  </div>
                </div>
              </div>
              <div className="border rounded-md">
                <div className="p-2">
                  <div className="text-[16px] font-sans font-semibold">
                    Timesheet Access
                  </div>
                  <div className="text-[16px] font-sans">
                    Simplifies time tracking and payroll processing with
                    accessible timesheet data.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img className="w-11/12" src={desktop} />
          </div>
        </div>
      </div>
      <div className="background-image" >

      <div 
        className=' relative bg-cover bg-center py-20' 
        style={{ backgroundImage: `url(${review})` }}
      >
        <div className= 'container mx-auto bg-black bg-opacity-50 py-10 px-4 rounded-lg'>
          <h2 className='text-center text-3xl font-bold mb-6 text-white'>Join millions of happy users</h2>
          <Slider {...settings}>
            {testimonials.map((item, index) => (
              <ReviewCard key={index} {...item} />
            ))}
          </Slider>
        </div>
      </div>
        </div>
      <div className="container mx-auto">
        <div className="font-bold text-[40px] text-center  mt-4 mb-2">
          Everything in One Place
        </div>
        <div className="text-[18px] font-sans text-center">
          We works across devices. Track time from anywhere — all data is synced
          online.
        </div>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 mb-10 justify-around">
          <div className="mt-6">
            <div className="flex items-center justify-center">
              <img className="w-6/12" src={logoMain} />
            </div>
            <div className="font-semibold text-sm text-center mt-4">
              Project Management
            </div>
            <div className="text-sm  text-center font-sans mt-2">
              Tracking staff time against assigned tasks for effective project
            </div>
          </div>
          <div className="mt-6">
            <div className="flex items-center justify-center">
              <img className="w-6/12" src={newLogo} />
            </div>
            <div className="font-semibold text-sm text-center mt-4">
              Vendor Management
            </div>
            <div className="text-sm  text-center font-sans mt-2">
              Ability to set up your own online restaurant account and maintain
              staff records.
            </div>
          </div>
          <div className="mt-6">
            <div className="flex items-center justify-center">
              <img className="w-6/12" src={graph} />
            </div>
            <div className="font-semibold text-sm text-center mt-4">
              Report Management
            </div>
            <div className="text-sm  text-center font-sans mt-2">
              Capability to monitor performance reports for admin, vendors, and
              staff.
            </div>
          </div>
        </div>
        <div className="section-logo mt-4">
          <div className="p-2">
            <div className="text-4xl text-white text-center ">
              Starting with Shiftnpay is easy,{" "}
            </div>
            <div className="text-4xl text-white text-center ">
              fast and free
            </div>
            <div className="cursor-pointer text-white text-center text-sm font-sans mt-4">
              It only takes a few clicks to get started
            </div>
            <div className="flex justify-center items-center mt-6">
              <div
                onClick={() => {
                  navigate("/timeTracker");
                }}
                className="cursor-pointer bg-white p-2 text-[#1E94FD] w-6/12 text-center rounded-md"
              >
                Get srarted - it's free
              </div>
            </div>
          </div>
        </div>
       <Lower/>
      </div>
      <Footer />
    </>
  );
}
