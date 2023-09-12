import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  AddEmp,
  BookCare,
  BookSpa,
  BookTrainer,
  Dashboard,
  DashboardEmp,
  DetailEmp,
  PetProfilePage,
} from "../screens";
import Contact from "../screens/Contact/Contact";
import MyPet from "../screens/Pet/MyPet/MyPet";
import ProfileUser from "../screens/ProfileUser/ProfileUser";
import ViewList from "../screens/Employee/ListEmployee/ViewList";
import EditEmployee from "../screens/Employee/EditEmployee/EditEmp";
import Homepage from "../screens/Homepage/Homepage";
// import ViewList from "../screens/Admin/EmployeeManage/ListEmployee/ViewList";

const Router = createBrowserRouter([
  {
    path: "/homepage",
    element: <Homepage />,
  },

  {
    path: "/petprofile",
    element: <PetProfilePage />,
  },
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
