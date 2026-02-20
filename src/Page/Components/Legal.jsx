import React from 'react';
import Navbar from '../common/navBar';
import Footer from '../common/footer';

export default function Legal() {
  return (
    <div className=" bg-white">
      <Navbar />
        <div className='container mx-auto'>

     
      {/* Navbar */}

      {/* Main Content */}
      <main className="flex-grow p-6">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">Legal</h1>
        <p className="text-base text-gray-600 leading-6 mb-4">
          Welcome to ShiftNPay! By accessing or using our services, you agree to the following terms and conditions. If you do not agree, please refrain from using our website or services.
        </p>

        <section>
          <h2 className="text-lg font-bold text-gray-800 mt-6 mb-2">1. Acceptance of Terms</h2>
          <p className="text-base text-gray-600 leading-6 mb-4">
            By using the ShiftNPay website, you confirm that you are at least 18 years of age and legally capable of entering into a binding agreement.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-800 mt-6 mb-2">2. Use of Services</h2>
          <p className="text-base text-gray-600 leading-6 mb-4">
            You agree to use our services responsibly and not engage in any activity that could harm the website, its users, or its functionality. Unauthorized access, data extraction, or interference is strictly prohibited.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-800 mt-6 mb-2">3. User Accounts</h2>
          <p className="text-base text-gray-600 leading-6 mb-4">
            You are responsible for maintaining the confidentiality of your account credentials. Any activities performed under your account are your responsibility.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-800 mt-6 mb-2">4. Payment Processing</h2>
          <p className="text-base text-gray-600 leading-6 mb-4">
            ShiftNPay provides payment processing solutions. All transactions are subject to verification and compliance with applicable laws.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-800 mt-6 mb-2">5. Privacy Policy</h2>
          <p className="text-base text-gray-600 leading-6 mb-4">
            Our Privacy Policy explains how we collect, use, and protect your personal information. By using our services, you consent to this policy.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-800 mt-6 mb-2">6. Intellectual Property</h2>
          <p className="text-base text-gray-600 leading-6 mb-4">
            All content on ShiftNPay, including logos, trademarks, and software, is the property of ShiftNPay and is protected by intellectual property laws.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-800 mt-6 mb-2">7. Limitation of Liability</h2>
          <p className="text-base text-gray-600 leading-6 mb-4">
            ShiftNPay is not liable for any direct, indirect, or consequential damages resulting from the use of our services, except where prohibited by law.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-800 mt-6 mb-2">8. Modifications to Terms</h2>
          <p className="text-base text-gray-600 leading-6 mb-4">
            We reserve the right to update these terms at any time. Continued use of our services after changes are posted constitutes your acceptance of the updated terms.
          </p>
        </section>
      </main>

      {/* Footer */}
      </div>
        <Footer />
      
    </div>
  );
}
