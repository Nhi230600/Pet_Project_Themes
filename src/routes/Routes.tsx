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

]);

export default function AppRouter() {
  return <RouterProvider router={Router} />;
}
