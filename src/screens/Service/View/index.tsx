import AdminInterface from "../../../components/Admin/AdminInterface"; // Import AdminInterface
import Content from "./content";

const App = () => {
  return (
    <div>
      <AdminInterface content={<Content />} />
    </div>
  );
};

export default App;
