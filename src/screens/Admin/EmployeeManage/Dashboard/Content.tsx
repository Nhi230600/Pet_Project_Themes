import AdminContent from "../../../../components/Admin/AdminContent"; // Import AdminInterface
import DashboardPage from "../../../DashBoard";

const App = () => {
  return (
    <div>
      {/* Sử dụng AdminInterface và truyền ContentDashboard vào prop content */}
      <AdminContent content={<DashboardPage />} />
    </div>
  );
};

export default App;
