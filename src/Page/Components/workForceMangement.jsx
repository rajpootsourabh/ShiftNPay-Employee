import React from "react";
import Footer from "../common/footer";
import Navbar from "../common/navBar";
import Lower from "../common/lower";
import tracker from "../assets/img/serve.png";
import logoMain from "../assets/img/f_05.png.png";
import newLogo from "../assets/img/Group 1707481309.png";
import graph from "../assets/img/f_02.png.png";
export default function WorkForceMangement() {
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
            Take the pain out of Workforce management
            </div>
            <div className="text-sm mt-4 w-full lg:w-9/12">
            No more tedious number crunching! We sync your shift data for accurate, automated tip calculations and payouts.
            </div>
            <div className="p-2 bg-green-600 text-sm mt-4 text-white w-full lg:w-[150px] text-center rounded-2xl cursor-pointer">
              Start Free Trial
            </div>
          </div>
          <img className="w-5/12" src={tracker} alt="Performance" />
        </div>
        <div className="font-bold mt-4 text-2xl text-center">
        Welcome to your new and improved payout process
        </div>
        <div className="text-center mt-2 text-sm mb-4 text-slate-600">
        We works across devices. Track time from anywhere — all data is synced online.
        </div>
       
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 mb-10 justify-around">
          <div className="mt-6">
            <div className="flex items-center justify-center">
              <img className="w-6/12" src={logoMain} />
            </div>
            <div className="font-semibold text-sm text-center mt-4">
              Save time with automatic tip calculations
            </div>
            <div className="text-sm  text-center font-sans mt-2">
              Ditch the calculator and manual data pulls. You tell us who gets
              the tips and how they’re split; we’ll do the rest.
            </div>
          </div>
          <div className="mt-6">
            <div className="flex items-center justify-center">
              <img className="w-6/12" src={newLogo} />
            </div>
            <div className="font-semibold text-sm text-center mt-4">
              Say goodbye to bank runs
            </div>
            <div className="text-sm  text-center font-sans mt-2">
              Replace cash shortages, time-wasting runs to the bank, and delayed
              tip outs with secured, cashless tip payments.
            </div>
          </div>
          <div className="mt-6">
            <div className="flex items-center justify-center">
              <img className="w-6/12" src={graph} />
            </div>
            <div className="font-semibold text-sm text-center mt-4">
              Simplify tips to payroll
            </div>
            <div className="text-sm  text-center font-sans mt-2">
              Make paying employee tips easier by automating which kinds of tips
              should be paid in cash, through payroll, or with Tip Payouts.
            </div>
          </div>
        </div>
      </div>
      <div className="bg-green-600 container mx-auto items-center p-4 shadow-2xl mt-4 flex mb-4 justify-between rounded-md">
          <div className="text-white text-md w-9/12">
            Get everyone home faster (including you)
          </div>
          <div className="bg-white w-[150px] flex items-center justify-center text-center p-2 rounded-full text-green-600 text-sm cursor-pointer">
            Get Started Today
          </div>
        </div>
      <div className="container mt-4 mx-auto flex justify-center">
        <Lower />
      </div>
      <Footer />
    </>
  );
}
