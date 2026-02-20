import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DataTable from "react-data-table-component";
import { formatDateTime } from "../../Helper/functions";
import { getEmployeesJobsTrackingRequests } from "../../store/Tracker/trackerSlice";
import moment from "moment/moment";

const TimeTrackerRequest = () => {
  const [data, setData] = useState([]);
  const empId = localStorage.getItem("_id");
  const { TimeTrackerApprovalRequests } = useSelector(
    (state) => state.timeTracker
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEmployeesJobsTrackingRequests(empId));
  }, [empId]);

  useEffect(() => {
    // Assuming processWeeklyData transforms the data in a similar way
    const newData = TimeTrackerApprovalRequests.map((item) => ({
      employeeName: item.employeeName,
      jobName: item.jobData?.[0]?.name || "N/A",
      sessionDate: moment(item.trackingData.sessionDate).format("DD-MM-Y"),
      rate: item.trackingData.amount ? `$${item.trackingData.amount}` : 'N/A',
      inTime: formatDateTime(item.trackingData.startTime),
      outTime: item.trackingData.stoppedTime ? formatDateTime(item.trackingData.stoppedTime) : 'N/A',
      otHours:
        item.trackingData.overAmount > 0
          ? `${item.trackingData.overAmount} hours`
          : "0",
      // otTime: formatDateTime(item.trackingData.lastStartTime),
      totalTime: (item.trackingData.elapsedTime / 3600).toFixed(2), // Convert elapsed time to hours
      trackingId: item.trackingData._id,
      status: item.trackingData.status,
    }));
    setData(newData);
  }, [TimeTrackerApprovalRequests]);

  const handleApprove = (trackingId) => {
    // Your dispatch for approving the request goes here
    console.log("Approved tracking ID:", trackingId);
  };

  const columns = [
    {
      name: "Employee Name",
      selector: (row) => row.employeeName,
      sortable: true,
    },
    {
      name: "Job Name",
      selector: (row) => row.jobName,
      sortable: true,
    },
    {
      name: "Date",
      selector: (row) => row.sessionDate,
      sortable: true,
    },
    {
      name: "Rate",
      selector: (row) => row.rate,
      sortable: true,
    },
    {
      name: "In Time",
      selector: (row) => row.inTime,
      sortable: true,
    },
    {
      name: "Out Time",
      selector: (row) => row.outTime,
      sortable: true,
    },
    {
      name: "OT Hours",
      selector: (row) => row.otHours,
      sortable: true,
    },
    // {
    //   name: "OT Time",
    //   selector: (row) => row.otTime,
    //   sortable: true,
    // },
    {
      name: "Total Time",
      selector: (row) => `${row.totalTime} hours`,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => {
        return (
          <span 
            className={`${
              row.status == "approved" ? "inline-block bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full" : "inline-block bg-red-100 text-red-800 text-sm px-3 py-1 rounded-full"
            }`}
          >
            {row.status == "approved" ? "Approved" : "Pending"}
          </span>
        );
      },
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <header className="bg-green-600 p-4 flex justify-between items-center rounded-md mb-6 shadow-md">
        <h1 className="text-2xl font-semibold text-white">
          Time Tracker Status
        </h1>
      </header>
      <div className="bg-white rounded-lg p-6">
        <div className="max-w-full mx-auto mt-8 p-4 bg-white border border-gray-200 rounded-lg shadow-md">
          <div style={{ maxWidth: "72vw" }}>
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

export default TimeTrackerRequest;
