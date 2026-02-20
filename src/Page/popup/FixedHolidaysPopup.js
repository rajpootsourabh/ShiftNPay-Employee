// File: ../popup/FixedHolidaysPopup.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import moment from "moment/moment";

const FixedHolidaysPopup = ({ closePopup, holidays }) => (
  <div
    className="fixed inset-0 z-50 d-flex align-items-center justify-content-center bg-black bg-opacity-50"
    style={{ overflowY: "scroll", padding: "20px" }}
  >
    <div className="bg-white p-4 rounded-lg shadow-lg w-100" style={{ maxWidth: "600px" }}>
      <h2 className="text-center mb-4">Fixed Holidays</h2>
      
      {/* Holidays List */}
      {holidays.length > 0 ? (
        <ul className="list-group mb-4">
          {holidays.map((holiday, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
              <span>{holiday.name}</span>
              <small className="text-muted">{moment(holiday.date).format("DD MMM, YYYY")}</small>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-muted mb-4">No fixed holidays available.</p>
      )}
      
      {/* Close Button */}
      <div className="d-flex justify-content-center">
        <button onClick={closePopup} className="btn btn-primary px-4">
          Close
        </button>
      </div>
    </div>
  </div>
);

export default FixedHolidaysPopup;
