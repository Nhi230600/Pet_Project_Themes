import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Homepage from "../../../screens/Homepage/Homepage";

import MyPet from "../../../screens/Pet/MyPet/MyPet";

import Dashboard from "../../../screens/Admin/EmployeeManage/Dashboard";

import BookSpa from "../../../screens/Booking/BookSpa/BookSpa";

import Contact from "../../../screens/Contact";

import ProfileUser from "../../../screens/ProfileUser/ProfileUser";

import EmployeeListPage from "../../../screens/Employee/ListEmployee";

import AddEmployeePage from "../../../screens/Employee/Add";

import EmployeeDetailPage from "../../../screens/Employee/Detail";

import EmployeeEditPage from "../../../screens/Employee/Edit";

import ViewServicePage from "../../../screens/Service/View";

import AddServicePage from "../../../screens/Service/Add";

import EditServicePage from "../../../screens/Service/Edit";

import AddShiftPage from "../../../screens/Employee/Add-Shift";

import ViewAppointmentAdmin from "../../../screens/Admin-menu/appointment/View";

import EmployeeAppointmentListPage from "../../../screens/EmployeeView/appointmentList";

import CustomerTreatment from "../../../screens/EmployeeView/customerTreatment";

import PetCheckupPage from "../../../screens/EmployeeView/reBook";

import EmployeeeCustomerProfile from "../../../screens/EmployeeView/CustomerProfile";

import CreateTreatmentIn from "../../../screens/EmployeeView/CreateTreatmentIn";

const Router = createBrowserRouter([
  {
    path: "",

    element: <Homepage />,
  },

  {
    path: "mypet",

    element: <MyPet />,
  },

  {
    path: "admin",

    children: [
      {
        path: "",

        element: <Dashboard />,
      },

      {
        path: "service",

        children: [
          {
            path: "",

            element: <ViewServicePage />,
          },

          {
            path: "add",

            element: <AddServicePage />,
          },

          {
            path: "edit",

            element: <EditServicePage />,
          },
        ],
      },

      {
        path: "appointment",

        element: <ViewAppointmentAdmin />,
      },

      {
        path: "employee",

        children: [
          {
            path: "",

            element: <EmployeeListPage />,
          },

          {
            path: "add",

            element: <AddEmployeePage />,
          },

          {
            path: ":id",

            children: [
              {
                path: "",

                element: <EmployeeDetailPage />,
              },

              {
                path: "edit",

                element: <EmployeeEditPage />,
              },

              {
                path: "add-shift",

                element: <AddShiftPage />,
              },
            ],
          },
        ],
      },
    ],
  },

  {
    path: "bookspa",

    element: <BookSpa />,
  },

  {
    path: "contact",

    element: <Contact />,
  },

  {
    path: "profile",

    element: <ProfileUser />,
  },

  {
    path: "employee",

    children: [
      {
        path: "",

        element: <EmployeeAppointmentListPage />,
      },

      {
        path: ":idCustomer",

        children: [
          {
            path: "",

            element: <EmployeeeCustomerProfile />,
          },

          {
            path: ":idTreatment",

            children: [
              {
                path: "",

                element: <CustomerTreatment />,
              },

              {
                path: "createtreatmentin",

                element: <CreateTreatmentIn />,
              },
            ],
          },

          {
            path: "rebook",

            element: <PetCheckupPage />,
          },
        ],
      },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={Router} />;
}
