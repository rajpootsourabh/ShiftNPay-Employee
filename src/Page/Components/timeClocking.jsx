import React from "react";
import Footer from "../common/footer";
import Lower from "../common/lower";
import Navbar from "../common/navBar";
import lap from "../assets/img/lap.png";
import performance from "../assets/img/performance.png"

const Feature = ({ number, title, description }) => (
  <div className="mb-4">
    <div className="flex items-center mb-2">
      <div className="h-10 w-10 rounded-full flex justify-center items-center text-white bg-green-600">
        {number}
      </div>
      <div className="ml-2">{title}</div>
    </div>
    <div className="text-sm leading-10 text-slate-400">
      {description}
    </div>
  </div>
);  
export default function TimeClocking() {
  const features = [
    {
      number: 1,
      title: "Export punches to payroll",
      description:
        "Save time comparing time punches against scheduled hours and calculating paychecks based on hours worked. Shifynpay syncs data between scheduling, time clocking, and payroll to make managing your labor a breeze.",
    },
    {
      number: 2,
      title: "Stay labor compliant",
      description:
        "Ensure your labor practices comply with regulations by tracking attendance accurately. The system helps in maintaining records that meet legal requirements.",
    },
    {
      number: 3,
      title: "Improve data accuracy",
      description:
        "Sync your data across all platforms to reduce errors and improve overall efficiency. Accurate data ensures better decision-making and streamlined operations.",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="lg:flex mt-4 justify-center gap-10">
          <div className="mt-4 p-4 lg:w-8/12">
            <div className="text-green-600 mb-4 mt-4 text-lg">
              Restaurant Scheduling Software
            </div>
            <div className="text-2xl lg:text-[46px] leading-[50px] font-extrabold">
              A restaurant time clock to cut your labor costs
            </div>
            <div className="text-sm mt-4 w-full lg:w-9/12">
              Track attendance, stay labor compliant, and sync your data to improve accuracy—all within an easy-to-use app.
            </div>
            <div className="p-2 bg-green-600 text-sm mt-4 text-white w-full lg:w-[150px] text-center rounded-2xl cursor-pointer">
              Start Free Trial
            </div>
          </div>
          <img className="w-5/12" src={performance} alt="Performance" />
        </div>
        <div className="mt-12 flex flex-wrap justify-around">
          <div className="w-full lg:w-5/12">
            <img src={lap} alt="Laptop" />
          </div>
          <div className="w-full lg:w-5/12">
            {features.map((feature, index) => (
              <Feature
                key={index}
                number={feature.number}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
        <div className="bg-green-600 items-center p-4 shadow-2xl mt-4 flex mb-4 justify-between rounded-md">
          <div className="text-white text-md w-9/12">
            Restaurants that use 7shifts for time tracking save $2,000 per month on time theft and payroll errors
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
