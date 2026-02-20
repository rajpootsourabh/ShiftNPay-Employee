import React from 'react';
import Footer from '../common/footer';
import Navbar from '../common/navBar';

export default function BuildsFor() {
  return (
    <>
      <Navbar />
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto flex-1 p-6">
        <div className="text-center py-16">
          <h1 className="text-4xl font-extrabold mb-4">Industries We Build For</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            Explore how our solutions drive efficiency, streamline workflows, and empower various industries.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">{industry.title}</h2>
              <p className="text-gray-600">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
      <Footer />
    </>
  );
}

const industries = [
  { title: 'Food Services', description: 'Streamline staffing for restaurants, catering, and food production with real-time scheduling, automated payroll, and seamless shift management, ensuring quick responses to peak demands while maintaining compliance.' },
  { title: 'Security', description: 'Efficiently manage security personnel assignments with shift optimization tools, automated payments, and real-time updates, ensuring every location is adequately staffed for safety and reliability.' },
  { title: 'Construction', description: 'Simplify workforce allocation for construction projects, track hours on-site, and process timely payments, ensuring flexibility for contractors and laborers on dynamic worksites.' },
  { title: 'Manufacturing', description: 'Support high-volume production lines with scalable shift planning, overtime management, and accurate payroll processing to meet fluctuating demand while boosting productivity.' },
  { title: 'Retail', description: 'Optimize retail staffing during peak seasons with shift tracking, automated scheduling, and simplified payment processing to maintain customer satisfaction.' },
  { title: 'Healthcare', description: 'Provide staffing solutions for hospitals and clinics with shift swapping, compliance tracking, and timely payroll for nurses and support staff.' },
  { title: 'Logistics and Warehousing', description: 'Streamline shifts for warehouse workers and drivers, enabling efficient distribution with real-time updates, overtime tracking, and integrated payroll management.' },
  { title: 'Hospitality', description: 'Manage flexible shifts for hotels, event planners, and tourism sectors, ensuring smooth operations and on-time payments for temporary and permanent staff.' },
  { title: 'Event Management', description: 'Easily handle short-term staffing needs for events, automate payments, and optimize scheduling to deliver seamless event execution.' },
  { title: 'Transportation', description: 'Support drivers and logistics operators with accurate shift tracking, flexible payments, and automated compliance reporting for a seamless workflow.' },
  { title: 'Education', description: 'Simplify temporary staffing for schools and training centers with flexible shifts, real-time reporting, and streamlined payment systems for substitutes and adjunct staff.' },
  { title: 'Cleaning Services', description: 'Efficiently allocate shifts for cleaning crews, track hours, and process payments quickly to meet fluctuating demand in residential, commercial, and industrial cleaning projects.' },
  {
    title: 'Homecare Time Tracker by ShiftNPay',
    description: 'ShiftNPay’s Homecare Time Tracker is a reliable solution for managing caregiver schedules and ensuring accurate timekeeping. The tool allows homecare agencies to track caregivers\' check-ins and check-outs in real time, monitor shift adherence, and automate payroll calculations. With features like GPS tracking, customizable schedules, and real-time notifications, it ensures transparency and accountability. Caregivers can easily log their hours, while administrators gain detailed reports for compliance and billing purposes. Designed for simplicity and efficiency, the Homecare Time Tracker reduces administrative burdens and enhances operational efficiency, empowering agencies to focus on providing quality care to their clients.'
  }
];
