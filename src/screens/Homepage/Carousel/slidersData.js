import React from 'react';
import { Content1, Content2, Content3 } from '../Content'; // Import the content components.

const slidersData = [
  {
    id: 1,
    content: <Content1 />,
    imageUrl: 'https://images.deccanherald.com/deccanherald%2F2023-08%2Fb5368628-0ea6-4bc8-a793-8e2b5c6e21a9%2FCheems.png?auto=format%2Ccompress&fmt=webp&fit=max&format=webp&w=900&dpr=1.3',
    contentType: 'image',
  },
  {
    id: 2,
    content: <Content2 />,
    imageUrl: 'https://images.deccanherald.com/deccanherald%2F2023-08%2Fb5368628-0ea6-4bc8-a793-8e2b5c6e21a9%2FCheems.png?auto=format%2Ccompress&fmt=webp&fit=max&format=webp&w=900&dpr=1.3',
    contentType: 'image',
  },
  {
    id: 3,
    content: <Content3 />,
    imageUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.522181256339!2d109.2088148107411!3d13.747353697340586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x316f6cde074aee57%3A0xea20cba96cb8b113!2zMTYgQuG6vyBWxINuIMSQw6BuLCBHaOG7gW5oIFLDoW5nLCBUaMOgbmggcGjhu5EgUXVpIE5oxqFuLCBCw6xuaCDEkOG7i25oLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1695371376438!5m2!1sen!2s',
    contentType: 'iframe',
  },
];

export default slidersData;
