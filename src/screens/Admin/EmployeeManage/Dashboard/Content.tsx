import AdminContent from "../../../../components/Admin/AdminContent";
import DashboardPage from "../../../DashBoard";

const App = () => {
  return (
    <div>
      <AdminContent content={<DashboardPage />} />
    </div>
  );
};

export default App;
