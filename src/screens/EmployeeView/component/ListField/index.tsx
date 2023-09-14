import React from 'react';
import { List, Avatar, Button } from 'antd';
import { CloseOutlined, EyeOutlined } from '@ant-design/icons';

export interface Appointment {
  treatment: string;
  customerName: string;
  time: string;
  status: string;
  customerAvatar: string;
}

interface ListFieldProps {
  appointments: Appointment[];
  onViewDetail: (appointment: Appointment) => void;
  onCancel: (appointment: Appointment) => void;
}

const ListField: React.FC<ListFieldProps> = ({ appointments, onViewDetail, onCancel }) => {
  return (
    <List
      dataSource={appointments}
      renderItem={(item: Appointment) => (
        <List.Item
          actions={[
            <Button icon={<EyeOutlined />} onClick={() => onViewDetail(item)} />,
            <Button icon={<CloseOutlined />} onClick={() => onCancel(item)} />,
          ]}
        >
          <List.Item.Meta
            avatar={<Avatar src={item.customerAvatar} />}
            title={item.treatment}
            description={
              <>
                <div>{item.customerName}</div>
                <div>{item.time}</div>
                <div>{item.status}</div>
              </>
            }
          />
        </List.Item>
      )}
    />
  );
};

export default ListField;
