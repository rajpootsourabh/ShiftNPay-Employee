import React, { useEffect, useState } from "react";
import axios from "axios";
import ApplyLeavePopup from "../popup/ApplyLeavePopup";
import FixedHolidaysPopup from "../popup/FixedHolidaysPopup"; // Import the new popup
import { BaseUrl, ImgUrl } from "../../Page/common/BaseUrl";
import DataTable from "react-data-table-component";

const LeaveHistory = () => {
  const employeeId = localStorage.getItem("_id");

  const [leaveHistory, setLeaveHistory] = useState([]);
  const [showApplyLeavePopup, setShowApplyLeavePopup] = useState(false);
  const [showFixedHolidaysPopup, setShowFixedHolidaysPopup] = useState(false);
  const [fixedHolidays, setFixedHolidays] = useState([]);

  // Fetch leave history for the employee
  useEffect(() => {
    fetchLeaveHistory();
  }, [employeeId]);

  const fetchLeaveHistory = async () => {
    try {
      const response = await axios.get(`${BaseUrl}/leaves/history`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log('API Response:', response);
      const leaveData = response?.data?.data?.leaveRecords;
      setLeaveHistory(leaveData);
    } catch (error) {
      console.error("Error fetching leave history", error);
    }
  };

  const fetchFixedHolidays = async () => {
    try {
      const response = await axios.get(`${BaseUrl}/leaves/employee-holidays`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setFixedHolidays(response.data);
    } catch (error) {
      console.error("Error fetching fixed holidays", error);
    }
  };

  const handleApplyLeaveClick = () => setShowApplyLeavePopup(true);
  const closeApplyLeavePopup = () => setShowApplyLeavePopup(false);

  const handleFixedHolidaysClick = () => {
    fetchFixedHolidays();
    setShowFixedHolidaysPopup(true);
  };
  const closeFixedHolidaysPopup = () => setShowFixedHolidaysPopup(false);

  const columns = [
    {
      name: "Leave Type",
      selector: (row) => row.leaveType,
      sortable: true,
    },
    {
      name: "Applied Date",
      selector: (row) => new Date(row.appliedDate).toLocaleDateString(),
      sortable: true,
    },
    {
      name: "Start Date",
      selector: (row) => new Date(row.startDate).toLocaleDateString(),
      sortable: true,
    },
    {
      name: "End Date",
      selector: (row) => new Date(row.endDate).toLocaleDateString(),
      sortable: true,
    },
    {
      name: "No. of Leaves",
      selector: (row) => {
        if( row.count == '0.5'){
            if(row.isHaflday){
              return `Half-Day`;
            }else{
              return `Half-Day ( ${row.periodOfLeave} Half )`
            }
          
        }else{
          return row.count;
        }
      },
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => (
        <span 
          className={`${
            row.status === "approved" ? "inline-block bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full" : "inline-block bg-red-100 text-red-800 text-sm px-3 py-1 rounded-full"
          }`}
        >
          {row.status === "approved" ? "Approved" : row.status}
        </span>
      ),
    },
    {
      name: "Reason",
      selector: (row) => row.reason,
      sortable: true,
    },
    {
      name: "Document",
      selector: (row) => row.document ? (
        <button
          className="btn btn-sm btn-success"
          onClick={() => window.open(`${ImgUrl}/${row.document}`, "_blank")}
        >
          View
        </button>
      ) : 'N/A',
    },
  ];

  return (
    <div className="p-6 bg-white rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Leave History</h2>

      <div className="flex mb-4">
        <button
          onClick={handleApplyLeaveClick}
          className="bg-green-500 text-white font-bold py-2 px-4 rounded-md hover:bg-green-600"
        >
          Apply Leave
        </button>
        <button
          onClick={handleFixedHolidaysClick}
          className="ml-4 bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Fixed Holidays
        </button>
      </div>

      <div className="max-w-full mx-auto mt-8 p-4 bg-white border border-gray-200 rounded-lg shadow-md">
        <div style={{ maxWidth: "72vw" }}>
          <DataTable
            columns={columns}
            data={leaveHistory || []}
            pagination
            highlightOnHover
            striped
          />
        </div>
      </div>

      {showApplyLeavePopup && (
        <ApplyLeavePopup
          closePopup={closeApplyLeavePopup}
          employeeId={employeeId}
          reloadListing={fetchLeaveHistory}
        />
      )}

      {showFixedHolidaysPopup && (
        <FixedHolidaysPopup
          closePopup={closeFixedHolidaysPopup}
          holidays={fixedHolidays}
        />
      )}
    </div>
  );
};

export default LeaveHistory;
