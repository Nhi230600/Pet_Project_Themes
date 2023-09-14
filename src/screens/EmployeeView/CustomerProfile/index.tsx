import React, { useState } from 'react';
import { Avatar, Card, List, Typography } from 'antd';
import { useNavigate } from 'react-router';

const { Title, Text } = Typography;

const animalData = {
  avatar: "https://avatars.githubusercontent.com/u/134280054?v=4",
  name: 'Fido',
  species: 'Dog',
  age: 3,
  treatments: [
    { name: 'Vaccination', details: 'Vaccination details...' },
    { name: 'Flea Control', details: 'Flea Control details...' },
    { name: 'Deworming', details: 'Deworming details...' },
  ],
};

const ProfilePage = () => {
    const navigate = useNavigate();
  
  const onFinish = () => {
    navigate('/employee/customer/treatment');
  }

  return (
    <div style={{ padding: '16px' }}>
      <Card>
        <Avatar size={128} src={animalData.avatar} />
        <Title level={4}>{animalData.name}</Title>
        <Text>Species: {animalData.species}</Text>
        <Text>Age: {animalData.age} years old</Text>
      </Card>

      <Card style={{ marginTop: '16px' }}>
        <Title level={4}>Treatments</Title>
        <List
          dataSource={animalData.treatments}
          renderItem={(item) => (
            <List.Item>
              <Text>{item.name}</Text>
              <a onClick={onFinish}>View Details</a>
            </List.Item>
          )}
        />
      </Card>
      
    </div>
  );
};

export default ProfilePage;
