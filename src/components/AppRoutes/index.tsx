import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AddEmp, ViewList } from "../../screens";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/employee/list" element={<ViewList />}></Route>
      <Route path="/employee/add" element={<AddEmp />}></Route>
    </Routes>
  );
}
export default AppRoutes;
