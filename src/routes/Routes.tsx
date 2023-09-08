import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AddEmp, BookCare, BookSpa, BookTrainer, Dashboard } from "../screens";
import Contact from "../screens/Contact/Contact";
import MyPet from "../screens/Pet/MyPet/MyPet";
import ProfileUser from "../screens/ProfileUser/ProfileUser";
import ViewList from "../screens/ListEmployee/ViewList";
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
]);

export default function AppRouter() {
  return <RouterProvider router={Router} />;
}
