import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BookSpa from "../screens/Booking/BookSpa/BookSpa";
import BookTrainer from "../screens/Booking/BookTrainer/BookTrainer";
import { BookCare } from "../screens";
import MyPet from "../screens/Pet/MyPet/MyPet";
import Homepage from "../screens/Homepage/Homepage";
import ProfileUser from "../screens/ProfileUser/ProfileUser";

const Router = createBrowserRouter([
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
    path: "/homepage",
    element: <Homepage />,
  },
  {
    path: "/profile",
    element: <ProfileUser />,
  },
]);

export default function AppRouter() {
  return <RouterProvider router={Router} />;
}
