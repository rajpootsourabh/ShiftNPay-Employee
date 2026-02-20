import React from "react";

import Footer from "../common/footer";
import CountUp from "react-countup";
import Lower from "../common/lower";
import Navbar from "../common/navBar";

export default function Affliated() {
  return (
    <div>
        <Navbar />
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="bg-white p-6 text-center">
          <div className="font-bold text-2xl mb-2">
            Join our Affiliate Program
          </div>
          <div className="text-sm mb-4">
            Transform lives by sharing the world's best learning experience.
          </div>
          <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700">
            Join for Free
          </button>
        </div>
        {/* Pricing Section */}
        <div className="text-center mt-10">
          <div className="font-bold text-xl">Find Your Perfect Plan</div>
          <div className="text-sm mt-2 mb-4 text-gray-600">
            Discover the ideal plan to fuel your business growth. Our pricing
            options are carefully crafted to cater to businesses.
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-6 mt-6">
          {/* Pro Plan */}
          <div className="w-full lg:w-1/3 bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="font-bold text-lg">Pro</div>
            <div className="text-3xl font-bold text-green-600 mt-4 mb-2">
              $29.99
              <span className="text-sm font-normal">/month</span>
            </div>
            <ul className="text-sm text-gray-600 mb-4">
              <li>Basic scheduling and time clocking</li>
              <li>Automatic reminders</li>
              <li>Live support</li>
              <li>Customizable permissions</li>
            </ul>
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
              Get Started
            </button>
          </div>
          <div className="w-full lg:w-1/3 bg-blue-50 shadow-lg rounded-lg p-6 text-center">
            <div className="font-bold text-lg">Business</div>
            <div className="text-3xl font-bold text-green-600 mt-4 mb-2">
              $69.99
              <span className="text-sm font-normal">/month</span>
            </div>
            <ul className="text-sm text-gray-600 mb-4">
              <li>Advanced scheduling tools</li>
              <li>Employee self-service</li>
              <li>Integration with payroll systems</li>
              <li>Priority support</li>
            </ul>
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
              Get Started
            </button>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="lg:flex p-4 justify-center items-center gap-14 mt-10">
          <div>
            <div className="text-4xl font-bold text-gray-800">
              <CountUp end={11000000} duration={2} />
            </div>
            <div className="text-lg text-gray-600">Hours Tracked</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-gray-800">
              <CountUp end={840000} duration={2} />
            </div>
            <div className="text-lg text-gray-600">Tasks Completed</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-gray-800">
              <CountUp end={51000} duration={2} />
            </div>
            <div className="text-lg text-gray-600">Productive Users</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-gray-800">
              <CountUp end={35000} duration={2} />
            </div>
            <div className="text-lg text-gray-600">Projects Succeeded</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-green-600 mt-10 rounded-md w-full text-center text-white p-6">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div>Start saving your quick service time and money</div>
            <button className="bg-white text-green-800 px-6 py-2 rounded-full mt-4 lg:mt-0 hover:bg-gray-200">
              Get Started Today
            </button>
          </div>
        </div>

        <Lower />
      </div>
      <Footer />
    </div>
  );
}
