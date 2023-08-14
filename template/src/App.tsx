import { Button } from 'antd';
import { Demo } from './components/Comments';

const App = () => {
  return (
    <div className="p-36">
      <Button className=" bg-red-200">Theme1</Button>
      <Button className=" bg-yellow-200">Theme2</Button>
      <Button className=" bg-green-300">Theme2</Button>
      <Demo />
    </div>
  );
};

export default App;
