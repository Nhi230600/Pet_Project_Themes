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
  ListPetCustomer,
  AddPetCustomer,
  DetailPetCustomer,
  OrderAppointment,
  AdminMangerTreatmentList,
  AdminMangerTreatmentDetail,
} from "screens";

import AddMyPet from "screens/Pet/MyPet/AddMyPet";
import PetProfilePage from "screens/Pet/MyPet/PetProfilePage";
import AddCustomer from "screens/UserList/List/AddCustomer";
import DetailCustomer from "screens/UserList/List/DetailCustomer";

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
        children: [
          {
            path: "",
            element: (
              <Suspense fallback={<Loading />}>
                <UserList />
              </Suspense>
            ),
          },
          {
            path: "add",
            element: (
              <Suspense fallback={<Loading />}>
                <AddCustomer />
              </Suspense>
            ),
          },
          {
            path: ":CustomerId",
            children: [
              {
                path: "",
                element: (
                  <Suspense fallback={<Loading />}>
                    <DetailCustomer />
                  </Suspense>
                ),
              },
              {
                path: "appointment",
                element: (
                  <Suspense fallback={<Loading />}>
                    <OrderAppointment />
                  </Suspense>
                ),
              },

              {
                path: "pet",
                children: [
                  {
                    path: "",
                    element: (
                      <Suspense fallback={<Loading />}>
                        <ListPetCustomer />
                      </Suspense>
                    ),
                  },
                  {
                    path: "add",
                    element: (
                      <Suspense fallback={<Loading />}>
                        <AddPetCustomer />
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
                            <DetailPetCustomer />
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
                                <AdminMangerTreatmentList />
                              </Suspense>
                            ),
                          },
                          {
                            path: ":id",
                            element: (
                              <Suspense fallback={<Loading />}>
                                <AdminMangerTreatmentDetail />
                              </Suspense>
                            ),
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
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
            path: ":id",
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
        path: ":idAppointment",
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
            path: "createtreatmentin",
            element: (
              <Suspense fallback={<Loading />}>
                <CreateTreatmentIn />
              </Suspense>
            ),
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
