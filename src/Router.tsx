import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./screens";
import _404 from "./components/_404";

const router = createBrowserRouter([
  {
    path: "/",
    element: "abc",
    errorElement: <_404 />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
