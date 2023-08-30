import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BookSpa from "../screens/Booking/BookSpa/BookSpa";
import BookTrainer from "../screens/Booking/BookTrainer/BookTrainer";
import { BookCare } from "../screens";
import MyPet from "../screens/Pet/MyPet/MyPet";

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
]);

export default function AppRouter() {
  return <RouterProvider router={Router} />;
}
