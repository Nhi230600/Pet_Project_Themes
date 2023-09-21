import React from "react";
import AdminInterface from "../../../components/Admin/AdminInterface"; // Import AdminInterface
import Content from "./Content"

const App = () => {
  return (
    <div>
      <AdminInterface content={<Content />} />
    </div>
  );
};

export default App;
