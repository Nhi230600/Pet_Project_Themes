import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { BookSpa, BookTrainer, BookCare, Login, Register } from "../screens";


 

const Router = createBrowserRouter([

  {

    path: "/",
    
    element: <BookSpa />,
    
  },  

  {

    path: "/login",

    element: <Login />,

  },

  {

    path: "/register",

    element: <Register />,

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
]);

export default function AppRouter() {

  return <RouterProvider router={Router} />;

}