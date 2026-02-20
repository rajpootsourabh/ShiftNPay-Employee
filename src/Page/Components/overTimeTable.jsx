import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { BaseUrl } from "../common/BaseUrl";
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";
import { processWeeklyData } from "../../Helper/functions";
import { weeklyOverTimeList } from "../../store/OverTimeList/overTimeSlice";
import { CSVLink } from "react-csv";
const OverTimeList = () => {
  const [view, setView] = useState("dayGridMonth");
  const [data, setData] = useState([]);
  const empId = localStorage.getItem("_id");
  const overTime = useSelector((state) => state.overTime.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(weeklyOverTimeList(empId));
  }, [empId]);

  useEffect(() => {
    let newData = processWeeklyData(
      overTime.data,
      overTime.overTimeRate,
      overTime.rate
    );
    setData(newData);
  }, [overTime]);

  useEffect(() => {
    console.log("data : ", data);
  }, [data]);

  const columns = [
    {
      name: "Emp Id",
      selector: (row) => row.empId,
      sortable: true,
    },
    {
      name: "SSN No.",
      selector: (row) => row.ssnNo,
      sortable: true,
    },
    {
      name: "Name",
      selector: (row) => row.employeeName,
      sortable: true,
    },
    {
      name: "Job Name",
      selector: (row) => row.jobName,
      sortable: true,
    },
    {
      name: "Week Range",
      selector: (row) => row.weekRange,
      sortable: true,
    },
    {
      name: "Rate",
      selector: (row) => row.rate,
      sortable: true,
    },
    {
      name: "Total Hours",
      selector: (row) => row.totalHours,
      sortable: true,
    },
    {
      name: "OT Time",
      selector: (row) => row.overtimeHours,
      sortable: true,
    },
    {
      name: "Amount",
      selector: (row) => row.normalPay,
      sortable: true,
    },
    {
      name: "OT Rate",
      selector: (row) => row.overTimeRate,
      sortable: true,
    },
    {
      name: "OT Amount",
      selector: (row) => row.overtimePay,
      sortable: true,
    },
    {
      name: "Total Amount",
      selector: (row) => row.totalPay,
      sortable: true,
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <header className="bg-green-600 p-4 flex justify-between items-center rounded-md mb-6 shadow-md">
        <h1 className="text-2xl font-semibold text-white">OT | Calculations</h1>
      </header>
      <div className="bg-white  rounded-lg p-6">
        <div className="max-w-full mx-auto mt-8 p-4 bg-white border border-gray-200 rounded-lg shadow-md">
          <CSVLink
            data={data}
            filename="data.csv"
            className="my-4 py-2 px-4 bg-green-600 text-white font-bold rounded"
          >
            Export to CSV
          </CSVLink>
          
           <div style={{maxWidth:"70vw" ,marginTop:'20px'}}>
           <DataTable
              columns={columns}
              data={data ? data : []}
              pagination
              highlightOnHover
              striped
              className=""
            />
           </div>
        </div>
      </div>
    </div>
  );
};

export default OverTimeList;
