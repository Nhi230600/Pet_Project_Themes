import { Avatar } from "antd";
import "./ManageEmp.css";
import avatar from "../../../images/avatar-user.jpeg";
const ManageEmp = () => {
  return (
    <div className="container-manageemp">
      <div className="container-manageemp-employee">
        <div className="container-manageemp-employee-infor">
          <div>
            <Avatar size={64} src={avatar} />
          </div>
          <div>
            <span>John Smith</span>
          </div>
          <div>
            <span>TRAINER</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageEmp;
