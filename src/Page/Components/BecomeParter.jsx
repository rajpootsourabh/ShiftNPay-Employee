import React from 'react';
import Navbar from '../common/navBar';
import Lower from '../common/lower';
import Footer from '../common/footer';

export default function BecomePartner() {
  return (
    <div className="">
      <Navbar />
      <div className="container mx-auto flex-grow flex items-center justify-center">
        <div className="bg-white shadow-lg w-9/12  rounded-lg p-8 mt-6 max-w-2xl text-center">
          <h1 className="text-4xl font-bold mb-6">Become A Partner</h1>
          <p className="text-lg mb-4">Start tracking time with ShiftnPay</p>
          <div className="flex justify-center space-x-4 text-gray-600 mb-6">
            <span>• 24/7 Support</span>
            <span>• Cancel Anytime</span>
            <span>• Free Forever</span>
          </div>
          <button className="bg-[#108A00] text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-700">
            Create Free Account
          </button>
        </div>
        <div className="bg-[#108A00] mt-10 rounded-md w-full ">
            <div className="flex justify-between p-2 items-center">
                <div className="text-white">Start saving your quick service time and money</div>
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
