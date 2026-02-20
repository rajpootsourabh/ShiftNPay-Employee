import React, { useEffect, useState } from "react";
import Footer from "../common/footer";
import Navbar from "../common/navBar";
import { useNavigate } from "react-router-dom";
import groups from "../assets/img/groups.png";
import track from "../assets/img/tracker.png";
import tawer from "../assets/img/tawer.png";
import mobile from "../assets/img/mobileTracker.png";
import playstore from "../assets/img/playstore.png";

export default function About() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white">
        <div className="container mx-auto px-6 lg:px-20 py-20">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-12 items-center text-center lg:text-left">
            <div>
              <h1 className="text-5xl font-bold leading-[3.5rem]">
                Welcome to <span className="italic">ShiftNPay</span>
              </h1>
              <p className="text-lg text-slate-200 mt-6">
                A premier solution by Computerlog, LLC, located in the heart of
                Dallas, Texas. Founded by{" "}
                <span className="italic">Anwar Kazi</span>, ShiftNPay is
                revolutionizing employee management with cutting-edge digital
                timecard solutions designed to streamline workforce operations for
                businesses across all industries.
              </p>
              <button
                className="bg-[#108A00] hover:bg-[#0d7400] transition-all rounded-2xl text-white px-6 py-3 mt-6"
                onClick={() => navigate("/Login")}
              >
                Start Free Trial
              </button>
            </div>
            <div className="flex justify-center lg:justify-end">
              <img
                src={groups}
                alt="ShiftNPay Team"
                className="w-full max-w-md rounded-lg shadow-xl transform hover:scale-105 transition-all"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-20 py-10">
        <div className="text-center mt-20">
          <h2 className="text-4xl font-bold text-[#3B3C4E]">
            Thousands Are Choosing ShiftNPay Time Tracker
          </h2>
          <div className="flex justify-center mt-6 space-x-4">
            <img src={track} alt="Track Time" className="w-24 h-24 rounded-full shadow-lg" />
            <img src={mobile} alt="Mobile Tracker" className="w-24 h-24 rounded-full shadow-lg" />
            <img src={tawer} alt="Tawer" className="w-24 h-24 rounded-full shadow-lg" />
          </div>
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-[#3B3C4E]">
            What We Do
          </h2>
          <p className="text-md text-slate-600 mt-6 max-w-3xl mx-auto">
            ShiftNPay offers a comprehensive employee management platform with
            features that go beyond simple clock-in and clock-out functionality.
          </p>
          <ul className="list-disc list-inside text-slate-600 mt-6 space-y-4 lg:ml-20">
            <li>
              <b>Track Employee Hours:</b> Record work hours, breaks, and overtime in real-time.
            </li>
            <li>
              <b>Ensure Compliance:</b> Detailed records help meet labor law requirements.
            </li>
            <li>
              <b>Reduce Costs:</b> Eliminate errors, fraud, and inefficiencies.
            </li>
            <li>
              <b>Seamless Integration:</b> Export data directly to payroll systems.
            </li>
          </ul>
        </div>

        <div className="mt-20">
          <h2 className="text-3xl text-center font-bold text-[#3B3C4E]">
            Why Choose ShiftNPay?
          </h2>
          <ul className="list-disc list-inside text-slate-600 mt-6 space-y-4 lg:ml-20">
            <li>
              <b>Save Time and Money:</b> Automate manual processes and reduce administrative burdens.
            </li>
            <li>
              <b>Minimize Legal Risks:</b> Protect your business from legal disputes.
            </li>
            <li>
              <b>Industry Agnostic:</b> Suitable for various industries.
            </li>
            <li>
              <b>Fast Implementation:</b> Get started in as little as one hour.
            </li>
          </ul>
        </div>

        <div className="mt-20">
          <h2 className="text-3xl text-center font-bold text-[#3B3C4E]">
            Our Vision
          </h2>
          <p className="text-md text-slate-600 mt-6 max-w-3xl mx-auto">
            At ShiftNPay, we envision a world where businesses operate with
            greater efficiency, employees are compensated accurately, and compliance is never a concern. By delivering innovative solutions
            that blend technology and practicality, we aim to empower
            businesses to focus on what they do best—serving their customers
            and growing their operations.
          </p>
        </div>

        <div className="mt-20">
          <h2 className="text-3xl text-center font-bold text-[#3B3C4E]">
            Our Commitment
          </h2>
          <p className="text-md text-slate-600 mt-6 max-w-3xl mx-auto">
            We are dedicated to providing exceptional service to our clients. From initial setup to ongoing support, our team is here to ensure
            you get the most out of ShiftNPay. We listen to your needs, customize our solutions, and stand by you as a trusted partner in
            your business’s success.
          </p>
        </div>

        <div className="mt-20">
          <h2 className="text-3xl text-center font-bold text-[#3B3C4E]">
            Join Us Today
          </h2>
          <p className="text-md text-slate-600 mt-6 max-w-3xl mx-auto">
            Thousands of businesses are already reaping the benefits of our
            digital timecard system. Don’t let outdated methods hold you back.
            Join ShiftNPay and take control of your employee management today.
          </p>
        </div>

        <div className="mt-10 text-[#3B3C4E]">
          Getting started is easy—our solution is designed for quick and
          hassle-free implementation. In just one hour, you can have ShiftNPay
          fully integrated into your operations and exporting accurate data to
          your payroll system.
        </div>

        <div className="mt-10">
          Ready to transform your business? Contact us to learn more about how
          ShiftNPay can help you save money, avoid legal complications, and
          optimize your workforce management. Let’s build a better, more
          efficient future together!
        </div>

        <h3 className="mt-10 text-center text-2xl font-bold text-[#3B3C4E]">
          ShiftNPay – <span className="italic">Accurate. Efficient. Compliant.</span>
        </h3>
      </div>

      <Footer />
    </>
  );
}
