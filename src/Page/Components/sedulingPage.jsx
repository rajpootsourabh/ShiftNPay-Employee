import React from "react";
import Footer from "../common/footer";
import Navbar from "../common/navBar";
import safff from "../assets/img/safff.png";
import tracker from "../assets/img/tracker.png";
import tawer from "../assets/img/tawer.png";
import Lower from "../common/lower";

export default function SchedulingPage() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="lg:flex mt-4 justify-center gap-10">
          <div className="mt-4 p-4 lg:w-8/12">
            <div className="text-green-600 mb-4 mt-4 text-lg">
              Restaurant Scheduling Software
            </div>
            <div className="text-2xl lg:text-[46px] leading-10 font-extrabold">
              Restaurant scheduling software for teams
            </div>
            <div className="text-sm mt-2 w-full lg:w-9/12">
              Quickly build schedules and make changes on the go, giving employees the ability to request shift changes and submit time off requests.
            </div>
            <div className="p-2 bg-green-600 text-sm mt-4 text-white w-full lg:w-[150px] text-center rounded-2xl cursor-pointer">
              Start Free Trial
            </div>
          </div>
          <img className="lg:w-5/12 w-full" src={safff} alt="Restaurant scheduling" />
        </div>
        <div className="flex flex-col md:flex-row gap-4 shadow-lg border mt-8 rounded-md justify-between p-4 items-center">
          <div className="text-center md:text-left">
            On average, shiftnpay saves restaurant managers 14 hours per month on scheduling.
          </div>
          <div className="p-2 bg-green-600 text-white rounded-2xl text-sm text-center cursor-pointer">
            Start Free Trial
          </div>
        </div>
        <div className="text-2xl lg:text-[40px] font-bold text-center mt-6">
          Why shiftnpay is better than what you’re using now
        </div>
        <div className="flex flex-col md:flex-row mb-10 items-center justify-around gap-6">
          <div className="w-full md:w-5/12 mt-4">
            <img className="mx-auto" src={tracker} alt="Create your schedule" />
            <div className="text-center font-bold mt-2">Create your schedule in minutes</div>
            <div className="text-center mt-2">
              Time is money. Put more time back into your workday by quickly creating and managing your schedules with us.
            </div>
          </div>
          <div className="w-full md:w-5/12 mt-4">
            <img className="mx-auto" src={tawer} alt="Save costs" />
            <div className="text-center font-bold mt-2">Save $1,000s in labor costs each year</div>
            <div className="text-center mt-2">
              Avoid over or under-staffing by automatically forecasting sales and labor projections to build more accurate schedules.
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto">

      <Lower />
      </div>
      <Footer />
    </>
  );
}
