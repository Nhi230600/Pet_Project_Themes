import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Header } from "../components";
import { BookCare, BookSpa, BookTrainer } from "../screens";
import Contact from "../screens/Contact/Contact";
import MyPet from "../screens/Pet/MyPet/MyPet";
import ProfileUser from "../screens/ProfileUser/ProfileUser";
import SideBar from "../components/SideBar";

const Router = createBrowserRouter([
  {
    path: "/bookspa",
    element: <BookSpa />,
  },
  {
    path: "/sider",
    element: <SideBar />,
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
]);

export default function AppRouter() {
  return <RouterProvider router={Router} />;
}
