import React, { lazy, Suspense } from "react";
const LazyBookSpa = React.lazy(() => import("./Booking/Booking"));
const LazyLoginPage = React.lazy(() => import("./LoginPage/LoginPage"));
const LazyRegisterPage = React.lazy(
  () => import("./RegisterPage/RegisterPage")
);
const LazyDashboard = React.lazy(
  () => import("./Admin/EmployeeManage/Dashboard")
);
const LazyEditEmp = React.lazy(() => import("./Employee/EditEmployee/EditEmp"));
const LazyHomepage = React.lazy(() => import("./Homepage"));
const LazyMyPet = React.lazy(() => import("./Pet/MyPet/MyPet"));
const LazyContact = React.lazy(() => import("./Homepage/Contact"));
const LazyProfileUser = React.lazy(() => import("./ProfileUser/ProfileUser"));
const LazyEmployeeListPage = React.lazy(
  () => import("./Employee/ListEmployee")
);
const LazyAddEmployeePage = React.lazy(() => import("./Employee/Add"));
const LazyEmployeeDetailPage = React.lazy(() => import("./Employee/Detail"));
const LazyEmployeeEditPage = React.lazy(() => import("./Employee/Edit"));
const LazyViewServicePage = React.lazy(() => import("./Service/View"));
const LazyAddServicePage = React.lazy(() => import("./Service/Add"));
const LazyEditServicePage = React.lazy(() => import("./Service/Edit"));
const LazyAddShiftPage = React.lazy(() => import("./Employee/Add-Shift"));
const LazyViewAppointmentAdmin = React.lazy(
  () => import("./Admin-menu/appointment/View")
);
const LazyEmployeeAppointmentListPage = React.lazy(
  () => import("./EmployeeView/appointmentList")
);
const LazyCustomerTreatment = React.lazy(
  () => import("./EmployeeView/customerTreatment")
);
const LazyPetCheckupPage = React.lazy(() => import("./EmployeeView/reBook"));
const LazyEmployeeeCustomerProfile = React.lazy(
  () => import("./EmployeeView/CustomerProfile")
);
const LazyCreateTreatmentIn = React.lazy(
  () => import("./EmployeeView/CreateTreatmentIn")
);
const LazyContent = React.lazy(() => import("./Homepage/Content/1"));
const LazySales = React.lazy(() => import("./Homepage/Sales"));
const LazyUserList = React.lazy(() => import("./UserList/List"));
const LazyCustomerPick = React.lazy(
  () => import("./Booking/Component/ListEmployee")
);
const LazyTimetable = React.lazy(() => import("./Booking/Component/TimeTable"));

export {
  LazyBookSpa as BookSpa,
  LazyLoginPage as LoginPage,
  LazyRegisterPage as RegisterPage,
  LazyDashboard as Dashboard,
  LazyEditEmp as EditEmp,
  LazyHomepage as Homepage,
  LazyMyPet as MyPet,
  LazyContact as Contact,
  LazyProfileUser as ProfileUser,
  LazyEmployeeListPage as EmployeeListPage,
  LazyAddEmployeePage as AddEmployeePage,
  LazyEmployeeDetailPage as EmployeeDetailPage,
  LazyEmployeeEditPage as EmployeeEditPage,
  LazyViewServicePage as ViewServicePage,
  LazyAddServicePage as AddServicePage,
  LazyEditServicePage as EditServicePage,
  LazyAddShiftPage as AddShiftPage,
  LazyViewAppointmentAdmin as ViewAppointmentAdmin,
  LazyEmployeeAppointmentListPage as EmployeeAppointmentListPage,
  LazyCustomerTreatment as CustomerTreatment,
  LazyPetCheckupPage as PetCheckupPage,
  LazyEmployeeeCustomerProfile as EmployeeeCustomerProfile,
  LazyCreateTreatmentIn as CreateTreatmentIn,
  LazyContent as Content,
  LazySales as Sales,
  LazyUserList as UserList,
  LazyCustomerPick as CustomerPick,
  LazyTimetable as TimeTable,
};
