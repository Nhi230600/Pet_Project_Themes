import React from "react";
import AdminContent from "../../../components/Admin/AdminContent"; // Import AdminInterface
import ListEmployee from "./Page";

const App = () => {
  return (
    <div>
      {/* Sử dụng AdminInterface và truyền ContentDashboard vào prop content */}
      <AdminContent content={<ListEmployee />} />
    </div>
  );
};

export default App;
