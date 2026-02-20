import React, { useState, useEffect } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BaseUrl } from "../../Page/common/BaseUrl";
import Swal from "sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css";
import { toast } from "react-toastify";
import { Spinner } from "react-bootstrap";

const ApplyLeavePopup = ({ closePopup, employeeId, reloadListing }) => {
  const [loading, setLoading] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [periodOfLeave, setPeriodOfLeave] = useState("first");
  const [endDate, setEndDate] = useState(null);
  const [leaveType, setLeaveType] = useState("");
  const [leaveTypes, setLeaveTypes] = useState([]);
  const [availableLeaves, setAvailableLeaves] = useState({});
  const [reason, setReason] = useState("");
  const [document, setDocument] = useState(null);
  const [leaveDuration, setLeaveDuration] = useState("full"); // Full Day or Half Day
  const empId = localStorage.getItem("_id");

  useEffect(() => {
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
        setLeaveTypes(response.data.leaveTypes);
        setAvailableLeaves(response.data.availableLeaves);
      } catch (error) {
        console.error("Error fetching leave data", error);
      }
    };
    fetchLeaveData();
  }, [empId]);

  const calculateLeaveDays = (start, end) => {
    const timeDiff = end.getTime() - start.getTime();
    return Math.ceil(timeDiff / (1000 * 3600 * 24)) + 1;
  };

  const handleApplyLeave = async () => {
    if (!startDate && leaveDuration === "full") {
      toast.error("Please select both start and end dates.");
      return;
    }
    if (!startDate && leaveDuration === "half") {
      toast.error("Please select a date.");
      return;
    }
    if (!periodOfLeave && leaveDuration === "half") {
      toast.error("Please select time for the Leave.");
      return;
    }
    if (!leaveType) {
      toast.error("Please select a leave type.");
      return;
    }
    if (!document) {
      toast.error("Please upload a valid document.");
      return;
    }

    const requestedDays =
      leaveDuration === "half" ? 0.5 : calculateLeaveDays(startDate, endDate);
    const availableLeaveCount = availableLeaves[leaveType] || 0;

    if (requestedDays > availableLeaveCount) {
      toast.error(
        `You have requested ${requestedDays} days, but only ${availableLeaveCount} leave(s) are available for the selected leave type.`
      );
      return;
    }

    setLoading(true);
    const leaveData = new FormData();
    leaveData.append("employeeId", employeeId);
    leaveData.append("leaveType", leaveType);
    leaveData.append("startDate", startDate); // Use startDate for both in Half Day
    leaveData.append("endDate", leaveDuration === "half" ? startDate : endDate);
    leaveData.append("periodOfLeave", leaveDuration === "half" ? periodOfLeave : '');
    leaveData.append("reason", reason);
    leaveData.append("leaveDuration", leaveDuration === "half" ? 0.5 : 1);
    if (document) leaveData.append("document", document);

    try {
      const response = await axios.post(`${BaseUrl}/leaves/apply`, leaveData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.data.success) {
        toast.success(response.data.message);
        reloadListing();
        closePopup();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("Error applying for leave", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDocumentChange = (e) => {
    setDocument(e.target.files[0]);
  };

  return (
    <div
      className="fixed inset-0 z-50 d-flex align-items-center justify-content-center bg-black bg-opacity-50"
      style={{ overflowY: "scroll", padding: "20px" }}
    >
      <div
        className="bg-white p-4 rounded-lg shadow-lg w-100"
        style={{ maxWidth: "800px" }}
      >
        <h2 className="text-center mb-4">Apply for Leave</h2>

        {/* Leave Counters */}
        <div className="row mb-4">
          {leaveTypes.map((type) => (
            <div className="col-md-4 mb-3" key={type.name}>
              <div className="card text-center">
                <div className="card-body">
                  <h5 className="card-title">{type.name}</h5>
                  <p className="card-text text-success">
                    {availableLeaves[type._id] || 0} days
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Leave Type Selection */}
        <div className="mb-3">
          <label htmlFor="leaveType" className="form-label">
            Leave Type
          </label>
          <select
            id="leaveType"
            value={leaveType}
            onChange={(e) => setLeaveType(e.target.value)}
            className="form-select"
          >
            <option value="">Select Leave Type</option>
            {leaveTypes.map((type) => (
              <option key={type._id} value={type._id}>
                {type.name}
              </option>
            ))}
          </select>
        </div>

        {/* Date Selection */}
        <div className="mb-3">
          <label className="form-label">Leave Duration</label>
          <div>
            <label className="me-3">
              <input
                type="radio"
                value="full"
                checked={leaveDuration === "full"}
                onChange={() => setLeaveDuration("full")}
              />
              Full Day
            </label>
            <label>
              <input
                type="radio"
                value="half"
                checked={leaveDuration === "half"}
                onChange={() => setLeaveDuration("half")}
              />
              Half Day
            </label>
          </div>
        </div>

        {leaveDuration === "full" ? (
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="startDate" className="form-label">
                Start Date
              </label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="form-control"
                dateFormat="yyyy/MM/dd"
                placeholderText="Start Date"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="endDate" className="form-label">
                End Date
              </label>
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                className="form-control"
                dateFormat="yyyy/MM/dd"
                placeholderText="End Date"
              />
            </div>
          </div>
        ) : (
          <>
            {" "}
            <div className="mb-3">
              <label htmlFor="halfDayDate" className="form-label">
                Select Date
              </label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="form-control"
                dateFormat="yyyy/MM/dd"
                placeholderText="Select Date"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="periodOfLeave" className="form-label">
                Leave For
              </label>
              <select
                id="periodOfLeave"
                value={periodOfLeave}
                onChange={(e) => setPeriodOfLeave(e.target.value)}
                className="form-select"
              >
                <option value="">Select Leave Type</option>
                <option value="first">First Half</option>
                <option value="second">Second Half</option>
                
              </select>
            </div>
          </>
        )}

        {/* Reason and Document Upload */}
        <div className="mb-3">
          <label htmlFor="reason" className="form-label">
            Reason for Leave
          </label>
          <textarea
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            className="form-control"
            placeholder="Reason for leave"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="document" className="form-label">
            Upload Document
          </label>
          <input
            type="file"
            className="form-control"
            id="document"
            onChange={handleDocumentChange}
          />
        </div>

        {/* Action Buttons */}
        <div className="d-flex justify-content-center gap-3 mb-3">
          <button
            onClick={handleApplyLeave}
            className="btn btn-success px-4"
            disabled={loading}
          >
            {loading ? "Applying..." : "Apply"}
          </button>
          <button onClick={closePopup} className="btn btn-light px-4">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApplyLeavePopup;
