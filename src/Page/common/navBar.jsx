import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa"; // Import the down arrow icon
import logo from "../assets/img/logo.png";
import calender from "../assets/img/calendar.png";
import glass from "../assets/img/hour-glass.png";
import money from "../assets/img/give-money.png";

export default function Navbar() {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpens, setIsDropdownOpens] = useState(false);

  const dropdownRef = useRef(null);

  const scrollBy500px = () => {
    window.scrollBy({ top: 800, behavior: "smooth" });
  };
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
      setIsDropdownOpens(false)
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="bg-green-100 shadow-md sticky top-0 z-10">
      <div className="container mx-auto py-4">
        <div className="flex justify-between items-center">
          <div
            onClick={() => {
              navigate("/");
            }}
            className="cursor-pointer"
          >
            <img className="w-32" src={logo} alt="Logo" />
          </div>
          <div className=" lg:flex gap-10">
            <div
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
              className="relative text-black font-bold cursor-pointer flex items-center"
            >
              Product
              <FaChevronDown className="ml-2" />
              {isDropdownOpen && (
                <div
                  ref={dropdownRef}
                  className="absolute top-full lg:w-[400px] border border-green-600 left-0  w-48 bg-white shadow-lg rounded-md p-3"
                >
                  <div
                    onClick={() => navigate("/sedulingPage")}
                    className="p-2 flex cursor-pointer items-center gap-4"
                  >
                    <div>
                      <img className="w-10 h-10" src={calender} />
                    </div>
                    <div>
                      <div className=" font-bold cursor-pointer">schedule</div>
                      <div className="text-slate-600 text-sm ">
                        Assign shifts quickly and efficiently
                      </div>
                    </div>
                  </div>
                  <div
                    onClick={() => navigate("/timeClocking")}
                    className="p-2 flex cursor-pointer items-center gap-4"
                  >
                    <div>
                      <img className="w-10 h-10" src={glass} />
                    </div>
                    <div>
                      <div className=" font-bold cursor-pointer">
                        {" "}
                        Time Clocking
                      </div>
                      <div className="text-slate-600 text-sm w-[300px] ">
                        Decrease labor costs with integrated, mobile time
                        tracking
                      </div>
                    </div>
                  </div>
                  <div
                    onClick={() => navigate("/tipMangements")}
                    className="p-2 flex cursor-pointer items-center gap-4"
                  >
                    <div>
                      <img className="w-10 h-10" src={money} />
                    </div>
                    <div>
                      <div className=" font-bold cursor-pointer">
                        {" "}
                        Tip Management
                      </div>
                      <div className="text-slate-600 text-sm w-[300px] ">
                        Save time and increase accuracy with Tip Pooling and
                        Payouts
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div
              onClick={scrollBy500px}
              className="text-black cursor-pointer font-bold"
            >
              Pricing
            </div>
            <div
              onClick={(()=>{navigate("/buildFor")})}
              className="text-black cursor-pointer font-bold"
            >
              Built for
            </div>

            <div
              onClick={() => {
                navigate("/teamMangement");
              }}
              className="text-black cursor-pointer font-bold"
            >
              Team management
            </div>
            <div
              onClick={() => navigate("/feature")}
              className="text-black cursor-pointer font-bold"
            >
              Features
            </div>
            <div
             onMouseEnter={() => setIsDropdownOpens(true)}
             onMouseLeave={() => setIsDropdownOpens(false)}
              className="relative text-black font-bold cursor-pointer flex items-center"
            >
              Resources
              <FaChevronDown className="ml-2" />
              {isDropdownOpens && (
                <div
                  ref={dropdownRef}
                  className="absolute top-full lg:w-[400px] border border-green-600 left-0  w-48 bg-white shadow-lg rounded-md p-3"
                >
                  <div
                    onClick={() => navigate("/resourceCenter")}
                    className="p-2 flex cursor-pointer items-center gap-4"
                  >
                 
                    <div>
                      <div className=" font-bold cursor-pointer">Resource Center</div>
                     
                    </div>
                  </div>
                  <div
                    onClick={() => navigate("/resourceBasic")}
                    className="p-2 flex cursor-pointer items-center gap-4"
                  >
                
                    <div>
                      <div className=" font-bold cursor-pointer">
                        {" "}
                        Resource Center- basic
                      </div>
                 
                    </div>
                  </div>
                  <div
                    onClick={() => navigate("/resourceAdvance")}
                    className="p-2 flex cursor-pointer items-center gap-4"
                  >
                   
                    <div>
                      <div className=" font-bold cursor-pointer">
                      Resource Center- Advanced
                      </div>
                      
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center">
            <div
              onClick={() => {
                navigate("/Login");
              }}
              className="bg-green-500 lg:w-[160px] md:w-[130px] w-full rounded-full"
            >
              <div className="text-white py-2 px-4 text-sm cursor-pointer text-center">
                Employee Login
              </div>
            </div>
            <div
              onClick={() => {
                window.open("https://vendor.shiftnpay.com/signin", "_blank");
              }}
              className="bg-green-500 lg:w-[150px] md:w-[130px] w-full rounded-full"
            >
              <div className="text-white py-2 px-4 text-sm cursor-pointer text-center">
              Business Login
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
