import { Loading } from "components";
import { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
  AddEmployeePage,
  AddServicePage,
  AddShiftPage,
  Contact,
  Content,
  CreateTreatmentIn,
  CustomerPick,
  CustomerTreatment,
  CustomerViewAppointment,
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
  ProfileUser,
  TimeTable,
  UserList,
  ViewAppointmentAdmin,
  ViewServicePage,
  TreatmentPet,
  DetailTreatment,
} from "screens";

import AddMyPet from "screens/Pet/MyPet/AddMyPet";
import PetProfilePage from "screens/Pet/MyPet/PetProfilePage";

const Router = createBrowserRouter([
  {
    path: "appointment",
    element: (
      <Suspense fallback={<Loading />}>
        <CustomerViewAppointment />
      </Suspense>
    ),
  },
  {
    path: "booking",
    element: (
      <Suspense fallback={<Loading />}>
        <CustomerPick />
      </Suspense>
    ),
  },
  {
    path: "timetable/:id",
    element: (
      <Suspense fallback={<Loading />}>
        <TimeTable />
      </Suspense>
    ),
  },
  {
    path: "content",
    element: (
      <Suspense fallback={<Loading />}>
        <Content />
      </Suspense>
    ),
  },
  {
    path: "",
    element: (
      <Suspense fallback={<Loading />}>
        <Homepage />
      </Suspense>
    ),
  },
  {
    path: "mypet",
    children: [
      {
        path: "",
        element: (
          <Suspense fallback={<Loading />}>
            <MyPet />
          </Suspense>
        ),
      },
      {
        path: "add",
        element: (
          <Suspense fallback={<Loading />}>
            <AddMyPet />
          </Suspense>
        ),
      },
      {
        path: ":petId",
        children: [
          {
            path: "",
            element: (
              <Suspense fallback={<Loading />}>
                <PetProfilePage />
              </Suspense>
            ),
          },
          {
            path: "treatment",
            children: [
              {
                path: "",
                element: (
                  <Suspense fallback={<Loading />}>
                    <TreatmentPet />
                  </Suspense>
                ),
              },
              {
                path: ":id",
                element: (
                  <Suspense fallback={<Loading />}>
                    <DetailTreatment />
                  </Suspense>
                ),
              },
            ],
          },
        ],
      },
    ],
  },

  {
    path: "admin",
    children: [
      {
        path: "",
        element: (
          <Suspense fallback={<Loading />}>
            <Dashboard />
          </Suspense>
        ),
      },
      {
        path: "customer",
        element: (
          <Suspense fallback={<Loading />}>
            <UserList />
          </Suspense>
        ),
      },
      {
        path: "service",
        children: [
          {
            path: "",
            element: (
              <Suspense fallback={<Loading />}>
                <ViewServicePage />
              </Suspense>
            ),
          },
          {
            path: "add",
            element: (
              <Suspense fallback={<Loading />}>
                <AddServicePage />
              </Suspense>
            ),
          },
          {
            path: "edit",
            element: (
              <Suspense fallback={<Loading />}>
                <EditServicePage />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: "appointment",
        element: (
          <Suspense fallback={<Loading />}>
            <ViewAppointmentAdmin />
          </Suspense>
        ),
      },
      {
        path: "employee",
        children: [
          {
            path: "",
            element: (
              <Suspense fallback={<Loading />}>
                <EmployeeListPage />
              </Suspense>
            ),
          },
          {
            path: "add",
            element: (
              <Suspense fallback={<Loading />}>
                <AddEmployeePage />
              </Suspense>
            ),
          },
          {
            path: ":id",
            children: [
              {
                path: "",
                element: (
                  <Suspense fallback={<Loading />}>
                    <EmployeeDetailPage />
                  </Suspense>
                ),
              },
              {
                path: "edit",
                element: (
                  <Suspense fallback={<Loading />}>
                    <EmployeeEditPage />
                  </Suspense>
                ),
              },
              {
                path: "add-shift",
                element: (
                  <Suspense fallback={<Loading />}>
                    <AddShiftPage />
                  </Suspense>
                ),
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: "contact",
    element: (
      <Suspense fallback={<Loading />}>
        <Contact />
      </Suspense>
    ),
  },
  {
    path: "profile",
    element: (
      <Suspense fallback={<Loading />}>
        <ProfileUser />
      </Suspense>
    ),
  },
  {
    path: "employee",
    children: [
      {
        path: "",
        element: (
          <Suspense fallback={<Loading />}>
            <EmployeeAppointmentListPage />
          </Suspense>
        ),
      },
      {
        path: ":idCustomer",
        children: [
          {
            path: "",
            element: (
              <Suspense fallback={<Loading />}>
                <EmployeeeCustomerProfile />
              </Suspense>
            ),
          },
          {
            path: ":idTreatment",
            children: [
              {
                path: "",
                element: (
                  <Suspense fallback={<Loading />}>
                    <CustomerTreatment />
                  </Suspense>
                ),
              },
              {
                path: "createtreatmentin",
                element: (
                  <Suspense fallback={<Loading />}>
                    <CreateTreatmentIn />
                  </Suspense>
                ),
              },
            ],
          },
          {
            path: "rebook",
            element: (
              <Suspense fallback={<Loading />}>
                <PetCheckupPage />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={Router} />;
}
