import React from 'react';
import Navbar from '../common/navBar';
import Lower from '../common/lower';
import Footer from '../common/footer';
import { FaClock, FaChartLine, FaGlobe, FaVideo, FaFileAlt, FaPuzzlePiece, FaFile } from 'react-icons/fa';

export default function ResourceCenter() {
  const resources = [
    { title: 'ShiftInPay Basics', icon: <FaClock className="text-3xl text-green-600" /> },
    { title: 'ShiftInPay Advanced', icon: <FaChartLine className="text-3xl text-green-600" /> },
    { title: 'Use Cases', icon: <FaGlobe className="text-3xl text-green-600" /> },
  ];

  const circularItems = [
    { label: 'Videos', icon: <FaVideo className="text-4xl text-red-400" /> },
    { label: 'Articles', icon: <FaFileAlt className="text-4xl text-red-400" /> },
    { label: 'Quizzes', icon: <FaPuzzlePiece className="text-4xl text-red-400" /> },
    { label: 'Templates', icon: <FaFile className="text-4xl text-red-400" /> },
  ];

  return (
    <div className="">
      <Navbar />
      <div className="container mx-auto py-12">
        <h1 className="text-center text-4xl font-bold mb-10">Resources</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Resource Cards with Icons */}
          {resources.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center border-t-4 border-green-600">
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <p className="text-gray-500">&rarr;</p>
            </div>
          ))}
        </div>

        {/* Circular Icon Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {circularItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full border-4 border-red-300 flex items-center justify-center shadow-md">
                {item.icon}
              </div>
              <p className="mt-4 text-lg font-medium">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-[#108A00] rounded-md mt-10 w-full ">
          <div className="flex justify-between p-4 items-center">
            <div className="text-white text-lg">Start saving your quick service time and money</div>
            <div className="bg-white rounded-full">
              <div className="text-green-800 p-2 cursor-pointer">Get Started Today</div>
            </div>
          </div>
        </div>
      <Lower />
      </div>
      <Footer />
    </div>
  );
}
