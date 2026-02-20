import React from "react";
import Navbar from "../common/navBar";
import Footer from "../common/footer";
import imageOne from "../assets/img/Shift Schedule 1.png";
import Lower from "../common/lower";
export default function MangerLookBook() {
  return (
    <div className="">
      <Navbar />
      <div className="container mx-auto">
        <div className="font-bold text-3xl mt-10 text-center">Streamline Operations with the Manager Logbook</div>
        <div className="text-md mt-10 text-center">
        Track daily activities, record important notes, and manage team updates seamlessly with ShiftNPay's Manager Logbook. Ensure smooth communication and efficient operations with a centralized, easy-to-access digital record. Stay informed and in charge, all in one place.
        </div>
        <div className="mt-10">
          <img src={imageOne} className="w-full  h-[600px]" />
        </div>
        <div className="font-bold text-3xl mt-10 text-center mt-10">A modern timekeeping web app</div>
        <div className="text-md mt-10 text-center mt-10">
        Clockify is a completely FREE timekeeping application that lets you track how much time you spend working on projects and tasks. Whether for personal or business use — Clockify makes sure you manage your or your employee hours in a more organized way.
        </div>
        <div className="bg-[#108A00] rounded-md w-full mt-10 ">
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
