import React, { useState } from "react";

import kitchen from "../assets/img/male-chef-kitchen-preparing-salad-rubbing.png";

export default function Lower() {
    const [isVisible, setIsVisible] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);
    const [isOpen5, setIsOpen5] = useState(false);
    const [isOpen6, setIsOpen6] = useState(false);
    const toggleContent1 = () => setIsOpen1(!isOpen1);
    const toggleContent2 = () => setIsOpen2(!isOpen2);
    const toggleContent3 = () => setIsOpen3(!isOpen3);
    const toggleContent4 = () => setIsOpen4(!isOpen4);
    const toggleContent5 = () => setIsOpen5(!isOpen5);
    const toggleContent6 = () => setIsOpen6(!isOpen6);
  
  return (
    <>
      <div className="grid lg:grid-cols-2 grid-cols-1 p-2">
        <img className="w-10/12 h-5/6" src={kitchen} alt="kitchen" />
        <div className="w-12/12 mt-14">
          <div className="text-4xl font-bold">Frequently asked questions</div>
          <div>
            <div
              className="flex justify-between items-center mt-6 cursor-pointer"
              onClick={toggleContent1}
            >
              <div className="font-sans">What is Shiftnpay?</div>
              <svg
                className="w-5 h-5"
                fill="grey"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  d={
                    isOpen1
                      ? "M224 135c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 224 86.6 369.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"
                      : "M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
                  }
                />
              </svg>
            </div>
            {isOpen1 && (
              <div className="mt-2 text-gray-600">
                Shiftnpay is an online platform designed for restaurants to
                manage staff details, create and oversee projects, assign and
                track tasks, effectively monitor time spent on tasks, and
                evaluate individual performance, with comprehensive reporting
                available at every level.
              </div>
            )}
          </div>
          <div>
            <div
              className="flex justify-between items-center mt-6 cursor-pointer"
              onClick={toggleContent2}
            >
              <div className="font-sans">
                Does it work for independent restaurants?
              </div>
              <svg
                className="w-5 h-5"
                fill="grey"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  d={
                    isOpen2
                      ? "M224 135c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 224 86.6 369.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"
                      : "M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
                  }
                />
              </svg>
            </div>
            {isOpen2 && (
              <div className="mt-2 text-gray-600">
                Yes , Provision to maintain the independent restaurant accounts
                with staff and their task performance management.
              </div>
            )}
          </div>
          <div>
            <div
              className="flex justify-between items-center mt-6 cursor-pointer"
              onClick={toggleContent3}
            >
              <div className="font-sans">Will I be locked into a contract?</div>
              <svg
                className="w-5 h-5"
                fill="grey"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  d={
                    isOpen3
                      ? "M224 135c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 224 86.6 369.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"
                      : "M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
                  }
                />
              </svg>
            </div>
            {isOpen3 && (
              <div className="mt-2 text-gray-600">
                Different Business Plans are available , according to the
                Business needs , one can opt the plan accordingly.
              </div>
            )}
          </div>
          <div>
            <div
              className="flex justify-between items-center mt-6 cursor-pointer"
              onClick={toggleContent4}
            >
              <div className="font-sans">Can I trial 7shifts?</div>
              <svg
                className="w-5 h-5"
                fill="grey"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  d={
                    isOpen4
                      ? "M224 135c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 224 86.6 369.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"
                      : "M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
                  }
                />
              </svg>
            </div>
            {isOpen4 && (
              <div className="mt-2 text-gray-600">Feature is coming soon.</div>
            )}
          </div>

          <div>
            <div
              className="flex justify-between items-center mt-6 cursor-pointer"
              onClick={toggleContent5}
            >
              <div className="font-sans">
                Will it be easy for team members to use?
              </div>
              <svg
                className="w-5 h-5"
                fill="grey"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  d={
                    isOpen5
                      ? "M224 135c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 224 86.6 369.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"
                      : "M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
                  }
                />
              </svg>
            </div>
            {isOpen5 && (
              <div className="mt-2 text-gray-600">
                User friendly interface implemented to create the team members
                records.
              </div>
            )}
          </div>
          <div>
            <div
              className="flex justify-between items-center mt-6 cursor-pointer"
              onClick={toggleContent6}
            >
              <div className="font-sans">
                What can managers and employees do with the free restaurant
                scheduling app?
              </div>
              <svg
                className="w-5 h-5"
                fill="grey"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  d={
                    isOpen6
                      ? "M224 135c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 224 86.6 369.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"
                      : "M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
                  }
                />
              </svg>
            </div>
            {isOpen6 && (
              <div className="mt-2 text-gray-600">
                Manage Staff records, employees can sign up with there
                credentials to manage there task , Restaurant owner / Vendor can
                access to the real time reports and judge the performance of
                there staff members.
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
