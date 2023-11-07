const employeeData = [
  {
    id: 1,
    name: 'Nguyễn Văn A',
    exp: 5,
    gender: 'Nam',
    type: 'care',
    position: 'Bác sĩ',
    account: 'nvana',
    password: 'password123',
    avatar: 'https://source.unsplash.com/random/200x200',
    description:
      'Tôi có 5 năm kinh nghiệm trong việc chữa trị và chăm sóc sức khỏe cho thú cưng, đồng thời cũng gắn bó với PetsLove trong suốt thời gian vừa qua cùng với, Phương châm: Vui lòng khách đến, vừa lòng pet đi ',
    appointment: 35
  },
  {
    id: 2,
    name: 'Trần Thị B',
    exp: 4,
    gender: 'Nữ',
    type: 'care',
    position: 'Bác sĩ',
    account: 'ttb',
    password: 'doctor456',
    avatar: 'https://source.unsplash.com/random/200x200',
    description:
      'Tôi có 4 năm kinh nghiệm trong việc chữa trị và chăm sóc sức khỏe cho thú cưng, đồng thời cũng gắn bó với PetsLove trong suốt thời gian vừa qua cùng với, Phương châm: Vui lòng khách đến, vừa lòng pet đi ',
    appointment: 37
  },
  {
    id: 3,
    name: 'Lê Quang C',
    exp: 5,
    gender: 'Nam',
    type: 'trainer',
    position: 'Huấn luyện viên',
    account: 'lqc',
    password: 'trainer789',
    avatar: 'https://picsum.photos/id/235/240/500',
    description:
      'Tôi có 5 năm kinh nghiệm trong việc huấn luyện cho thú cưng, đồng thời cũng gắn bó với PetsLove trong suốt thời gian vừa qua cùng với, Phương châm: Vui lòng khách đến, vừa lòng pet đi ',
    appointment: 4
  },
  {
    id: 4,
    name: 'Phạm Thị D',
    exp: 3,
    gender: 'Nữ',
    type: 'spa',
    position: 'Nhân viên chăm sóc',
    account: 'ptd',
    password: 'care123',
    avatar: 'https://picsum.photos/id/250/740/600',
    description:
      'Tôi có 3 năm kinh nghiệm trong việc chăm sóc và làm đẹp cho thú cưng, đồng thời cũng gắn bó với PetsLove trong suốt thời gian vừa qua cùng với, Phương châm: Vui lòng khách đến, vừa lòng pet đi ',
    appointment: 7
  },
  {
    id: 5,
    name: 'Hoàng Văn E',
    exp: 2,
    gender: 'Nam',
    type: 'care',
    position: 'Bác sĩ',
    account: 'hve',
    password: 'medic456',
    avatar: 'https://picsum.photos/id/237/200/300',
    description:
      'Tôi có 2 năm kinh nghiệm trong việc chữa trị và chăm sóc sức khỏe cho thú cưng, đồng thời cũng gắn bó với PetsLove trong suốt thời gian vừa qua cùng với, Phương châm: Vui lòng khách đến, vừa lòng pet đi ',
    appointment: 15
  },
  {
    id: 6,
    name: 'Mai Thị F',
    exp: 3,
    gender: 'Nữ',
    type: 'spa',
    position: 'Nhân viên chăm sóc',
    account: 'mtf',
    password: 'care567',
    avatar: 'https://picsum.photos/id/301/200/300',
    description:
      'Tôi có 3 năm kinh nghiệm trong việc chăm sóc và làm đẹp cho thú cưng, đồng thời cũng gắn bó với PetsLove trong suốt thời gian vừa qua cùng với, Phương châm: Vui lòng khách đến, vừa lòng pet đi ',
    appointment: 87
  },
  {
    id: 7,
    name: 'Lý Thanh G',
    exp: 5,
    gender: 'Nam',
    type: 'trainer',
    position: 'Huấn luyện viên',
    account: 'ltg',
    password: 'trainer890',
    avatar: 'https://picsum.photos/id/289/200/500',
    description:
      'Tôi có 5 năm kinh nghiệm trong việc huấn luyện cho thú cưng, đồng thời cũng gắn bó với PetsLove trong suốt thời gian vừa qua cùng với, Phương châm: Vui lòng khách đến, vừa lòng pet đi ',
    appointment: 98
  },
  {
    id: 8,
    name: 'Đinh Văn H',
    exp: 4,
    gender: 'Nam',
    type: 'spa',
    position: 'Nhân viên chăm sóc',
    account: 'dvh',
    password: 'care246',
    avatar: 'https://picsum.photos/id/600/200/300',
    description:
      'Tôi có 4 năm kinh nghiệm trong việc chăm sóc và làm đẹp cho thú cưng, đồng thời cũng gắn bó với PetsLove trong suốt thời gian vừa qua cùng với, Phương châm: Vui lòng khách đến, vừa lòng pet đi ',
    appointment: 56
  },
  {
    id: 9,
    name: 'Vũ Thị I',
    exp: 7,
    gender: 'Nữ',
    type: 'care',
    position: 'Bác sĩ',
    account: 'vti',
    password: 'medic789',
    avatar: 'https://picsum.photos/id/123/200/300',
    description:
      'Tôi có 7 năm kinh nghiệm trong việc chữa trị và chăm sóc sức khỏe cho thú cưng, đồng thời cũng gắn bó với PetsLove trong suốt thời gian vừa qua cùng với, Phương châm: Vui lòng khách đến, vừa lòng pet đi ',
    appointment: 78
  },
  {
    id: 10,
    name: 'Trần Văn J',
    exp: 6,
    gender: 'Nam',
    type: 'trainer',
    position: 'Huấn luyện viên',
    account: 'tvj',
    password: 'trainer123',
    avatar: 'https://picsum.photos/id/107/200/300',
    description:
      'Tôi có 6 năm kinh nghiệm trong việc huấn luyện cho thú cưng, đồng thời cũng gắn bó với PetsLove trong suốt thời gian vừa qua cùng với, Phương châm: Vui lòng khách đến, vừa lòng pet đi ',
    appointment: 34
  },
  {
    id: 11,
    name: 'Nguyễn Thị K',
    exp: 4,
    gender: 'Nữ',
    type: 'spa',
    position: 'Nhân viên chăm sóc',
    account: 'ntk',
    password: 'care789',
    avatar: 'https://picsum.photos/id/209/200/300',
    description:
      'Tôi có 4 năm kinh nghiệm trong việc chăm sóc và làm đẹp cho thú cưng, đồng thời cũng gắn bó với PetsLove trong suốt thời gian vừa qua cùng với, Phương châm: Vui lòng khách đến, vừa lòng pet đi ',
    appointment: 54
  },
  {
    id: 12,
    name: 'Lê Văn L',
    exp: 2,
    gender: 'Nam',
    type: 'care',
    position: 'Bác sĩ',
    account: 'lvl',
    password: 'medic246',
    avatar: 'https://picsum.photos/id/237/200/300',
    description:
      'Tôi có 2 năm kinh nghiệm trong việc chữa trị và chăm sóc sức khỏe cho thú cưng, đồng thời cũng gắn bó với PetsLove trong suốt thời gian vừa qua cùng với, Phương châm: Vui lòng khách đến, vừa lòng pet đi ',
    appointment: 50
  },
  {
    id: 13,
    name: 'Trương Thị M',
    exp: 1,
    gender: 'Nữ',
    type: 'spa',
    position: 'Nhân viên chăm sóc',
    account: 'ttm',
    password: 'care135',
    avatar: 'https://picsum.photos/id/254/200/300',
    description:
      'Tôi có 1 năm kinh nghiệm trong việc chăm sóc và làm đẹp cho thú cưng, đồng thời cũng gắn bó với PetsLove trong suốt thời gian vừa qua cùng với, Phương châm: Vui lòng khách đến, vừa lòng pet đi ',
    appointment: 22
  },
  {
    id: 14,
    name: 'Phan Văn N',
    exp: 7,
    gender: 'Nam',
    type: 'trainer',
    position: 'Huấn luyện viên',
    account: 'pvn',
    password: 'trainer357',
    avatar: 'https://picsum.photos/id/287/200/300',
    description:
      'Tôi có 7 năm kinh nghiệm trong việc huấn luyện cho thú cưng, đồng thời cũng gắn bó với PetsLove trong suốt thời gian vừa qua cùng với, Phương châm: Vui lòng khách đến, vừa lòng pet đi ',
    appointment: 69
  }
];

export default employeeData;
