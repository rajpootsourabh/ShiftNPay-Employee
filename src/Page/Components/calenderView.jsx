import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { BaseUrl } from "../common/BaseUrl";
import  "./calendar.css";
const CalendarViewText = () => {
  const [view, setView] = useState('dayGridMonth');
  const empId = localStorage.getItem("_id");
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [noData, setNoData] = useState(false);
  const calendarRef = useRef(null);

  useEffect(() => {
    fetchTrackingData();
  }, [view, date]);

  const formatDuration = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const sec = seconds % 60;
    return `${hours} hours, ${minutes} min, ${Math.floor(sec)} sec`;
  };

  const fetchTrackingData = async () => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const week = getWeekOfYear(date);

    let url = '';
    if (view === 'dayGridMonth') {
      url = `${BaseUrl}/tracking/monthly/${year}/${month}`;
    } else {
      url = `${BaseUrl}/tracking/weekly/${year}/${week}`;
    }

    try {
      const response = await axios.post(url,{userId:empId}, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      });
      const data = response.data;

      if (data && data.length > 0) {
        const events = data.map(item => ({
          title: `Project Manager`,
          start: new Date(item.startTime),
          end: new Date(item.stoppedTime),
          allDay: view === 'timeGridWeek',
          extendedProps: {
            jobName: item.jobName,
            amount: item.totalAmount.toFixed(3),
            duration: formatDuration(item.totalDuration),
          }
        }));

        setEvents(events);
        setTotalAmount(data.reduce((acc, item) => acc + item.totalAmount, 0));
        setNoData(false);
      } else {
        setEvents([]);
        setTotalAmount(0);
        setNoData(true);
      }
    } catch (error) {
      console.error('Error fetching tracking data:', error);
      setEvents([]);
      setTotalAmount(0);
      setNoData(true);
    }
  };

  const getWeekOfYear = (date) => {
    const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
    const pastDaysOfYear = (date - firstDayOfYear) / 86400000;
    return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
  };

  const handleDatesSet = (dateInfo) => {
    setDate(new Date(dateInfo.view.currentStart));
  };

  const changeToMonthView = () => {
    setView('dayGridMonth');
    const calendarApi = calendarRef.current.getApi();
    calendarApi.changeView('dayGridMonth');
  };

  const changeToWeekView = () => {
    setView('timeGridWeek');
    const calendarApi = calendarRef.current.getApi();
    calendarApi.changeView('timeGridWeek');
  };
  const style = {
    buttonsCss:{
      display: 'flex',
    justifyContent: 'flex-end',
    paddingRight: '20px',
    }
  }

  return (
    <div className="w-full h-full">
      <div className="text-lg font-semibold mb-4">Total Amount: ${totalAmount.toFixed(2)}</div>
      <div className="mb-4" style={style.buttonsCss}>
        <button className="px-4 py-2 bg-green-600 text-white rounded mr-2" onClick={changeToMonthView}>Month</button>
        <button className="px-4 py-2 bg-green-600 text-white rounded" onClick={changeToWeekView}>Week</button>
      </div>

      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={view}
        ref={calendarRef}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek',
        }}
        events={events}
        datesSet={handleDatesSet}
        eventContent={renderEventContent}
      />
    </div>
  );
};

function renderEventContent(eventInfo) {
  return (
    <div className="bg-yellow-100 p-2 rounded shadow">
      <b className="block text-sm">{eventInfo.event.extendedProps.duration}</b>
      <div className="bg-gray-200 p-2 mt-1 rounded">
        <div>{eventInfo.event.extendedProps?.jobName}</div>
        <div>Start: {eventInfo.event.start?.toLocaleTimeString()}</div>
        <div>End: {eventInfo.event.end?.toLocaleTimeString()}</div>
        <div>Amount: ${eventInfo.event.extendedProps?.amount}</div>
      </div>
    </div>
  );
}

export default CalendarViewText;
