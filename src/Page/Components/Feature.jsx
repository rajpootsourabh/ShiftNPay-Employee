import React from "react";
import Footer from "../common/footer";
import Lower from "../common/lower";
import Navbar from "../common/navBar";
import lap from "../assets/img/lap.png";
import performance from "../assets/img/mobileTracker.png";
import calender from "../assets/img/Calender.png"
export default function Feature() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="lg:flex mt-4 justify-center gap-10">
          <div className="mt-4 p-4 lg:w-8/12">
            <div className="text-green-600 mb-4 mt-4 text-lg">
              Quick Service Employee Scheduling Software
            </div>
            <div className="text-2xl lg:text-[24px] leading-[50px] font-extrabold">
              Easy employee scheduling for your restaurant
            </div>
            <div className="text-sm mt-4 w-full lg:w-9/12">
              Don’t let your tech slow you down! Schedule and pay your team in
              one simple to use app.
            </div>
            <div className="p-2 bg-green-600 text-sm mt-4 text-white w-full lg:w-[150px] text-center rounded-2xl cursor-pointer">
              Start Free Trial
            </div>
          </div>
          <img className="w-5/12" src={performance} alt="Performance" />
        </div>
        <div className="lg:flex mt-4 justify-center gap-10">
          <img className="w-5/12" src={lap} alt="Performance" />
          <div className="mt-4 p-4 lg:w-8/12">
         
            <div className="text-2xl lg:text-[24px] leading-[50px] font-extrabold">
            Conquering the quick-service restaurant landscape
            </div>
            <div className="text-2xl lg:text-sm  w-8/12 font-extrabold">
              It’s more important than ever before for quick-service (QSR) and
              limited-service (LSR) restaurants to find new ways to improve
              margins and improve business efficiency.
            </div>
            <div className="p-2 bg-green-600 text-sm mt-4 text-white w-full lg:w-[150px] text-center rounded-2xl cursor-pointer">
              Start Free Trial
            </div>
          </div>
        </div>
        <div className="lg:flex mt-4 justify-center gap-10">
          <div className="mt-4 p-4 lg:w-8/12">
          <div className="text-[24px] leading-[24px] font-extrabold">
              Publish your new schedule. Automatically notify employees. Make
              changes on the fly.
            </div>
            <div className="text-sm  w-6/12">
            Publish your new schedule. Automatically notify employees. Make changes on the fly. ̰
            </div>
            <div className="p-2 bg-green-600 text-sm mt-4 text-white w-full lg:w-[150px] text-center rounded-2xl cursor-pointer">
              Start Free Trial
            </div>
          </div>
          <img className="w-5/12" src={calender} alt="Performance" />
        </div>
        <div className="bg-green-600 items-center p-4 shadow-2xl mt-4 flex mb-4 justify-between rounded-md">
          <div className="text-white text-md w-9/12">
            Start saving your quick service time and money
          </div>
          <div className="bg-white w-[150px] flex items-center justify-center text-center p-2 rounded-full text-green-600 text-sm cursor-pointer">
            Start Free Trial
          </div>
        </div>
      </div>
      <div className="container mx-auto flex justify-center">
        <Lower />
      </div>
      <Footer />
    </>
  );
}
