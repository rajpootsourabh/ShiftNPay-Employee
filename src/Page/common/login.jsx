import React, { useState, useEffect } from "react";
import Logo from "../assets/img/logo.png";
import LoginImage from "../assets/img/safe.png";
import safeTwo from "../assets/img/safeTwo.png";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import Navbar from "./navBar";
import Footer from "./footer";
import * as Yup from "yup";
import { BaseUrl } from "./BaseUrl";

export default function Login() {
  const navigate = useNavigate();
  const [showRegisterFields, setShowRegisterFields] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loader, setLoader] = useState(false);
  const [message, setMessage] = useState("");
  const empId = localStorage.getItem("_id");
  const token = localStorage.getItem("token");

  useEffect(() => {
    // Check if token exists, if yes, navigate to /timeTracker
    if (token) {
      navigate("/timeTracker");
    }
  }, [token, navigate]);

  const loginFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
      // id: empId,
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(4, "Must be at least 4 characters")
        .required("Required"),
    }),
    onSubmit: async (values) => {
      setLoader(true);
      try {
        const response = await fetch(`${BaseUrl}/emp/emp-login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });
        if (response.status === 404) {
          setMessage("Wait for Approval");
          setLoader(false);
          return;
        }
        if (response.status === 400) {
          setMessage("Email or Password are incorrect!");
          setLoader(false);
          return;
        }
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();

        if (data.success) {
          localStorage.setItem("token", data.token);
          localStorage.setItem("_id", data.result._id);
          console.log(data.token, "this is token");
          setLoader(false);
          navigate("/timeTracker");
        } else {
          setMessage(data.msg || "Login failed");
          setLoader(false);
        }
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
        setMessage("An error occurred. Please try again later.");
        setLoader(false);
      }
    },
  });

  const registerFormik = useFormik({
    initialValues: {
      oldPassword: "",
      newPassword: "",
      id: empId,
    },

    validationSchema: Yup.object({
      oldPassword: Yup.string()
        .min(6, "Must be at least 6 characters")
        .required("Required"),
      newPassword: Yup.string()
        .min(6, "Must be at least 6 characters")
        .required("Required"),
    }),

    onSubmit: async (values) => {
      setLoader(true);
      try {
        const response = await fetch(
          "https://shiftnpay.com/api/v1/emp/reset-password",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(values),
          }
        );

        if (response.status === 200) {
          setShowRegisterFields(false);
          setLoader(false);
        }
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        console.log(data);
      } catch (error) {
        setLoader(false);
        console.error("There was a problem with the fetch operation:", error);
      }
    },
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleRegisterClick = () => {
    setShowRegisterFields(true);
  };

  const handleLoginClick = () => {
    setShowRegisterFields(false);
  };

  return (
    <>
      <Navbar />
      <div className="border border-green-700"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {showRegisterFields ? (
          <div className="lg:flex md:flex mb-14 items-center justify-center mt-14 gap-14">
            <div className="lg:w-4/12">
              <img src={safeTwo} alt="Register" />
            </div>
            <div className="lg:w-[400px] mb-4">
              <div className="font-bold text-center text-xl text-green-600">
                Signup into your account
              </div>
              <form onSubmit={registerFormik.handleSubmit}>
                <div className="flex items-center">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Old Password"
                    className="border-b w-full mt-10 p-2"
                    {...registerFormik.getFieldProps("oldPassword")}
                  />
                  <span
                    onClick={togglePasswordVisibility}
                    className="toggle-password mt-10 -ml-10 justify-end"
                    style={{ cursor: "pointer" }}
                  >
                    {showPassword ? "👁️" : "🙈"}
                  </span>
                </div>
                {registerFormik.touched.oldPassword &&
                registerFormik.errors.oldPassword ? (
                  <div className="text-red-500 text-sm">
                    {registerFormik.errors.oldPassword}
                  </div>
                ) : null}
                <div className="flex items-center">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="New Password"
                    className="border-b w-full mt-10 p-2"
                    {...registerFormik.getFieldProps("newPassword")}
                  />
                  <span
                    onClick={togglePasswordVisibility}
                    className="toggle-password mt-10 -ml-10 justify-end"
                    style={{ cursor: "pointer" }}
                  >
                    {showPassword ? "👁️" : "🙈"}
                  </span>
                </div>
                {registerFormik.touched.newPassword &&
                registerFormik.errors.newPassword ? (
                  <div className="text-red-500 text-sm">
                    {registerFormik.errors.newPassword}
                  </div>
                ) : null}

                <button
                  type="submit"
                  className="bg-[#108A00] hover:bg-green-800 p-2 w-11/12 text-white rounded-md text-center mt-10 flex justify-center cursor-pointer"
                >
                  {loader ? (
                    <>
                      <svg
                        className="h-5 w-5 animate-spin items-end justify-center "
                        fill="white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z" />
                      </svg>
                    </>
                  ) : (
                    <>
                      <div>Register</div>
                    </>
                  )}
                </button>
              </form>
              <div className="flex items-center mt-4">
                <div className="text-slate-400">Already have an account?</div>
                <div
                  className="text-[#108A00] cursor-pointer"
                  onClick={handleLoginClick}
                >
                  Login
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="flex flex-col lg:flex-row mb-14 justify-center mt-14 gap-14">
              <div className="lg:w-4/12">
                <img src={LoginImage} alt="Login" />
              </div>
              <div className="lg:w-[400px]">
                <div className="font-bold text-center text-2xl">
                  Login into your account
                </div>
                <div className="text-red-600 text-center mt-4">{message}</div>
                <form onSubmit={loginFormik.handleSubmit}>
                  <input
                    value={loginFormik.values.email}
                    placeholder="Email Address"
                    className="border-b w-full mt-10 p-2"
                    {...loginFormik.getFieldProps("email")}
                  />
                  {loginFormik.touched.email && loginFormik.errors.email ? (
                    <div className="text-red-500 text-sm">
                      {loginFormik.errors.email}
                    </div>
                  ) : null}

                  <div className="flex items-center">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      className="border-b w-full mt-10 p-2"
                      value={loginFormik.values.password}
                      {...loginFormik.getFieldProps("password")}
                    />
                    <span
                      onClick={togglePasswordVisibility}
                      className="toggle-password mt-10 -ml-10 justify-end"
                      style={{ cursor: "pointer" }}
                    >
                      {showPassword ? "👁️" : "🙈"}
                    </span>
                  </div>
                  {loginFormik.touched.password &&
                  loginFormik.errors.password ? (
                    <div className="text-red-500 text-sm">
                      {loginFormik.errors.password}
                    </div>
                  ) : null}

                  <div
                    className="bg-[#108A00] cursor-pointer flex justify-center items-center p-2 text-white rounded-md text-center mt-10"
                    onClick={loginFormik.handleSubmit}
                  >
                    {loader ? (
                      <svg
                        className="h-5 w-5 animate-spin"
                        fill="white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z" />
                      </svg>
                    ) : (
                      <div>Login</div>
                    )}
                  </div>
                </form>
                <div className=" cursor-pointer flex items-center mt-4 gap-2">
                  <div
                    onClick={handleRegisterClick}
                    className=" text-sm text-red-500 "
                  >
                    Reset Password
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
}
