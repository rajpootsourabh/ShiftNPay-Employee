import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Page/common/login";
import Dashboard from "./Page/Components/dashboard";
import TimeTracker from "./Page/Components/TimeTracker";
import "./App.css";
import PrivateRoute from "./Page/Components/PrivateRoute";
import NotFound from "./Page/Components/notFound";
import SedulingPage from "./Page/Components/sedulingPage";
import TimeClocking from "./Page/Components/timeClocking";
import TipMangements from "./Page/Components/TipMangements";
import TeamMangement from "./Page/Components/TeamMagement";
import Feature from "./Page/Components/Feature";
import ContactUs from "./Page/Components/ContactUs";
import NotificationList from "./Page/Components/NotificationList";
import AuthenticatedLayout from "./Page/Auth/AuthenticatedLayout";
import CalendarViewText from "./Page/Components/calenderView";
import Profile from "./Page/Components/Profile";
import OverTimeList from "./Page/Components/overTimeTable";
import Download from "./Page/Components/Download";
import About from "./Page/Components/About";
import TimeTrackerRequest from "./Page/Components/TimeTrackerRequest";
import LeaveHistory from "./Page/Components/LeaveHistory";
import EmployeeDashboard from "./Page/Components/Dashboard/EmployeeDashboard";
import Blog from "./Page/Components/Blog";
import BlogDetails from "./Page/Components/BlogDetails";
import Carrer from "./Page/Components/carrer";
import ScrollToTop from "./Page/Components/scroolTop";
import Review from "./Page/Components/Review";
import BuildsFor from "./Page/Components/BuildsFor";
import Academy from "./Page/Components/Academy";
import TaskMangement from "./Page/Components/TaskMangement";
import BecomeParter from "./Page/Components/BecomeParter";
import ResourceCenter from "./Page/Components/ResourceCenter";
import ResourceBasic from "./Page/Components/ResourceBasic";
import ResourceAdvance from "./Page/Components/ResourceAdvance";
import MediKit from "./Page/Components/MediKit";
import Legal from "./Page/Components/Legal";
import Affliated from "./Page/Components/Affliated";
import ResturantGuide from "./Page/Components/RestaurntGuid";
import ResturantData from "./Page/Components/RestaurantData";
import ResturantPostCast from "./Page/Components/ResturantPodCast";
import MobileSedule from "./Page/Components/MobileSedule";
import MangerLookBook from "./Page/Components/MangerLookBook";
import WorkForceMangement from "./Page/Components/workForceMangement";
import DocumentStorage from "./Page/Components/DocumentStorage";
import Pricing from "./Page/common/Price";
import OperationOverView from "./Page/Components/OpertaionOverView";
import BuildFor from "./Page/Components/buildFor";
import MyDocuments from "./Page/Components/MyDocuments";

export default function App() {
  return (
    <BrowserRouter>
       <ScrollToTop />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="login/" element={<Login />} />
        <Route path="dashboard/" element={<PrivateRoute><AuthenticatedLayout><EmployeeDashboard /></AuthenticatedLayout></PrivateRoute>} />
        <Route path="timeTracker/" element={<PrivateRoute><AuthenticatedLayout><TimeTracker /></AuthenticatedLayout></PrivateRoute>} />
        <Route path="leaveManagement/" element={<PrivateRoute><AuthenticatedLayout><LeaveHistory /></AuthenticatedLayout></PrivateRoute>} />
        <Route path="time-tracker-request/" element={<PrivateRoute><AuthenticatedLayout><TimeTrackerRequest /></AuthenticatedLayout></PrivateRoute>} />
        <Route path="shiftTime/" element={<PrivateRoute><AuthenticatedLayout><OverTimeList /></AuthenticatedLayout></PrivateRoute>} />
        <Route path="calendar/" element={<PrivateRoute><AuthenticatedLayout><CalendarViewText /></AuthenticatedLayout></PrivateRoute>} />
        <Route path="profile/" element={<PrivateRoute><AuthenticatedLayout><Profile /></AuthenticatedLayout></PrivateRoute>} />
        <Route path="notifications/" element={<PrivateRoute><AuthenticatedLayout><NotificationList /></AuthenticatedLayout></PrivateRoute>} />
        <Route path="my-documents/" element={<PrivateRoute><AuthenticatedLayout><MyDocuments /></AuthenticatedLayout></PrivateRoute>} />
        <Route path="timeTracker/" element={<PrivateRoute element={<TimeTracker />} />} />
        <Route path="sedulingPage/" element={<SedulingPage />} />
        <Route path="timeClocking/" element={<TimeClocking />} />
        <Route path="tipMangements/" element={<TipMangements />} />
        <Route path="teamMangement/" element={<TeamMangement />} />
        <Route path="feature/" element={<Feature />} />
        <Route path="contactUs/" element={<ContactUs />} />
        <Route path="Download/" element={<Download />} />
        <Route path="about/" element={<About />} />
        <Route path="blog/" element={<Blog />} />
        <Route path="blogDetails/" element={<BlogDetails />} />
        <Route path="career/" element={<Carrer />} />
        <Route path="review/" element={<Review />} />
        <Route path="buildsFor/" element={<BuildsFor />} />
        <Route path="academy/" element={<Academy />} />
        <Route path="taskMangement/" element={<TaskMangement />} />
        {/* <Route path="taskMangement/" element={<TaskMangement />} /> */}
        <Route path="becomeParter/" element={<BecomeParter />} />
        <Route path="Resource Center/" element={<ResourceCenter />} />
        <Route path="resourceBasic/" element={<ResourceBasic />} />
        <Route path="resourceAdvance/" element={<ResourceAdvance />} />
        <Route path="mediaKit/" element={<MediKit />} />
        <Route path="legal/" element={<Legal />} />
        <Route path="affliated/" element={<Affliated />} />
        <Route path="resturantGuide/" element={<ResturantGuide />} />
        <Route path="resturantData/" element={<ResturantData />} />
        <Route path="resturantPostCast/" element={<ResturantPostCast/>} />
        <Route path="mobileSedule/" element={<MobileSedule/>} />
        <Route path="mangerLookBook/" element={<MangerLookBook/>} />
        <Route path="workForceMangement/" element={<WorkForceMangement/>} />
        <Route path="documentStorage/" element={<DocumentStorage/>} />
        <Route path="pricing/" element={<Pricing/>} />
        <Route path="OperationOverView/" element={<OperationOverView/>} />
        <Route path="buildFor/" element={<BuildFor/>} />
       
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
