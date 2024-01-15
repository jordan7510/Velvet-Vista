import { createBrowserRouter } from "react-router-dom";
import { Navigate, Route, Routes } from 'react-router-dom';
import App from "../App";
import LandingPage from "../pages/UserPages/LandingPage/LandingPage";
import LoginPage from "../pages/UserPages/LoginPage/LoginPage";
import CreateAccountPage from "../pages/UserPages/CreateAccountPage/CreateAccountPage";
import UserDashboard from "../pages/UserPages/UserDashboard/UserDashboard";
import UserAppointmentsStatus from "../pages/UserPages/UserAppointmentsStatus/UserAppointmentsStatus";
import UserAppointments from "../pages/UserPages/UserAppointments/UserAppointments";
import UserReviews from "../pages/UserPages/UserReviews/UserReviews";
import NotFound from "../pages/NotFound/NotFound";
import AdminOutlet from "../pages/AdminPages/AdminOutlet/AdminOutlet";
import AdminLoginPage from "../pages/AdminPages/AdminLoginPage/AdminLoginPage";
import AdminDashboardPage from "../pages/AdminPages/AdminDashboardPage/AdminDashboardPage";
import AdminHome from "../components/AdminComponents/AdminHome/AdminHome";
import ManageServices from "../components/AdminComponents/ManageServices/ManageServices";
import AdminAppointments from "../components/AdminComponents/AdminManageAppointments/AdminManageAppointments";
import AdminManageCustomers from "../components/AdminComponents/AdminManageCustomers/AdminManageCustomers";
import AdminManageReviews from "../components/AdminComponents/AdminManageReviews/AdminManageReviews";
import AdminManageUsers from "../components/AdminComponents/AdminManageUsers/AdminManageUsers";
import PrivateRoute from "./PrivateRoute"
import Profile from "../pages/UserPages/Profile/Profile";
import AdminPrivateRoute from "./AdminPrivateRoute";
import AdminManageQuotes from "../components/AdminComponents/AdminManageQuotes/AdminManageQuotes";
import ServicesPage from "../pages/UserPages/ServicesPage/ServicesPage";
import ContactUsPage from "../pages/UserPages/ContactUsPage/ContactUsPage";
import AboutUsPage from "../pages/AboutUsPage/AboutUsPage";

const router = createBrowserRouter([
  // ====================Users routes================
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/create-account",
        element: <CreateAccountPage />,
      },
      {
        path: "/services",
        element: <ServicesPage></ServicesPage>,
      },
      {
        path: "/about",
        element: <AboutUsPage></AboutUsPage>,
      },
      {
        path: "/contact-us",
        element: <ContactUsPage></ContactUsPage>,
      },
      // ==========User dashboard routing start============
      {
        path: "/user",
        // element: <UserDashboard></UserDashboard>,
        element: (
          <PrivateRoute>
            <UserDashboard />
          </PrivateRoute>
        ),
        children: [
          {
            path: "/user/book",
            element: <UserAppointments></UserAppointments>,
          },
          {
            path: "/user/appointments",
            element: <UserAppointmentsStatus></UserAppointmentsStatus>,
          },
          {
            path: "/user/reviews",
            element: <UserReviews></UserReviews>,
          },
          {
            path: "/user/profile",
            element: <Profile></Profile>,
          },
          {
            path: "*",
            element: <NotFound></NotFound>,
          },
        ],
      },
      // ==========User dashboard routing end============
      {
        path: "*",
        element: <NotFound></NotFound>,
      },
    ],
  },
  // ====================Admin routes start================
  {
    path: "/admin",
    element: <AdminOutlet></AdminOutlet>,
    children: [
      {
        path: "/admin",
        element: <AdminLoginPage></AdminLoginPage>,
      },
      {
        path: "/admin/dashboard",
        element: (
          <AdminPrivateRoute>
            <AdminDashboardPage />
          </AdminPrivateRoute>),
        children: [
          {
            path: "/admin/dashboard/home",
            element: <AdminHome></AdminHome>,
          },
          {
            path: "/admin/dashboard/manage-service",
            element: <ManageServices></ManageServices>,
          },
          {
            path: "/admin/dashboard/appointments",
            element: <AdminAppointments></AdminAppointments>,
          },
          {
            path: "/admin/dashboard/manage-customers",
            element: <AdminManageCustomers></AdminManageCustomers>,
          },
          {
            path: "/admin/dashboard/manage-reviews",
            element: <AdminManageReviews></AdminManageReviews>,
          },
          {
            path: "/admin/dashboard/manage-users",
            element: <AdminManageUsers></AdminManageUsers>,
          },
          {
            path: "/admin/dashboard/manage-quotes",
            element: <AdminManageQuotes></AdminManageQuotes>,
          },
        ],
      },
      {
        path: "*",
        element: <NotFound></NotFound>,
      },
    ],
  },
  // ====================Admin routes end================
]);


export default router