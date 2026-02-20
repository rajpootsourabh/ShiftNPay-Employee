import React from 'react';

import { MdRestaurant, MdSecurity, MdConstruction, MdFactory, MdShoppingCart, MdLocalHospital, MdLocalShipping, MdHotel, MdEvent, MdDirectionsBus, MdSchool, MdCleaningServices, MdHome } from 'react-icons/md';
import Navbar from '../common/navBar';
import Footer from '../common/footer';

const data = [
  {
    title: 'Food Services',
    description:
      'Streamline staffing for restaurants, catering, and food production with real-time scheduling, automated payroll, and seamless shift management.',
    icon: <MdRestaurant size={40} className="text-green-500" />,
  },
  {
    title: 'Security',
    description:
      'Efficiently manage security personnel assignments, payments, and real-time updates, ensuring safety and reliability.',
    icon: <MdSecurity size={40} className="text-green-500" />,
  },
  {
    title: 'Construction',
    description:
      'Simplify workforce allocation for construction projects with scheduling and contract management.',
    icon: <MdConstruction size={40} className="text-green-500" />,
  },
  {
    title: 'Manufacturing',
    description:
      'Support high-volume production with scalable shift planning and payroll processing.',
    icon: <MdFactory size={40} className="text-green-500" />,
  },
  {
    title: 'Retail',
    description:
      'Optimize retail staffing during peak seasons with automated scheduling and payroll systems.',
    icon: <MdShoppingCart size={40} className="text-green-500" />,
  },
  {
    title: 'Healthcare',
    description:
      'Provide staffing solutions for hospitals and clinics with scheduling and compliance tracking.',
    icon: <MdLocalHospital size={40} className="text-green-500" />,
  },
  {
    title: 'Logistics and Warehousing',
    description:
      'Streamline shifts for warehouse workers and delivery drivers with scheduling and payroll systems.',
    icon: <MdLocalShipping size={40} className="text-green-500" />,
  },
  {
    title: 'Hospitality',
    description:
      'Manage flexible shifts for hotels, event planners, and tourism sectors.',
    icon: <MdHotel size={40} className="text-green-500" />,
  },
  {
    title: 'Event Management',
    description:
      'Easily handle short-term staffing needs for events and exhibitions.',
    icon: <MdEvent size={40} className="text-green-500" />,
  },
  {
    title: 'Transportation',
    description:
      'Support drivers and logistics operators with scheduling and compliance reporting.',
    icon: <MdDirectionsBus size={40} className="text-green-500" />,
  },
  {
    title: 'Education',
    description:
      'Simplify staffing for schools and training centers with payroll systems.',
    icon: <MdSchool size={40} className="text-green-500" />,
  },
  {
    title: 'Cleaning Services',
    description:
      'Efficiently allocate shifts for cleaning crews and track performance.',
    icon: <MdCleaningServices size={40} className="text-green-500" />,
  },
  {
    title: 'Homecare Time Tracker by ShiftNPay',
    description:
      'ShiftNPay’s Homecare Time Tracker is a reliable solution for managing caregiving schedules and ensuring accurate time tracking.',
    icon: <MdHome size={40} className="text-green-500" />,
  },
];

export default function BuildFor() {
  return (
    <div className="bg-gray-100">
      <Navbar/>
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-center mb-4">Industries We Build For</h1>
          <p className="text-lg text-center text-gray-600 mb-8">
            Explore how our solutions drive efficiency, streamline workflows, and empower various industries.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h2 className="text-xl font-semibold text-center mb-2">{item.title}</h2>
                <p className="text-gray-600 text-center">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
