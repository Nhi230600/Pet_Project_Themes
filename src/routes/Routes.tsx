import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  AddEmp,
  BookCare,
  BookSpa,
  BookTrainer,
  Dashboard,
  DashboardEmp,
  DetailEmp,
} from "../screens";
import Contact from "../screens/Contact/Contact";
import EmployeeListPage from "../screens/Employee/ListEmployee";

import AddEmployeePage from "../screens/Employee/Add";

import EmployeeDetailPage from "../screens/Employee/Detail";

import ProfileUser from "../screens/ProfileUser/ProfileUser";

import EmployeeEditPage from "../screens/Employee/Edit";

import DashboardPage from "../screens/DashboardPage/DashboardPage";

import Dashboard from "../screens/DashBoard";

import ViewServicePage from "../screens/Service/View";

import AddServicePage from "../screens/Service/Add";

import EditServicePage from "../screens/Service/Edit";

import AddShiftPage from "../screens/Employee/Add-Shift";

import ViewAppointmentAdmin from "../screens/Admin-menu/appointment/View";

import Homepage from "../screens/Homepage/Homepage";
import MyPet from "../screens/Pet/MyPet/MyPet";
import EmployeeAppointmentListPage from "../screens/EmployeeView/appointmentList";
import EmployeeeCustomerProfile from "../screens/EmployeeView/CustomerProfile";
import CreateTreatmentIn from "../screens/EmployeeView/CreateTreatmentIn";


const Router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/mypet",
    element: <MyPet />,
  },
  {
    path: "/mypet",
    element: <MyPet />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/dashboardemp",
    element: <DashboardEmp />,
  },
  {
    path: "/bookspa",

    element: <BookSpa />,
  },

  {
    path: "/contact",

    element: <Contact />,
  },

  {
    path: "/profile",

    element: <ProfileUser />,
  },

  {
    path: "/employee",

    element: <EmployeeListPage />,
  },

  {
    path: "/employee/add",

    element: <AddEmployeePage />,
  },

  {
    path: "/employee/detail",

    element: <EmployeeDetailPage />,
  },

  {
    path: "/employee/edit",

    element: <EmployeeEditPage />,
  },

  {
    path: "/admin/service",

    element: <ViewServicePage />,
  },

  {
    path: "/admin/service/add",

    element: <AddServicePage />,
  },

  {
    path: "/admin/service/edit",

    element: <EditServicePage />,
  },

  {
    path: "/employee/add-shift",

    element: <AddShiftPage />,
  },

  {
    path: "/admin/appointment",

    element: <ViewAppointmentAdmin />,
  },
  {
    path: "/employee/add",
    element: <AddEmp />,
  },
  {
    path: "/employee/detail",
    element: <DetailEmp />,
  },
  {
    path: "/dashboardpage",

    element: <DashboardPage />,
  },

  {
    path: "/employee/appointment",
    element: <EmployeeAppointmentListPage />,
  },
  {
    path: "/employee/customer",
    element: <EmployeeeCustomerProfile />,
  },
  {
    path: "/employee/createtreatmentin",
    element: <CreateTreatmentIn />,


  {
    path: "/dashboard",

    element: <Dashboard />,

  },
]);

export default function AppRouter() {
  return <RouterProvider router={Router} />;
}
