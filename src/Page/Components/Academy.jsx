import React from "react";
import Navbar from "../common/navBar";
import Footer from "../common/footer";
import Lower from "../common/lower";
import firstImage from "../assets/img/first.png";
import taxOnes from "../assets/img/taxOne.png";
import taxTwo from "../assets/img/taxTwo.png";
import taxThree from "../assets/img/taxThree.png";
import mobiless from "../assets/img/moleee.png";
import mobiles from "../assets/img/girlMobile.png";

import CountUp from "react-countup";

export default function Academy() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 grid-cols-1 mt-4 gap-10">
          <div>
            <div className="text-[#108A00] text-sm ">
              Free online restaurant management courses
            </div>
            <div className="text-[45px] font-bold  ">
              Hospitality and Restaurant Management Courses
            </div>
            <div className="text-sm leading-5">
              Guided lessons for restaurant workers, owners and operators to get
              the knowledge they need to grow their businesses and succeed in
              their careers. Get access to professional and free restaurant
              management courses designed for the hospitality industry. Learn
              everything you need to know such as marketing, scheduling, hiring
              and more.
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
        <div className="grid lg:grid-cols-2 gap-10 mt-10 grid-cols-1">
          <div>
            <img src={mobiless} />
          </div>
          <div>
            <div className=" p-2 font-bold text-lg">Who should enroll</div>
            <div className="text-sm p-2 font-bold">
              Restaurant owners, operators, and managers
            </div>
            <div className="text-sm p-2 font-bold">
              Foodservice and hospitality professionals
            </div>
            <div className="text-sm p-2 font-bold">Chefs and kitchen staff</div>
          </div>
        </div>
        <div className="font-bold text-[46px] mt-10 mb-10 text-center">
          Why learn from Shiftnpay{" "}
        </div>
        <div className="grid lg:grid-cols-3 gap-10 grid-cols-2">
          <div>
            <img src={taxOnes} />
            <div className="text-[28px] mt-2 text-center">
              Level up your career
            </div>
            <div className="text-sm mt-2 text-center">
              Get the skills and knowledge you need to make a jump in your
              hospitality career
            </div>
          </div>
          <div>
            <img src={taxTwo} />
            <div className="text-[28px] mt-2 text-center">
              Grow your business
            </div>
            <div className="text-sm mt-2 text-center">
              Empower your team with the knowledge they need to help your
              business grow
            </div>
          </div>
          <div>
            <img src={taxThree} />
            <div className="text-[28px] mt-2 text-center">
              Get expert advice
            </div>
            <div className="text-sm mt-2 text-center">
              Learn from shiftnpay team of restaurant and hospitality industry
              experts
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-10 mt-10 grid-cols-1 mb-10">
          <div>
            <img src={mobiles} />
          </div>
          <div>
            <div className=" p-2 font-bold text-lg">Who should enroll</div>
            <div className="text-sm p-2 font-bold">
              Restaurant owners, operators, and managers
            </div>
            <div className="text-sm p-2 font-bold">
              Foodservice and hospitality professionals
            </div>
            <div className="text-sm p-2 font-bold">Chefs and kitchen staff</div>
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
