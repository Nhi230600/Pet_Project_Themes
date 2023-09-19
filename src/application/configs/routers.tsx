import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BookSpa } from "screens";
import Contact from "screens/Contact/Contact";
import EmployeeListPage from "screens/Employee/ListEmployee";

import AddEmployeePage from "screens/Employee/Add";

import EmployeeDetailPage from "screens/Employee/Detail/Page";

import ProfileUser from "screens/ProfileUser/ProfileUser";

import EmployeeEditPage from "screens/Employee/Edit";

import Dashboard from "screens/Admin/EmployeeManage/Dashboard";

import ViewServicePage from "screens/Service/View";

import AddServicePage from "screens/Service/Add";

import EditServicePage from "screens/Service/Edit";

import AddShiftPage from "screens/Employee/Add-Shift";

import ViewAppointmentAdmin from "screens/Admin-menu/appointment/View";

import Homepage from "screens/Homepage/Homepage";
import MyPet from "screens/Pet/MyPet/MyPet";
import EmployeeAppointmentListPage from "screens/EmployeeView/AppointmentList/Page";

import CustomerTreatment from "screens/EmployeeView/customerTreatment";
import PetCheckupPage from "screens/EmployeeView/reBook";
import EmployeeeCustomerProfile from "screens/EmployeeView/CustomerProfile";
import CreateTreatmentIn from "screens/EmployeeView/CreateTreatmentIn";

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
    path: "/bookspa",

    element: <BookSpa />,
  },

  {
    path: "/booktrainer",

    element: <BookSpa typeof_book="trainer" />,
  },

  {
    path: "/bookcare",

    element: <BookSpa typeof_book="care" />,
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
    path: "/employee/appointment",
    element: <EmployeeAppointmentListPage />,
  },
  {
    path: "/employee/customer/treatment",
    element: <CustomerTreatment />,
  },
  {
    path: "employee/customer/rebook",
    element: <PetCheckupPage />,
  },
  {
    path: "/employee/customer",
    element: <EmployeeeCustomerProfile />,
  },
  {
    path: "/employee/createtreatmentin",
    element: <CreateTreatmentIn />,
  },
]);

export default function AppRouter() {
  return <RouterProvider router={Router} />;
}
