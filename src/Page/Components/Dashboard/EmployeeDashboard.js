import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BaseUrl, ImgUrl } from "../../common/BaseUrl";
import { Bar, Doughnut } from "react-chartjs-2";
import "react-calendar/dist/Calendar.css";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import Calendar from "./Calendar";
import Performance from "./Performance";
import "./dashboard.css";
import { useNavigate } from 'react-router-dom';
import Notifications from "./Notifications";
import axios from "axios";


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const EmployeeDashboard = () => {
  const [data, setData] = useState(null);
  const [chartData, setChartData] = useState([]);
  const [date, setDate] = React.useState(new Date());
  const [currentTime, setCurrentTime] = useState('');
  const [showColon, setShowColon] = useState(true);
  const navigate = useNavigate();
  const empId = localStorage.getItem("_id");
  const [availableLeaves, setAvailableLeaves] = useState(0);
  const [pendingForms, setPendingForms] = useState([]);

  const handleClick = () => {
    navigate('/timeTracker'); // Replace with your target URL
  };


  const empDataGetById = async () => {
    try {
      const response = await fetch(`${BaseUrl}/emp/get-by-id/${empId}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setData(data.result);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  const lastSixMonthTracking = async () => {
    try {
      const response = await fetch(`${BaseUrl}/tracking//monthly-average/${empId}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      // Map the response data to chart labels and dataset
      const labels = result.map(entry => entry.month);
      const dataset = result.map(entry => entry.totalElapsedHours);
      setChartData({ labels, dataset });
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };
  const fetchLeaveData = async () => {
    try {
      const response = await axios.get(
        `${BaseUrl}/leaves/available-leaves/${empId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const total = Object.values(response.data.availableLeaves).reduce((sum, value) => sum + value, 0);

      setAvailableLeaves(total);
    } catch (error) {
      console.error("Error fetching leave data", error);
    }
  };


  const fetchPendingForms = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(`${BaseUrl}/emp/assignedDocuments`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const docs = Array.isArray(response.data) ? response.data : [];
      const pending = docs.filter(
        (d) => d.status?.toLowerCase() !== "completed" && d.status?.toLowerCase() !== "submitted"
      );
      setPendingForms(pending);
    } catch (error) {
      console.error("Error fetching assigned documents", error);
    }
  };

  useEffect(() => {
    if (empId) {
      empDataGetById();
      lastSixMonthTracking();
      fetchLeaveData();
      fetchPendingForms();
    }
  }, [empId]);


  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      const formattedTime = `${String(hours % 12 || 12).padStart(2, '0')}${showColon ? ':' : ' '}${String(minutes).padStart(2, '0')} ${ampm}`;
      setCurrentTime(formattedTime);
    };

    // Initial time update
    updateTime();

    // Interval to update time every second
    const timeIntervalId = setInterval(updateTime, 1000);

    // Interval to toggle colon every second
    const colonIntervalId = setInterval(() => {
      setShowColon((prev) => !prev);
    }, 1000);

    return () => {
      clearInterval(timeIntervalId);
      clearInterval(colonIntervalId);
    };
  }, [showColon]);

  // Data for Bar Chart
  const barData = {
    labels: chartData.labels || [], // Use fetched labels
    datasets: [
      {
        label: "Hours Spent",
        data: chartData.dataset || [], // Use fetched dataset
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#FF9F40", "#9966FF"],
        borderRadius: 10,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: true, text: "Hours Spent" },
    },
  };



  return (
    <div className="container py-5">
      {/* Header */}
      <h3 className="text-center mb-5 fw-bold" style={{ fontSize: "1.5rem" }}>
        Time & Attendance Leave and Time Off Requests
      </h3>

      {/* Top Row */}
      <div className="row mb-4 gx-4">
        {/* Employee Info */}
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card p-4 text-center shadow-sm" style={{ borderRadius: "15px" }}>
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <img
                  src={data?.profile ? `${ImgUrl}/empProfile/${data?.profile}` : "https://via.placeholder.com/100"}
                  alt="Employee"
                  className="rounded-circle mx-auto mb-3"
                  style={{ width: "100px", height: "100px", objectFit: "cover" }}
                />
              </div>
              <div className="col-md-6 text-left col-sm-12">
                <h6 className="text-muted">Employee In</h6>
                <h3 className="fw-bold mb-1">{currentTime}</h3>
                <button className="btn btn-success px-4 mt-2" onClick={handleClick}>Clock In/Out</button>
              </div>
            </div>
          </div>
        </div>

        {/* Self-Service Request */}
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card p-3 shadow-sm" style={{ borderRadius: "15px" }}>
            <h6 className="fw-bold mb-3">Employee Self Service Request</h6>
            <div className="cursor-pointer" onClick={() => {
              navigate('/leaveManagement');
            }}>
              <p className="d-flex">
                <span className="dashboardIcons mr-2">
                  <i className="bi bi-calendar3 me-2">
                  </i>
                </span> Leave Request</p>
            </div>
            <div className="cursor-pointer">
              <p className="d-flex">
                <span className="dashboardIcons mr-2">
                  <i className="bi bi-clock me-2">
                  </i>
                </span> Available Leavse ({availableLeaves})</p>
            </div>
          </div>
        </div>

        {/* Calendar */}
        <Calendar />

        {/* Hours Spent */}
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card p-3 shadow-sm" style={{ borderRadius: "15px", minHeight: "321px" }}>
            <h6 className="fw-bold mb-3">Hours Spent</h6>
            <Bar data={barData} options={barOptions} />
          </div>
        </div>

        {/* Form Fill Section */}
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card p-3 shadow-sm" style={{ borderRadius: "15px", minHeight: "200px" }}>
            <h6 className="fw-bold mb-3 d-flex align-items-center">
              <i className="bi bi-file-earmark-text me-2 text-success"></i>
              Form Fill
            </h6>
            {pendingForms.length === 0 ? (
              <div className="text-center text-muted py-3">
                <i className="bi bi-check-circle" style={{ fontSize: "2rem", color: "#198754" }}></i>
                <p className="mt-2 mb-0">All forms completed!</p>
              </div>
            ) : (
              <>
                <div className="mb-3">
                  <span className="badge bg-warning text-dark me-2" style={{ fontSize: "0.85rem" }}>
                    {pendingForms.length} Pending
                  </span>
                  <span className="text-muted" style={{ fontSize: "0.8rem" }}>form(s) to fill</span>
                </div>
                <ul className="list-unstyled mb-3" style={{ maxHeight: "120px", overflowY: "auto" }}>
                  {pendingForms.slice(0, 5).map((doc) => (
                    <li key={doc._id} className="d-flex align-items-center mb-2">
                      <i className="bi bi-dot text-success" style={{ fontSize: "1.5rem" }}></i>
                      <span className="text-truncate" style={{ fontSize: "0.85rem" }}>
                        {doc.documentId?.fileName || doc.documentId?.docIdentity || "Document"}
                      </span>
                    </li>
                  ))}
                  {pendingForms.length > 5 && (
                    <li className="text-muted" style={{ fontSize: "0.8rem", paddingLeft: "8px" }}>
                      +{pendingForms.length - 5} more...
                    </li>
                  )}
                </ul>
              </>
            )}
            <button
              className="btn btn-success w-100 mt-auto"
              onClick={() => navigate('/my-documents')}
            >
              <i className="bi bi-pencil-square me-2"></i>
              {pendingForms.length > 0 ? "Fill Forms" : "View Documents"}
            </button>
          </div>
        </div>

        {/* Performance */}
        <Performance />

        {/* Notifications */}
        <Notifications />
      </div>
    </div>
  );
};

export default EmployeeDashboard;
