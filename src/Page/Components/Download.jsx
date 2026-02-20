import React from "react";
import Navbar from "../common/navBar";
import Footer from "../common/footer";
import playstore from "../assets/img/playstore.png";
import mobile from "../assets/img/mobile.png"
export default function Download() {

  return (
    <div className="">
      <Navbar />
      <div className="flex justify-center">

      <img className="w-6/12" src={mobile}/>
      </div>
      <div className="text-black font-4xl text-center font-bold mt-4 mb-6">Download Our New App</div>
      <div className="flex justify-center ">
      <div className="w-4/12 text-center text-sm ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </div>
      </div>
      <div className="flex justify-center mb-4 mt-4 ">

      <img className="w-2/12" src={playstore}/>
      </div>
      <Footer />
    </div>
  );
}
