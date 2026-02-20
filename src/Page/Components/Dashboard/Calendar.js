import React, { useState } from 'react';
import "./calender.css";
const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Function to get the current week's dates
  const getCurrentWeek = () => {
    const today = new Date();
    const startOfWeek = new Date(today);
    const weekDays = [];

    // Adjust startOfWeek to Sunday (or your preferred start day)
    startOfWeek.setDate(today.getDate() - today.getDay());

    for (let i = 0; i < 7; i++) {
      weekDays.push(new Date(startOfWeek));
      startOfWeek.setDate(startOfWeek.getDate() + 1);
    }

    return weekDays;
  };

  const currentWeek = getCurrentWeek();
  
  // Get the month name and year
  const monthName = currentWeek[0].toLocaleDateString('en-US', { month: 'long' });
  const year = currentWeek[0].getFullYear();

  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="card p-4 shadow-sm" style={{ borderRadius: "15px" }}>
        {/* Month and Year heading */}
        <h6 className="fw-bold mb-2 text-center">
          {monthName} {year}
        </h6>
        
        {/* Dates row */}
        <div className="d-flex justify-content-between">
          {currentWeek.map((day, index) => (
            <div
              key={index}
              className={`text-center p-2 rounded ${
                selectedDate.toDateString() === day.toDateString() ? 'bg-primary text-white active-date' : ''
              }`}
              onClick={() => setSelectedDate(day)}
              style={{ cursor: 'pointer' }}
            >
              <div>{day.toLocaleDateString('en-US', { weekday: 'short' })}</div>
              <div className='DateOfWeek'>{day.getDate()}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
