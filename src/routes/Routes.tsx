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
import DashboardPage from "../screens/DashBoard";
import ViewServicePage from "../screens/Service/View";
import AddServicePage from "../screens/Service/Add";
import EditServicePage from "../screens/Service/Edit";
import AddShiftPage from "../screens/Employee/Add-Shift";
import ViewAppointmentAdmin from "../screens/Admin-menu/appointment/View";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/service",

import MyPet from "../screens/Pet/MyPet/MyPet";
import ProfileUser from "../screens/ProfileUser/ProfileUser";
import ViewList from "../screens/Employee/ListEmployee/ViewList";
import EditEmployee from "../screens/Employee/EditEmployee/EditEmp";
// import ViewList from "../screens/Admin/EmployeeManage/ListEmployee/ViewList";

const Router = createBrowserRouter([
  {
    path: "/bookspa",
    element: <BookSpa />,
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
    path: "/booktrainer",
    element: <BookTrainer />,
  },
  {
    path: "/bookcare",
    element: <BookCare />,
  },
  {
    path: "/mypet",
    element: <MyPet />,
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
    path: "/dashboard",
    element: <DashboardPage />,
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
    path: "/employee/list",
    element: <ViewList />,
  },
  {
    path: "/employee/add",
    element: <AddEmp />,
  },
  {
    path: "/employee/edit",
    element: <EditEmployee />,
  },
  {
    path: "/employee/detail",
    element: <DetailEmp />,

  },
]);

export default function AppRouter() {
  return <RouterProvider router={Router} />;
}
