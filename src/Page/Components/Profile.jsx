import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BaseUrl, ImgUrl } from "../common/BaseUrl";
import Modal from "react-modal";
import axios from "axios";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProfileData,
  updateProfile,
} from "../../store/Profile/profileSlice";
import Swal from "sweetalert2";

Modal.setAppElement("#root");

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile.profile);
  const empId = localStorage.getItem("_id");

  const [refresh, setRefresh] = useState(false);
  const [data, setData] = useState(null);
  const [preview, setPreview] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    address: "",
    city: "",
    lane: "",
    stateId: "",
    zip: "",
    jobTitle: "",
    department: "",
    employeeId: "",
    hireDate: "",
    empStatus: "",
    payPeriod: "",
    wage: "",
    timeOff: "",
    availabilityPreference: "",
    firstName: "",
    lastName: "",
    middelName: "",
    ssnNo: "",
  });

  useEffect(() => {
    if (empId) {
      dispatch(fetchProfileData(empId));
      empDataGetById();
    }
  }, [empId, refresh]);

  useEffect(() => {
    if (profile) {
      setFormData({
        ...profile,
        hireDate: profile.hireDate ? moment(profile.hireDate).format("YYYY-MM-DD") : "",
      });
    }
  }, [profile]);

  const handleOnChangeImage = async (evt) => {
    setPreview(URL.createObjectURL(evt.target.files[0]));
    const formData = new FormData();
    formData.append("id", empId);
    formData.append("profile", evt.target.files[0]);

    try {
      await axios.post(`${BaseUrl}/emp/profile-update`, formData);
      setRefresh(!refresh);
    } catch (error) {
      console.error("Image upload error:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updateData = { ...formData };
    dispatch(updateProfile({ empId, updateData }))
      .then((response) => {
        if (response.meta.requestStatus === "fulfilled") {
          showSuccessAlert("success", "Employee data updated successfully");
        }
      })
      .catch((error) => {
        console.error("Error updating employee data:", error);
        alert("An error occurred while updating employee data.");
      });
  };

  const showSuccessAlert = (icon, msg) => {
    Swal.fire({
      icon: icon,
      title: "Success!",
      text: msg,
      confirmButtonText: "OK",
      confirmButtonColor: "#3085d6",
    });
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


  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <header className="bg-green-600 p-4 flex justify-between items-center rounded-md mb-6 shadow-md">
        <h1 className="text-2xl font-semibold text-white">My Profile</h1>
      </header>

      <div className="bg-white shadow-lg rounded-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <label htmlFor="image-profile">
            <img
              className="rounded-full w-24 h-24 border-4 border-green-600 hover:cursor-pointer"
              src={preview ? preview : `${ImgUrl}/empProfile/${data?.profile}`}
              alt="Profile"
              htmlFor="image-profile"
            />
          </label>
          <input
            type="file"
            id="image-profile"
            className="hidden"
            onChange={handleOnChangeImage}
          />
        </div>

        <div className="mb-6">
          <div className="flex justify-between">
            <h2 className="text-lg font-semibold mb-2">Basic Information*</h2>
          </div>
          <div className="flex justify-between">
            <div className="mb-4 w-6/12">
              <p className="text-sm font-semibold">First Name:</p>
              <input
                value={formData?.firstName}
                name="firstName"
                className="text-gray-800 border w-full p-2 rounded-md"
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4 w-5/12">
              <p className="text-sm font-semibold">Middle Name(optional):</p>
              <input
                value={formData?.middleName}
                name="middleName"
                className="text-gray-800 border w-full p-2 rounded-md"
                onChange={handleInputChange}
              />
            </div>
            </div>
          <div className="flex justify-between">
            <div className="mb-4 w-6/12">
              <p className="text-sm font-semibold">Last Name:</p>
              <input
                value={formData?.lastName}
                name="lastName"
                className="text-gray-800 border w-full p-2 rounded-md"
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4 w-5/12">
              <p className="text-sm font-semibold">SSN number</p>
              <input
                type="text"
                maxLength="9" // Limit input length to 9 characters
                value={formData?.ssnNo}
                name="ssnNo"
                className="text-gray-800 border w-full p-2 rounded-md"
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, ""); // Remove any non-numeric characters
                  if (value.length <= 9) {
                    // Ensure the value is not longer than 9 characters
                    handleInputChange({ target: { name: "ssnNo", value } });
                  }
                }}
              />
            </div>

            <div className="mb-4 w-6/12">
              <p className="text-sm font-semibold">Phone Number:</p>
              <input
                value={formData?.mobile}
                name="mobile"
                placeholder="(847) 825-5586"
                className="text-gray-800 border w-full p-2 rounded-md"
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4 w-5/12">
              <p className="text-sm font-semibold">Email:</p>
              <input
                value={formData?.email}
                name="email"
                className="text-gray-800 border w-full p-2 rounded-md"
                disabled
              />
            </div>
          </div>

          <div className="flex w-full justify-between">
           

            <div className="mb-4 w-5/12">
              <p className="text-sm font-semibold">Address</p>
              <input
                value={formData?.address}
                name="address"
                className="text-gray-800 border w-full p-2 rounded-md"
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="mb-4 mt-4 flex justify-between">
            <p className="text-lg font-semibold">Employment Details</p>
          </div>

          <div className="flex justify-between">
            <div className="mb-4 w-6/12">
              <p className="text-sm font-semibold">Job Title:</p>
              <input
                value={formData?.jobTitle}
                name="jobTitle"
                placeholder="Manager"
                className="text-gray-800 border w-full p-2 rounded-md"
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-4 w-5/12">
              <p className="text-sm font-semibold">Department:</p>
              <input
                value={formData?.department}
                name="department"
                placeholder="Food Department"
                className="text-gray-800 border w-full p-2 rounded-md"
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="flex justify-between">
            <div className="mb-4 w-6/12">
              <p className="text-sm font-semibold">Employee ID</p>
              <input
                value={`EMP${formData?.empId}`}
                name="employeeId"
                placeholder="1927086"
                className="text-gray-800 border w-full p-2 rounded-md"
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-4 w-5/12">
              <p className="text-sm font-semibold">Hire Date</p>
              <input
                value={moment(formData.hireDate).format("LL")}
                name="hireDate"
                type="date"
                placeholder="10 Oct 2026"
                className="text-gray-800 border w-full p-2 rounded-md"
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-4 w-5/12">
              <p className="text-sm font-semibold">Status</p>
              <div className="w-full">
                <select
                  value={formData?.empStatus}
                  onChange={handleInputChange}
                  name="empStatus"
                  id="status-1"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="active">Active</option>
                  <option value="terminated">Terminated</option>
                  <option value="leave">Leave</option>
                </select>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <p className="text-lg font-semibold">Availability and Scheduling</p>
          </div>

          <div className="flex justify-between">
            <div className="mb-4 w-6/12">
              <p className="text-sm font-semibold">Availability Preferences</p>
              <input
                value={formData?.availabilityPreference}
                name="availabilityPreference"
                className="text-gray-800 border w-full p-2 rounded-md"
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-4 w-5/12">
              <p className="text-sm font-semibold">Time-Off Requests:</p>
              <input
                value={formData?.timeOff}
                name="timeOff"
                className="text-gray-800 border w-full p-2 rounded-md"
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="flex justify-between">
            <div className="mb-4 w-6/12">
              <p className="text-sm font-semibold">Shift refereence </p>
              <input
                name="shiftPreferences"
                value={data?.shift?.length ? data?.shift[0].name :  'Not Assigned' }
                className="text-gray-800 border w-full p-2 rounded-md"
                disabled='disabled'
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="mb-4">
            <p className="text-lg font-semibold">Skills and Certifications</p>
          </div>

          <div className="flex justify-between">
            <div className="mb-4 w-6/12">
              <p className="text-sm font-semibold">Skills</p>
              <input
                name="skills"
                value={formData?.skills}
                className="text-gray-800 border w-full p-2 rounded-md"
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-4 w-5/12">
              <p className="text-sm font-semibold">Certifications:</p>
              <input
                name="certifications"
                value={formData?.certifications}
                className="text-gray-800 border w-full p-2 rounded-md"
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="mb-4 flex justify-between">
            <p className="text-lg font-semibold">Wage and Compensation</p>
          </div>

          <div className="flex justify-between">
            <div className="mb-4 w-6/12">
              <p className="text-sm font-semibold">Hourly Wage/Salary</p>
              <input
                value={formData?.wage}
                name="wage"
                placeholder="10$"
                className="text-gray-800 border w-full p-2 rounded-md"
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-4 w-5/12">
              <p className="text-sm font-semibold">Overtime Rate</p>
              <input
                disabled
                value={formData?.overTimeRate}
                placeholder=""
                className="text-gray-800 border w-full p-2 rounded-md"
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-4 w-5/12">
              <p className="text-sm font-semibold">Pay Period Information</p>
              <div className="w-full">
                <select
                  value={formData?.payPeriod}
                  name="payPeriod"
                  onChange={handleInputChange}
                  id="pay-period-1"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                  <option value="daily">Daily</option>
                </select>
              </div>
            </div>
          </div>

          <button
            onClick={handleSubmit}
            className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
