import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BookSpa from "../screens/Booking/BookSpa/BookSpa";
import { BookCare, BookTrainer } from "../screens";
import MyPet from "../screens/Pet/MyPet/MyPet";
import Homepage from "../screens/Homepage/Homepage";
import Contact from "../screens/Contact/Contact";

import ProfileUser from "../screens/ProfileUser/ProfileUser";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/bookspa",
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
]);

export default function AppRouter() {
  return <RouterProvider router={Router} />;
}
