import React from "react";
import AdminContent from "../../../components/Admin/AdminContent"; // Import AdminInterface
import ListService from "./page";

const App = () => {
  return (
    <div>
      <AdminContent content={<ListService />} />
    </div>
  );
};

export default App;
