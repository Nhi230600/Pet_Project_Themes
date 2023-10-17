import { Avatar, Button, List, Select } from "antd";
import employeeData from "components/EmployeeConstant";
import Nav from "components/Nav";
import trainer from "images/trainer1.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FilterEmployee.css";
const FilterEmployee = () => {
  const navigate = useNavigate();
  const handleClick = (value: number) => {
    navigate(`/timetable/${value}`);
  };
  const [service, isService] = useState<string>("");
  const selectedService = (value: string) => {
    isService(value);
  };
  return (
    <div>
      <Nav />
      <Select
        onSelect={selectedService}
        options={[
          {
            value: "trainer",
            label: "Huấn luyện viên",
          },
          {
            value: "spa",
            label: "Chăm sóc thú cưng",
          },
          {
            value: "care",
            label: "Khám bệnh",
          },
        ]}
      />
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 3,
        }}
        dataSource={employeeData.filter((item) =>
          service !== "" ? item.type === service : item
        )}
        style={{ width: "80%", marginLeft: "5rem" }}
        renderItem={(item) => (
          <List.Item
            key={item.id}
            extra={
              <img
                width={300}
                height={250}
                alt="logo"
                style={{ maxWidth: 200, maxHeight: 150 }}
                src={trainer}
              />
            }
          >
            <List.Item.Meta
              avatar={<Avatar src={item.avatar} />}
              title={<a>{item.name}</a>}
              description={item.position}
            />
            {
              <p>
                Tôi đã có 5 năm kinh nghiệm làm trong lĩnh vực này, đồng thời
                cũng đã gắn bó với PetsLove trong suốt thời gian vừa qua. Phương
                châm: Vui lòng khách đến, vừa lòng pet đi.
              </p>
            }
            <Button onClick={() => handleClick(item.id)}>Chọn</Button>
          </List.Item>
        )}
      />
    </div>
  );
};

export default FilterEmployee;
/*
<List
        itemLayout="vertical"
        size="large"
        pagination={{
        onChange: (page) => {
        console.log(page);
      },
      pageSize: 3,  
    }}
    dataSource={employeeData}
    style={{width: '80%', marginLeft: '5rem'}}
    
    renderItem={(item) => (
      <List.Item
        key={item.id}
        
        extra={
          <img
            width={300}
            height={250}
            alt="logo"
            style={{maxWidth: 200, maxHeight: 150}}
            src={trainer}
          />
        }
      >
        <List.Item.Meta
          avatar={<Avatar src={item.avatar} />}
          title={<a>{item.name}</a>}
          description={item.position}
        />
        {<p>Tôi đã có 5 năm kinh nghiệm làm trong lĩnh vực này, đồng thời cũng đã gắn bó với PetsLove trong suốt thời gian vừa qua. Phương châm: Vui lòng khách đến, vừa lòng pet đi.</p>
        }
        <Button onClick={() => handleClick(item.id)}>Chọn</Button>
      </List.Item>
    )}
    />
*/
