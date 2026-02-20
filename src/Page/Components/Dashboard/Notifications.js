import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, ListGroup } from 'react-bootstrap';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/en-gb';
import { FaBell } from 'react-icons/fa'; // Importing notification icon from react-icons
import { markAllAsRead, notificationList } from '../../../store/Notification/userNotificationsSlice';

function Notifications() {
  const dispatch = useDispatch();
  const empId = localStorage.getItem("_id");
  const notifications = useSelector((state) => state.notifications.notifications);

  useEffect(() => {
    dispatch(notificationList(empId));
    dispatch(markAllAsRead(empId));
  }, [empId]);

  useEffect(() => {
    console.log(notifications);
  }, [notifications])

  return (

    <div className="col-lg-4 col-md-6 mb-4">
      <div className="card p-3 shadow-sm" style={{ borderRadius: "15px" }}>
        <h6 className="fw-bold mb-3">Notification</h6>
        {notifications.length > 0 ? (
          <div style={{'overflowY':"scroll" , height : '254px'}}>
            {notifications.map((notification) => (
              <div className="row align-items-center mb-2 shadow-sm notificationlisting mx-2" key={notification._id}>
                <div className="col-sm-1">
                  <i className="bi bi-bell text-success me-2"></i>
                </div>
                <div className="col-sm-11">
                  <p className="mb-0 text-muted"><strong>{notification.body}</strong></p>
                  <p className="mb-0 text-muted"> {dayjs(notification.sentAt).fromNow()}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-600 mt-8">
            <FaBell className="text-green-600 mx-auto mb-4" size={40} />
            <p className="text-lg">No notifications found</p>
          </div>
        )}
      </div>
    </div>

  );
}

export default Notifications;
