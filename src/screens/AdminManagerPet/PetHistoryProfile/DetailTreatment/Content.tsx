import AdminContent from "../../../../components/Admin/AdminContent"; // Import AdminInterface
import Page from "./Page";

const App = () => {
  return (
    <div>
      {/* Sử dụng AdminInterface và truyền ContentDashboard vào prop content */}
      <AdminContent content={<Page />} />
    </div>
  );
};

export default App;
