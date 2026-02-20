import React from "react";
import Navbar from "../common/navBar";
import Footer from "../common/footer";
import imageOne from "../assets/img/5-View Checklist 1.png";
import Lower from "../common/lower";
export default function DocumentStorage() {
  return (
    <div className="">
      <Navbar />
      <div className="container mx-auto">
        <div className="font-bold text-3xl mt-10 text-center">Secure and Organized Document Storage</div>
        <div className="text-md mt-10 text-center">
          Keep all your essential files in one secure, centralized location with
          ShiftNPay's Document Storage feature. Upload, manage, and access
          important documents anytime, anywhere. Simplify compliance and team
          collaboration with easy sharing and organized storage. Rest assured,
          your data is safe and always accessible when needed.
        </div>
        <div className="mt-10">
          <img src={imageOne} className="w-full  h-[600px]" />
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
