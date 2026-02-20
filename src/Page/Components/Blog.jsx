import React from "react";
import Navbar from "../common/navBar";
import Footer from "../common/footer";
import Lower from "../common/lower";
import foods from "../assets/img/foods.png";
import Stars from "../assets/img/foodGirl.png";
import user from "../assets/img/userOne.png";
import rect from "../assets/img/Rectangle38.png";
import rects from "../assets/img/Rectangle39.png";
import rectss from "../assets/img/Rectangle40.png";
import rectssss from "../assets/img/Rectangle41.png";
import test from "../assets/img/Rectangle42.png";
import tests from "../assets/img/Rectangle43.png";
import testss from "../assets/img/Rectangle44.png";
import testsss from "../assets/img/Rectangle45.png";
import { useNavigate } from "react-router-dom";






export default function Blog() {
  const navigate=useNavigate()
  return (
    <div>
      <Navbar />
      <img className="w-full h-3/4" src={foods} />
      <div className="container mx-auto">
        <div className="mt-4">
          <div className="font-bold">Latest Post</div>
          <div className="mt-4">
            <div className="grid lg:grid-cols-3 gris-cols-1 gap-10 mb-5">
              <div onClick={(()=>{navigate("/blogDetails")})} className="cursor-pointer shadow-lg p-2 rounded-md">
                <img className="" src={Stars} />
                <div className="text-sm font-bold mt-2">
                  What Restaurant Employees Really Need to Feel Engaged at Work
                </div>
                <div className="flex items-center justify-between p-2">
                  <img className="w-10 h-10 rounded-full" src={user} />
                  <div className="text-gray-600 text-sm">Tracey Wilson</div>
                  <div className="text-gray-600 text-sm">August 20, 2022</div>
                </div>
              </div>
             <div onClick={(()=>{navigate("/blogDetails")})} className="cursor-pointer shadow-lg p-2 rounded-md">
                <img className="" src={rect} />
                <div className="text-sm font-bold mt-2">
                What Restaurant Employees Really Need to Feel Engaged at Work
                </div>
                <div className="flex items-center justify-between p-2">
                  <img className="w-10 h-10 rounded-full" src={user} />
                  <div className="text-gray-600 text-sm">Jason Francisco</div>
                  <div className="text-gray-600 text-sm">August 20, 2022</div>
                </div>
              </div>
             <div onClick={(()=>{navigate("/blogDetails")})} className="cursor-pointer shadow-lg p-2 rounded-md">
                <img className="" src={rectssss} />
                <div className="text-sm font-bold mt-2">
                What Restaurant Employees Really Need to Feel Engaged at Work
                </div>
                <div className="flex items-center justify-between p-2">
                  <img className="w-10 h-10 rounded-full" src={user} />
                  <div className="text-gray-600 text-sm">Elizabeth Slavin</div>
                  <div className="text-gray-600 text-sm">August 20, 2022</div>
                </div>
              </div>
            </div>
            <div className="grid lg:grid-cols-3 gris-cols-1 gap-10 mb-5">
             <div onClick={(()=>{navigate("/blogDetails")})} className="cursor-pointer shadow-lg p-2 rounded-md">
                <img className="" src={rects} />
                <div className="text-sm font-bold mt-2">
                What Restaurant Employees Really Need to Feel Engaged at Work
                </div>
                <div className="flex items-center justify-between p-2">
                  <img className="w-10 h-10 rounded-full" src={user} />
                  <div className="text-gray-600 text-sm">Ernie Smith</div>
                  <div className="text-gray-600 text-sm">August 20, 2022</div>
                </div>
              </div>
             <div onClick={(()=>{navigate("/blogDetails")})} className="cursor-pointer shadow-lg p-2 rounded-md">
                <img className="" src={rectss} />
                <div className="text-sm font-bold mt-2">
                What Restaurant Employees Really Need to Feel Engaged at Work
                </div>
                <div className="flex items-center justify-between p-2">
                  <img className="w-10 h-10 rounded-full" src={user} />
                  <div className="text-gray-600 text-sm">Eric Smith</div>
                  <div className="text-gray-600 text-sm">August 20, 2022</div>
                </div>
              </div>
             <div onClick={(()=>{navigate("/blogDetails")})} className="cursor-pointer shadow-lg p-2 rounded-md">
                <img className="" src={test} />
                <div className="text-sm font-bold mt-2">
                What Restaurant Employees Really Need to Feel Engaged at Work
                </div>
                <div className="flex items-center justify-between p-2">
                  <img className="w-10 h-10 rounded-full" src={user} />
                  <div className="text-gray-600 text-sm">Tracey Wilson</div>
                  <div className="text-gray-600 text-sm">August 20, 2022</div>
                </div>
              </div>
            </div>
            <div className="grid lg:grid-cols-3 gris-cols-1 gap-10 mb-5 ">
             <div onClick={(()=>{navigate("/blogDetails")})} className="cursor-pointer shadow-lg p-2 rounded-md">
                <img className="" src={tests} />
                <div className="text-sm font-bold mt-2">
                  What Restaurant Employees Really Need to Feel Engaged at Work
                </div>
                <div className="flex items-center justify-between p-2">
                  <img className="w-10 h-10 rounded-full" src={user} />
                  <div className="text-gray-600 text-sm">Tracey Wilson</div>
                  <div className="text-gray-600 text-sm">August 20, 2022</div>
                </div>
              </div>
             <div onClick={(()=>{navigate("/blogDetails")})} className="cursor-pointer shadow-lg p-2 rounded-md">
                <img className="" src={testss} />
                <div className="text-sm font-bold mt-2">
                What Restaurant Employees Really Need to Feel Engaged at Work
                </div>
                <div className="flex items-center justify-between p-2">
                  <img className="w-10 h-10 rounded-full" src={user} />
                  <div className="text-gray-600 text-sm">Jason Francisco</div>
                  <div className="text-gray-600 text-sm">August 20, 2022</div>
                </div>
              </div>
             <div onClick={(()=>{navigate("/blogDetails")})} className="cursor-pointer shadow-lg p-2 rounded-md">
                <img className="" src={testsss} />
                <div className="text-sm font-bold mt-2">
                What Restaurant Employees Really Need to Feel Engaged at Work
                </div>
                <div className="flex items-center justify-between p-2">
                  <img className="w-10 h-10 rounded-full" src={user} />
                  <div className="text-gray-600 text-sm">Elizabeth Slavin</div>
                  <div className="text-gray-600 text-sm">August 20, 2022</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#108A00] rounded-md w-full ">
            <div className="flex justify-between p-2 items-center">
                <div className="text-white">Start saving your quick service time and money</div>
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
