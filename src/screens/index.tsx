import React from "react";
const LazyBookSpa = React.lazy(() => import("./Booking/Booking"));
const LazyLoginPage = React.lazy(() => import("./LoginPage"));
const LazyRegisterPage = React.lazy(() => import("./RegisterPage"));
const LazyDashboard = React.lazy(
  () => import("./Admin/EmployeeManage/Dashboard"),
);
const LazyEditEmp = React.lazy(() => import("./Employee/EditEmployee/EditEmp"));
const LazyHomepage = React.lazy(() => import("./Homepage"));
const LazyMyPet = React.lazy(() => import("./Pet/MyPet"));
const LazyContact = React.lazy(() => import("./Homepage/Contact"));
const LazyProfileUser = React.lazy(() => import("./ProfileUser"));
const LazyEmployeeListPage = React.lazy(
  () => import("./Employee/ListEmployee"),
);
const LazyAddEmployeePage = React.lazy(() => import("./Employee/Add"));
const LazyEmployeeDetailPage = React.lazy(() => import("./Employee/Detail"));
const LazyEmployeeEditPage = React.lazy(() => import("./Employee/Edit"));
const LazyViewServicePage = React.lazy(() => import("./Service/View"));
const LazyAddServicePage = React.lazy(() => import("./Service/Add"));
const LazyEditServicePage = React.lazy(() => import("./Service/Edit"));
const LazyAddShiftPage = React.lazy(() => import("./Employee/Add-Shift"));
const LazyViewAppointmentAdmin = React.lazy(
  () => import("./Admin-menu/appointment/View"),
);
const LazyEmployeeAppointmentListPage = React.lazy(
  () => import("./EmployeeView/appointmentList"),
);
const LazyCustomerTreatment = React.lazy(
  () => import("./EmployeeView/customerTreatment"),
);
const LazyPetCheckupPage = React.lazy(() => import("./EmployeeView/reBook"));
const LazyEmployeeeCustomerProfile = React.lazy(
  () => import("./EmployeeView/CustomerProfile"),
);
const LazyCreateTreatmentIn = React.lazy(
  () => import("./EmployeeView/CreateTreatmentIn"),
);
const LazyContent = React.lazy(() => import("./Homepage/Content/1"));
const LazySales = React.lazy(() => import("./Homepage/Sales"));
const LazyUserList = React.lazy(() => import("./UserList/List"));
const LazyAddCustomer = React.lazy(() => import("./UserList/List/AddCustomer"));
const LazyDetailCustomer = React.lazy(
  () => import("./UserList/List/DetailCustomer"),
);
const LazyCustomerPick = React.lazy(
  () => import("./Booking/Component/ListEmployee"),
);
const LazyCutomerViewAppointment = React.lazy(
  () => import("./CustomerViewAppointment"),
);
const LazyTimetable = React.lazy(() => import("./Booking/Component/TimeTable"));
const LazyTreatmentPet = React.lazy(() => import("./PetHistoryProfile"));
const LazyDetailTreatment = React.lazy(
  () => import("./PetHistoryProfile/DetailTreatment"),
);
export {
  LazyAddEmployeePage as AddEmployeePage,
  LazyAddServicePage as AddServicePage,
  LazyAddShiftPage as AddShiftPage,
  LazyBookSpa as BookSpa,
  LazyContact as Contact,
  LazyContent as Content,
  LazyCreateTreatmentIn as CreateTreatmentIn,
  LazyCustomerPick as CustomerPick,
  LazyCustomerTreatment as CustomerTreatment,
  LazyDashboard as Dashboard,
  LazyEditEmp as EditEmp,
  LazyEditServicePage as EditServicePage,
  LazyEmployeeAppointmentListPage as EmployeeAppointmentListPage,
  LazyEmployeeDetailPage as EmployeeDetailPage,
  LazyEmployeeeCustomerProfile as EmployeeeCustomerProfile,
  LazyEmployeeEditPage as EmployeeEditPage,
  LazyEmployeeListPage as EmployeeListPage,
  LazyHomepage as Homepage,
  LazyLoginPage as LoginPage,
  LazyMyPet as MyPet,
  LazyPetCheckupPage as PetCheckupPage,
  LazyProfileUser as ProfileUser,
  LazyRegisterPage as RegisterPage,
  LazySales as Sales,
  LazyTimetable as TimeTable,
  LazyCutomerViewAppointment as CustomerViewAppointment,
  LazyUserList as UserList,
  LazyViewAppointmentAdmin as ViewAppointmentAdmin,
  LazyViewServicePage as ViewServicePage,
  LazyTreatmentPet as TreatmentPet,
  LazyDetailTreatment as DetailTreatment,
  LazyAddCustomer as AddCustomer,
  LazyDetailCustomer as DetailCustomer,
};
