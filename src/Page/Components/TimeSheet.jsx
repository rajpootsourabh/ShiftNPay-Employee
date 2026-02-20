import React, { useEffect, useState } from "react";
import watch from "../assets/img/fast-time.png";

export default function TimeSheet() {
  const [weekInfo, setWeekInfo] = useState({
    weekName: "",
    tuDate: "",
    moDate: "",
  });
  //job select
  useEffect(() => {
    const getWeekInfo = () => {
      const today = new Date();
      const daysUntilSaturday = 6 - today.getDay();
      const saturday = new Date(today);
      saturday.setDate(today.getDate() + daysUntilSaturday);
      const daysUntilSunday = 7 - today.getDay();
      const sunday = new Date(today);
      sunday.setDate(today.getDate() + daysUntilSunday);
      const weekNames = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      return {
        weekName: weekNames[today.getDay()],
        tuDate: saturday.toLocaleDateString("en-US", {
          weekday: "short",
          month: "short",
          day: "numeric",
        }),
        moDate: sunday.toLocaleDateString("en-US", {
          weekday: "short",
          month: "short",
          day: "numeric",
        }),
      };
    };
    setWeekInfo(getWeekInfo());
  }, []);
  return (
    <>
      <div className="bg-green-600 rounded-xl  flex justify-between items-center ">
        <div className="p-2">
          <div className="text-white text-2xl">Time tracker</div>
          <div className="text-sm text-white">
            Start and stop timer as you work, or enter hours manually.
          </div>
        </div>
        <div>
          <div className="text-sm text-white">May 1- May 7</div>
          <div className="text-lg text-white">Week Total: 35:00</div>
        </div>
        <div className="bg-white rounded-l-full w-[200px]">
          <img className="h-50 w-[100px] ml-10" src={watch} />
        </div>
      </div>
      {/* <div className="flex gap-28 mt-6">
        <div className="text-sm ">Project</div>
        <div className="text-sm "> {weekInfo.tuDate}</div>
        <div className="text-sm "> {weekInfo.moDate}</div>Pv
        <div className="text-sm "> {weekInfo.moDate}</div>
        <div className="text-sm ">{weekInfo.moDate}</div>
        <div className="text-sm ">{weekInfo.moDate}</div>
        <div className="text-sm ">{weekInfo.moDate}</div>
        <div className="text-sm ">{weekInfo.moDate}</div>
        <div className="text-sm ">Total</div>
      </div>
      <div className="flex gap-24 mt-4">
        <div className="text-sm">Vaction</div>
        <input className="border border-black rounded-sm p-1 w-[100px]" />
        <input className="border border-black rounded-sm p-1 w-[100px]" />
        <input className="border border-black rounded-sm p-1 w-[100px]" />
        <input className="border border-black rounded-sm p-1 w-[100px]" />
        <input className="border border-black rounded-sm p-1 w-[100px]" />
        <input className="border border-black rounded-sm p-1 w-[100px]" />
        <input className="border border-black rounded-sm p-1 w-[100px]" />
      </div>
      <div className="border border-b mt-8"></div>
      <div className="flex justify-end mt-4 gap-24 mr-14">
        <svg
          fill="black"
          className="w-8 h-8 cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
        >
          <path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM155.7 250.2L192 302.1l36.3-51.9c7.6-10.9 22.6-13.5 33.4-5.9s13.5 22.6 5.9 33.4L221.3 344l46.4 66.2c7.6 10.9 5 25.8-5.9 33.4s-25.8 5-33.4-5.9L192 385.8l-36.3 51.9c-7.6 10.9-22.6 13.5-33.4 5.9s-13.5-22.6-5.9-33.4L162.7 344l-46.4-66.2c-7.6-10.9-5-25.8 5.9-33.4s25.8-5 33.4 5.9z" />
        </svg>
        <svg
          fill="black"
          className="w-8 h-8 cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 144-208 0c-35.3 0-64 28.7-64 64l0 144-48 0c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128zM176 352l32 0c30.9 0 56 25.1 56 56s-25.1 56-56 56l-16 0 0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48 0-80c0-8.8 7.2-16 16-16zm32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24l-16 0 0 48 16 0zm96-80l32 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48l-32 0c-8.8 0-16-7.2-16-16l0-128c0-8.8 7.2-16 16-16zm32 128c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16l-16 0 0 96 16 0zm80-112c0-8.8 7.2-16 16-16l48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 32 32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64 0-64z" />
        </svg>
      </div> */}
      <div className="text-center mt-4 text-2xl">Coming Soon</div>
    </>
  );
}
