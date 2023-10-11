import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Homepage,
  MyPet,
  Dashboard,
  BookSpa,
  Contact,
  ProfileUser,
  EmployeeListPage,
  AddEmployeePage,
  EmployeeDetailPage,
  EmployeeEditPage,
  ViewServicePage,
  AddServicePage,
  EditServicePage,
  AddShiftPage,
  ViewAppointmentAdmin,
  EmployeeAppointmentListPage,
  CustomerTreatment,
  PetCheckupPage,
  EmployeeeCustomerProfile,
  CreateTreatmentIn,
  Content,
  Sales,
  UserList
} from "screens";
import TimeTable from "screens/Booking/Component/TimeTable";
import DateTimePicker from "screens/Booking/Component/DateTimePicker";


const Router = createBrowserRouter([
  
  
  {
    path: "datetimepicker/:id",

    element: <DateTimePicker />,
  },
  {
    path: "timetable/:id",

    element: <TimeTable />,
  },
  {
    path: "content",

    element: <Content />,
  },
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
        path: "customer",
    
        element: <UserList />,
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
