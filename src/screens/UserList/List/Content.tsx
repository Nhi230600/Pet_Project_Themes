import AdminContent from "../../../components/Admin/AdminContent"; // Import AdminInterface
import Page from "./Page";

const App = () => {
  return (
    <div>
      <AdminContent content={<Page />} />
    </div>
  );
};

export default App;
