import React, { useState } from 'react';
import Navbar from '../common/navBar';
import Lower from '../common/lower';
import Footer from '../common/footer';
import loginImage from "../assets/img/LoginOne.png";

export default function ResourceBasic() {
  const [activeTab, setActiveTab] = useState('basic');

  const renderContent = () => {
    switch (activeTab) {
      case 'basic':
        return (
            <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">How to create a new account?</h2>
          <ol className="list-decimal ml-6 space-y-4">
            <li className="text-lg">Visit the ShiftPay website: <a href="https://shiftpay.com" className="text-green-700 underline">https://shiftpay.com</a></li>
            <li className="text-lg">Click on "Sign up for free" to create a new account.</li>
            <li className="text-lg">Enter your mobile/email and password in the Sign-up modal.</li>
            <li className="text-lg">Get an invoice or Terms of Use and check the "I agree to these terms of use" box.</li>
          </ol>
          <img src={loginImage} alt="Video Placeholder" className="w-full max-w-4xl mx-auto rounded-lg shadow-lg" />
        </div>
        );
      case 'advanced':
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Advanced Account Features</h2>
            <p className="text-lg text-gray-600 mb-6">
              Explore advanced features that help you optimize and manage your accounts more effectively.
            </p>
            <img src={loginImage} alt="Advanced Video Placeholder" className="w-full mb-4 rounded-lg shadow-lg" />
          </div>
        );
      case 'useCases':
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Use Cases</h2>
            <p className="text-lg text-gray-600 mb-6">
              See how others are utilizing ShiftPay to grow their businesses and manage their operations seamlessly.
            </p>
            <img src={loginImage} alt="Use Cases Placeholder" className="w-full mb-4 rounded-lg shadow-lg" />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="">
      <Navbar />

      <div className="container mx-auto px-4 py-10 flex-grow">
        <h1 className="text-4xl font-bold text-center mb-10">Resources</h1>

        {/* Tabs Section */}
        <div className="flex space-x-4 mb-8">
          <button
            onClick={() => setActiveTab('basic')}
            className={`px-4 py-2 rounded-md ${
              activeTab === 'basic' ? 'bg-green-700 text-white' : 'bg-gray-100'
            }`}
          >
            ShiftPay Basics
          </button>
          <button
            onClick={() => setActiveTab('advanced')}
            className={`px-4 py-2 rounded-md ${
              activeTab === 'advanced' ? 'bg-green-700 text-white' : 'bg-gray-100'
            }`}
          >
            ShiftPay Advanced
          </button>
          <button
            onClick={() => setActiveTab('useCases')}
            className={`px-4 py-2 rounded-md ${
              activeTab === 'useCases' ? 'bg-green-700 text-white' : 'bg-gray-100'
            }`}
          >
            Use Cases
          </button>
        </div>

        {/* Content Section */}
        {renderContent()}

        {/* Call to Action Banner */}
        <div className="bg-green-700 text-white rounded-lg px-6 py-2 flex justify-between items-center mt-10">
          <span className="text-xl">Start saving your quick service time and money</span>
          <button className="bg-white text-green-800 font-bold py-3 px-6 rounded-full shadow-md hover:bg-gray-100">
            Get Started Today
          </button>
        </div>
        <Lower />
      </div>

      <Footer />
    </div>
  );
}
