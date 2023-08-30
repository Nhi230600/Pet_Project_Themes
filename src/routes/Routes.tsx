import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BookSpa from "../screens/Booking/BookSpa/BookSpa";
import BookTrainer from "../screens/Booking/BookTrainer/BookTrainer";

const Router = createBrowserRouter([
  {
    path: "/bookspa",
    element: <BookSpa />,
  },
  {
    path: "/booktrainer",
    element: <BookTrainer />,
  },
]);

export default function AppRouter() {
  return <RouterProvider router={Router} />;
}
