import React from "react";
import Logo from "../assets/img/logo.png";
import { Link, useNavigate } from "react-router-dom";

export default function Footer() {
  const Navigate = useNavigate();
  return (
    <div className="bg-slate-200 p-4">
      <div className="grid lg:grid-cols-5 grid-cols-2 gap-4 ">
        <div className="lg:col-span-1 col-span-2 flex justify-center items-center">
          <img className="w-6/12 md:w-8/12 max-w-xs" src={Logo} alt="Logo" />
        </div>
        <div className="lg:col-span-1 col-span-1 mt-4 md:mt-0">
          <div className="font-bold text-xl mb-4">Product</div>
          <div className="text-md py-2"></div>
          <Link to="/sedulingPage" className="text-md py-2">
            Restaurant Scheduling
          </Link>
          <div className="text-md py-2">
            <Link to="/" className="text-md py-2">
              Team Communication
            </Link>
          </div>
          <div className="text-md py-2">
            <Link to="/timeClocking" className="text-md py-2">
              Time Clocking
            </Link>
          </div>
          <div className="text-md py-2">
            <Link to="/taskMangement" className="text-md py-2">
              Task Management
            </Link>
          </div>
          <div className="text-md py-2">
            <Link to="/OperationOverView" className="text-md py-2">
              Operations Overview
            </Link>
          </div>
        </div>
        <div className="lg:col-span-1 col-span-1 mt-4 md:mt-0">
          <div className="font-bold text-xl mb-4">Solution</div>
          <div className="text-md py-2">
            <Link to="/mobileSedule" className="text-md py-2">
              Mobile Scheduling
            </Link>
          </div>
          <div className="text-md py-2">
            <Link to="/mangerLookBook" className="text-md py-2">
              Manager Log Book
            </Link>
          </div>
          <div className="text-md py-2">
            <Link to="/teamMangement" className="text-md py-2">
              Team Management
            </Link>
          </div>
          <div className="text-md py-2">
            <Link to="/workForceMangement" className="text-md py-2">
              Workforce Management
            </Link>
          </div>
          <div className="text-md py-2">
            <Link to="/documentStorage" className="text-md py-2">
              Document Storage
            </Link>
          </div>
          <div className="text-md py-2">
            <Link to="/becomeParter" className="text-md py-2">
              Become Partner
            </Link>
          </div>
        </div>
        <div className="lg:col-span-1 col-span-2 mt-4 lg:mt-0">
          <div className="font-bold text-xl mb-4 ">Company</div>
          <Link to="/contactUs" className="text-md py-2 cursor-pointer">
            Contact us
          </Link>
          <div className="text-md py-2">
            <Link to="/about" className="text-md cursor-pointer">
              About us
            </Link>
          </div>
          <div className="text-md py-2">
            <Link to="/career" className="text-md cursor-pointer">
              Career
            </Link>
          </div>
          <div className="text-md py-2">
            <Link to="/review" className="text-md cursor-pointer">
              Reviews
            </Link>
          </div>
          <div className="text-md py-2">
            <Link to="/becomeParter" className="text-md cursor-pointer">
              Become A Partner
            </Link>
          </div>
          <div className="text-md py-2">
            <Link to="/affliated" className="text-md cursor-pointer">
              Affiliates
            </Link>
          </div>

          <div className="text-md py-2">
            <Link to="/mediaKit" className="text-md cursor-pointer">
              Media Kit
            </Link>
          </div>
          <div className="text-md py-2">
            <Link to="/legal" className="text-md cursor-pointer">
              Legal
            </Link>
          </div>
          <div className="text-md py-2">
            <Link to="/pricing" className="text-md cursor-pointer">
              Price
            </Link>
          </div>
        </div>
        <div className="lg:col-span-1 col-span-2 mt-4 lg:mt-0">
          <div className="font-bold text-xl mb-4 ">Resources</div>
          <div className="text-md py-2">
            <Link to="/download" className="text-md cursor-pointer">
              Download
            </Link>
          </div>
          <div>
            <Link to="/blog" className="text-md py-2">
              Blog
            </Link>
          </div>
          <div className="text-md py-2">
            <Link to="/Resource Center" className="text-md py-2">
              Resource Center
            </Link>
          </div>
          <div className="text-md py-2">
            <Link to="/resturantGuide" className="text-md py-2">
              Restaurant Guides
            </Link>
          </div>
          <div className="text-md py-2">
            <Link to="/resturantData" className="text-md py-2">
              Restaurant Data
            </Link>
          </div>
          <div className="text-md py-2">
            <Link to="/resturantPostCast" className="text-md py-2">
              Restaurant Data
            </Link>
          </div>
          <Link to="/academy" className="text-md cursor-pointer">
            Academy
          </Link>
          <Link to="/academy" className="text-md cursor-pointer">
            Integrations
          </Link>
          <div className="text-md py-2"></div>
        </div>
      </div>
      <div className="border-t border-white mt-4 pt-4 text-center text-sm">
        © Theme by shiftnpay. All Rights Reserved.
      </div>
    </div>
  );
}
