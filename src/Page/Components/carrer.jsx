import React, { useState } from "react";
import Navbar from "../common/navBar";
import Footer from "../common/footer";
import Lower from "../common/lower";

const jobData = {
    'All positions': [
      { title: 'Full-Stack Developers', location: 'Paris', type: 'Full-time', description: 'Due to growing workload, we are looking for experienced and talented Full-Stack Developers to join our fast-paced Engineering team. You will work closely with Product, Design and Marketing to analyze, develop, debug, test, roll-out and support new and existing product features.' },
      { title: 'Busser', location: 'Paris', type: 'Full-time', description: 'Due to growing workload, we are looking for experienced and talented Full-Stack Developers to join our fast-paced Engineering team. You will work closely with Product, Design and Marketing to analyze, develop, debug, test, roll-out and support new and existing product features.' },
      { title: 'Food runner', location: 'Hybrid', type: 'Full-time', description: 'Join as a food runner for top-tier clients.' },
      { title: 'Barista', location: 'Paris', type: 'Full-time', description: 'Seeking baristas with experience.' }
    ],
    'Fast food attendant': [
      { title: 'Fast Food Attendant', location: 'Rome', type: 'Part-time', description: 'Since 2019 we’ve worked on 30+ major projects from 8 different industries that are being used by 500,000+ users and 1000+ businesses from 70+ different countries. Need full-cycle product development or an improvement cycle? Let’s talk!' }
    ],
    'Busser': [
      { title: 'Busser', location: 'Paris', type: 'Full-time', description: 'If you are PM and you eager to join our fast-paced Engineering team. You will work closely with Product, Design and Marketing to analyze, develop, debug, test, roll-out and support new and existing product features. 30+ major projects from 8 different industries that are being used by 500,000+ users and 1000+ businesses from 70+ different countries.' }
    ],
    'Food runner': [
      { title: 'Food runner', location: 'Hybrid', type: 'Full-time', description: 'We’ve worked on 30+ major projects from 8 different industries that are being . Need full-cycle product development or an improvement cycle? Let’s talk!' }
    ],
    'Dishwasher': [
      { title: 'Dishwasher', location: 'Berlin', type: 'Part-time', description: 'Dishwashers needed for evening shifts.' }
    ],
    'Prep cook': [
      { title: 'Prep Cook', location: 'Paris', type: 'Full-time', description: 'Experienced prep cook needed immediately.' }
    ]
  };
  
export default function Carrer() {
    const [selectedTab, setSelectedTab] = useState('All positions');

    const handleTabClick = (tab) => {
      setSelectedTab(tab);
    };
  
  return (
    <div>
      <Navbar />
      <div className="flex  container mx-auto  p-4">
      {/* Sidebar */}
      <div className=" p-4 border-r">
        <h1 className="text-2xl font-bold mb-4">We have 17 open positions now!</h1>
        <ul>
          {Object.keys(jobData).map((category) => (
            <li
              key={category}
              className={`cursor-pointer p-2 rounded-md mb-2 ${selectedTab === category ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'}`}
              onClick={() => handleTabClick(category)}
            >
              {category} ({jobData[category].length})
            </li>
          ))}
        </ul>
      </div>

      {/* Job Listings */}
      <div className="w-8/12 ">
        {jobData[selectedTab].map((job, index) => (
          <div key={index} className="border p-4 rounded-md mb-4 shadow-md">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">{job.title}</h2>
              <span className="bg-green-500 text-white px-3 py-1 rounded-full">{job.type}</span>
            </div>
            <p className="text-gray-600 mt-2 ">{job.location}</p>
            <p className="mt-2 font-bold">{job.description}</p>
            <button className="mt-4 bg-[#108A00] text-white px-4 py-2 rounded-md">See positions →</button>
          </div>
        ))}
      </div>
    </div>
      <div className="container mx-auto">
        <div className="bg-[#108A00] rounded-md w-full ">
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
