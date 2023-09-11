import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BookSpa from "../screens/Booking/BookSpa/BookSpa";
import { BookCare, BookTrainer } from "../screens";
import MyPet from "../screens/Pet/MyPet/MyPet";
import Homepage from "../screens/Homepage/Homepage";
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
    element: <BookSpa />,
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
]);

export default function AppRouter() {
  return <RouterProvider router={Router} />;
}
