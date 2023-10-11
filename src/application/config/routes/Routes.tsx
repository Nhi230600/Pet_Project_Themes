import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  AddEmployeePage,
  AddServicePage,
  AddShiftPage,
  Contact,
  Content,
  CreateTreatmentIn,
  CustomerTreatment,
  Dashboard,
  EditServicePage,
  EmployeeAppointmentListPage,
  EmployeeDetailPage,
  EmployeeeCustomerProfile,
  EmployeeEditPage,
  EmployeeListPage,
  Homepage,
  MyPet,
  PetCheckupPage,
  Sales,
  UserList,
  ViewServicePage,
  ViewAppointmentAdmin,
  ProfileUser,
} from "screens";
import Booking from "screens/Booking/Booking";
import TimeTable from "screens/Booking/Component/TimeTable";

const Router = createBrowserRouter([
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
