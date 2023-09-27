import AdminContent from "../../../components/Admin/AdminContent"; // Import AdminInterface
import ListEmployee from "./Page";

const App = () => {
  return (
    <div>
      <AdminContent content={<ListEmployee />} />
    </div>
  );
};

export default App;
