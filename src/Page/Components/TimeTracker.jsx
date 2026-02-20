import React, { useEffect, useRef, useState } from "react";
import Logo from "../assets/img/logo.png";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-time-picker/dist/TimePicker.css";
import watch from "../assets/img/fast-time.png";
import CalenderView from "./calenderView";
import Profile from "./Profile";
import TimeSheet from "./TimeSheet";
import { BaseUrl } from "../common/BaseUrl";
import moment from "moment";
import ReactPaginate from "react-paginate";
import axios from "axios";
import store from "./../../store/store";
import Swal from 'sweetalert2';
import EditModale from "./EditModale";
import { toast } from "react-toastify";
import {
  convertSecondsToHHMMSS,
  formatDateTime,
  formatTime,
} from "../../Helper/functions";
import { useSelector, useDispatch } from "react-redux";
import {
  emplyeesWeeklyWorkedSeconds,
  fetchCurrentJobTimer,
  JobsDropDownList,
  myJobsList,
  pauseTimer,
  myAssignedJobs,
  setCurrentJob,
  startTimer,
  updateJobStatus,
} from "../../store/Tracker/trackerSlice";

export default function TimeTracker() {
  const dispatch = useDispatch();
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const empId = localStorage.getItem("_id");
  const [refresh, setRefresh] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [data, setData] = useState({
    name: "",
    id: "",
  });
  const {
    JobsTracking: jobsTrackingList,
    Jobs: jobsList,
    weeklySeconds: consumedWeeklySeconds,
    currentJob: currentSelectedJob,
    currentJobTracking,
    assignedJobs,
    rate,
  } = useSelector((state) => state.timeTracker);

  useEffect(() => {
    dispatch(myJobsList(empId));
    dispatch(emplyeesWeeklyWorkedSeconds(empId));
    dispatch(JobsDropDownList(empId));
    dispatch(myAssignedJobs());
  }, []);

  useEffect(() => {
    setTimer(Math.floor(currentJobTracking?.elapsedTime) || 0);
    setIsRunning(currentJobTracking?.isTimerRunning);
  }, [currentSelectedJob, currentJobTracking]);

  useEffect(() => {
    console.log(" assignedJobs changed: ", assignedJobs);
  }, [assignedJobs]);

  useEffect(() => {
    console.log(" jobsList: ", jobsList);
  }, [jobsList]);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const handleResetDataHandle = (jobId) => {
    dispatch(setCurrentJob(jobId));
    dispatch(fetchCurrentJobTimer(empId));

    let intervalCleared = false;

    const intervalId = setInterval(() => {
      const currentJobTracking = store.getState().timeTracker
        .currentJobTracking;
      console.log(
        "currentJobTracking in handleResetDataHandle : ",
        currentJobTracking
      );
      if (
        currentJobTracking &&
        currentJobTracking.hasOwnProperty("isTimerRunning")
      ) {
        clearInterval(intervalId);
        intervalCleared = true;

        if (currentJobTracking.isTimerRunning) {
          console.log("pausing timer");
  
          // Use unwrap to handle resolved/rejected states explicitly
          dispatch(pauseTimer(empId))
            .unwrap()
            .then((response) => {
              console.log('response: ' , response)

              if (response.data.success == true) {
                toast.success("Timer has been paused.");
              } else {
                toast.error(response.data.message);
              }
            })
            .catch((error) => {
              toast.error(`Error: ${error.message}`);
            });
        } else {
          dispatch(startTimer(empId))
            .unwrap()
            .then((response) => {
              console.log('response: ' , response)
              if (response.data.success == true) {
                toast.success("Timer has been started.");
              } else {
                toast.error(response.data.message);
              }
            })
            .catch((error) => {
              toast.error(`Error: ${error.message}`);
            });
        }
        dispatch(myJobsList(empId));
      }
    }, 100);

    setTimeout(() => {
      if (!intervalCleared) {
        clearInterval(intervalId);
        console.log(
          "Interval stopped after 10 seconds without finding the value"
        );
        dispatch(startTimer(empId));
        dispatch(myJobsList(empId));
      }
    }, 500);  
  };

  const handleChange = async (event) => {
    const jobId = event.target.value;
    dispatch(setCurrentJob(jobId));
    dispatch(fetchCurrentJobTimer(empId));
  };
  const handleCloseJob = (jobId) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You are about to close this job. This action cannot be undone!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, close it!',
      cancelButtonText: 'No, cancel!',
    }).then((result) => {
      if (result.isConfirmed) {
        // If confirmed, dispatch the updateJobStatus action
        dispatch(updateJobStatus({jobId,empId}));
  
        Swal.fire({
          title: 'Closed!',
          text: 'The job has been closed successfully.',
          icon: 'success',
        });
      }
    });
  };
  return (
    <>
      <EditModale
        open={modalOpen}
        setOpen={setModalOpen}
        data={data}
        setData={setData}
        refresh={refresh}
        setRefresh={setRefresh}
      />
      <div className="text-center"></div>
      <div className="flex justify-between py-4 px-1 items-center ">
        <div>
          <div className="text-black text-sm rounded-md">Jobs Name</div>
          <select
            className="border border-green-600 rounded p-2 w-[400px] bg-white"
            value={currentSelectedJob?._id || ""}
            onChange={handleChange}
          >
            <option disabled value="">
              Select a job
            </option>
            {


            }
            {jobsList.map((job) => (
              <option
                key={job._id}
                value={job._id}
                selected={currentSelectedJob.jobId == job._id ? "true" : ""}
                className="text-sm"
              >
                {job.name}
              </option>
            ))}
          </select>
        </div>
        <div
          style={{
            display: "flex",
            gap: "10px",
            alignItems:'center'
          }}
        >
          <svg
            className="w-5 h-5 "
            fill="black"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
          </svg>

          <div className="flex gap-2">
            <svg
              fill="black"
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path d="M160 0c17.7 0 32 14.3 32 32V67.7c1.6 .2 3.1 .4 4.7 .7c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.1c-.4-.1-.9-.1-1.3-.2l-.2 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.1-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7 0 0C119.4 279.3 84.4 270 58.4 253c-14.2-9.3-27.5-22-35.8-39.6c-8.4-17.9-10.1-37.9-6.1-59.2C23.7 116 52.3 91.2 84.8 78.3c13.3-5.3 27.9-8.9 43.2-11V32c0-17.7 14.3-32 32-32z" />
            </svg>
            <div>{rate || '--'}/h</div>
          </div>

          <div className="text-sm ">{convertSecondsToHHMMSS(timer)}</div>
          <button
            onClick={() => {
              if(currentSelectedJob._id){
                handleResetDataHandle(currentSelectedJob._id)
              }else{
                Swal.fire({
                  title: 'Not Allowed!',
                  text: 'Please select a Job to Start Timer.',
                  icon: 'error',
                });
              }
            }}
            className={`px-4 p-2 w-[150px] rounded ${
              currentJobTracking?.isTimerRunning
                ? "bg-red-500 text-white"
                : "bg-green-500 text-white"
            }`}
          >
            {currentJobTracking?.isTimerRunning ? "Stop Clock" : "Start Clock"}
          </button>
        </div>
      </div>

      <div className="bg-green-600  rounded-xl  mx-2 flex justify-between items-center ">
        <div className="p-2">
          <div className="text-white text-2xl">Time tracker</div>
          <div className="text-sm text-white">
            Start and stop timer as you work, or enter hours manually.
          </div>
        </div>

        <div>
          <div className="text-lg text-white">
            Week Total: {consumedWeeklySeconds ? convertSecondsToHHMMSS(consumedWeeklySeconds) : '00:00:00'}
            /40:00:00
          </div>
        </div>

        <div className="bg-white rounded-l-full w-[200px]">
          <img className="h-50 w-[100px] ml-10" src={watch} />
        </div>
      </div>

      <div className="shadow border-t mt-4">
        <div className="flex justify-between py-2 items-center px-10 mt-4">
          <div className="text-black text-[16px]">
            {/* {taskData.length > 0
                    ? taskData[taskData.length - 1].date
                      ? new Date(
                          taskData[taskData.length - 1].date
                            .split("-")
                            .reverse()
                            .join("-")
                        ).toDateString()
                      : "Today"
                    : "Today"} */}
          </div>
        </div>

        <div className="bg-white border py-4 px-4 border-gray-300">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                  Job Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                  Total Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                  Start Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                  End Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                  Total Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                  Restart
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                  Options
                </th>
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-200">
              {jobsTrackingList.map((task) => (
                <tr key={task.jobId}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 capitalize">
                    {task.jobDetails.name}
                  </td>

                  <td className="px-6 py-4  whitespace-nowrap text-sm text-gray-500 ">
                    <div className="flex">
                      <svg
                        fill="black"
                        className="w-5 h-5 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                      >
                        <path d="M160 0c17.7 0 32 14.3 32 32V67.7c1.6 .2 3.1 .4 4.7 .7c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.1c-.4-.1-.9-.1-1.3-.2l-.2 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.1-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7 0 0C119.4 279.3 84.4 270 58.4 253c-14.2-9.3-27.5-22-35.8-39.6c-8.4-17.9-10.1-37.9-6.1-59.2C23.7 116 52.3 91.2 84.8 78.3c13.3-5.3 27.9-8.9 43.2-11V32c0-17.7 14.3-32 32-32z" />
                      </svg>
                      <div> {task?.amount ?? "0:00"}</div>
                    </div>
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {formatDateTime(task?.startTime)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {task?.stoppedTime
                      ? formatDateTime(task?.stoppedTime)
                      : "00:00:00"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {formatTime(task.elapsedTime)}
                  </td>
                  {(task.jobDetails.status != "closed" && task.jobDetails.statusByEmployee != "closed") ? (
                    <td
                      onClick={() => {
                        handleResetDataHandle(task.jobId);
                      }}
                      className="px-6 cursor-pointer py-4 whitespace-nowrap text-sm text-gray-500 text-center"
                    >
                      {task.isTimerRunning ? (
                        <svg
                          fill="black"
                          className="w-4 cursor-pointer h-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 320 512"
                        >
                          <path d="M48 0H16C7.163 0 0 7.163 0 16v480c0 8.837 7.163 16 16 16h32c8.837 0 16-7.163 16-16V16C64 7.163 56.837 0 48 0zm256 0h-32c-8.837 0-16 7.163-16 16v480c0 8.837 7.163 16 16 16h32c8.837 0 16-7.163 16-16V16c0-8.837-7.163-16-16-16z" />
                        </svg>
                      ) : (
                        <svg
                          fill="black"
                          className="w-4 cursor-pointer h-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 384 512"
                        >
                          <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                        </svg>
                      )}
                    </td>
                  ) : (
                    <td>Closed</td>
                  )}
                  {(task.jobDetails.status != "closed" && task.jobDetails.statusByEmployee != "closed") ? (
                    <td
                      className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                      onClick={() => {
                        setModalOpen(true);
                        setData({
                          name: task?.jobDetails.name,
                          id: task?.jobDetails._id,
                        });
                      }}
                    >
                      <svg
                        fill="black"
                        className="w-1 h-8 cursor-pointer"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 128 512"
                      >
                        <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z" />
                      </svg>
                    </td>
                  ) : (
                    <td
                      className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                      style={{cursor:'not-allowed'}}
                    >
                      <svg
                        fill="black"
                        className="w-1 h-8 cursor-pointer"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 128 512"
                        style={{cursor:'not-allowed'}}
                      >
                        <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z" />
                      </svg>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>

          {/* <div className="flex row">
                  <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    breakLabel={"..."}
                    // pageCount={Math.ceil(taskData.length / tasksPerPage)}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    // onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}
                    pageLinkClassName={"page-link"}
                    pageClassName={"page-item"}
                    previousClassName={"previous-page"}
                    nextClassName={"next-page"}
                    previousLinkClassName={"previous-link"}
                    nextLinkClassName={"next-link"}
                    breakClassName={"break-me"}
                    disabledClassName={"disabled"}
                    activeLinkClassName={"active-link"}
                  />
                </div> */}
        </div>
        <div className="  border py-4 px-4 border-gray-300 mt-5" style={{marginTop:'60px'}}>
        <h4 className="py-5">Assigned Jobs</h4>

          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                  Job Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                  Status by Vendor
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                  Status by You
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>

           

  <tbody className="bg-white divide-y divide-gray-200">
    {assignedJobs.map((job) => (
      <tr key={job.jobId}>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 capitalize">
          {job.name}
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <span
            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
              job.status === 'closed'
                ? 'bg-green-100 text-red-800'
                : 'bg-red-100 text-green-800'
            }`}
          >
            {job.status === 'closed' ? 'Closed' : 'Active'}
          </span>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <span
            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
              job.statusByEmployee === 'closed'
                ? 'bg-green-100 text-red-800'
                : 'bg-red-100 text-green-800'
            }`}
          >
            {job.statusByEmployee === 'closed' ? 'Closed' : 'Active'}
          </span>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
          {job.statusByEmployee != 'closed' && (
            <button
              className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-700"
              onClick={() => handleCloseJob(job._id)}
            >
              Mark as Closed
            </button>
          )}
        </td>
      </tr>
    ))}
  </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
