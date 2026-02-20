import React, { useEffect, useState } from 'react';
import { BaseUrl, ImgUrl } from "../../common/BaseUrl";
import axios from 'axios';




const Performance = () => {
  const [data, setData] = useState(null);
  const empId = localStorage.getItem("_id");

  const dataLoad = async () => {
    try {
      const response = await axios.get(`${BaseUrl}/emp/dashboard/${empId}`);

      console.log(response.data)
      setData(response.data);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    if (empId) {
      dataLoad();
    }
  }, [empId]);



  const UserIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="80"
      height="80"
      className="rounded bg-light p-2"
      style={{ backgroundColor: "#EDEAFF", color: "#8A4FFF" }}
    >
      <circle cx="12" cy="7" r="4" />
      <path d="M5.4 19a7 7 0 0 1 13.2 0" />
    </svg>
  );

  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="card p-3 shadow-sm row flex-direction-row" style={{ borderRadius: "15px" ,minHeight :'321px',flexDirection :'row' }}>
        <div className="col-sm-7 d-flex align-items-center" style={{flexDirection :'column',justifyContent:'center'}}>
          <h6 className="mt-2">Running Shift</h6>
          <h3 className="font-weight-bold text-capitalize">
            {data?.result?.name ?? "N/A"}
          </h3>
        </div>
        <div className="col-sm-5 d-flex iconShane text-right" style={{flexDirection :'column',justifyContent:'center'}}>
          <UserIcon />
        </div>
      </div>
    </div>
  );
};

export default Performance;
