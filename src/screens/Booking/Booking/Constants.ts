// constants.ts
export const formTypes = ["spa", "trainer", "care"];

export interface Option {
  label: string;
  value: string;
}

export interface BookingFormProps {
  title: string;
  options: [Option[], Option[]];
  timeLabel: string;
  notePlaceholder: string;
}

export const optionsSpa: [Option[], Option[]] = [
  [
    {
      label: "Tỉa lông",
      value: "trim_hair",
    },
    {
      label: "Tắm rửa",
      value: "shower",
    },
    {
      label: "Massage",
      value: "massage",
    },
    {
      label: "Manicure và Pedicure",
      value: "manicure_pedicure",
    },
    {
      label: "Nhuộm lông",
      value: "dye_hair",
    },
  ],
  [
    {
      label: "Nguyễn Văn A",
      value: "nguyen_van_a",
    },
    {
      label: "Phạm Thị D",
      value: "pham_thi_d",
    },
    {
      label: "Mai Thị F",
      value: "mai_thi_f",
    },
    {
      label: "Đinh Văn H",
      value: "dinh_van_h",
    },
  ],
];

export const optionsTrainer: [Option[], Option[]] = [
  [
    {
      label: "Khóa  học cơ bản",
      value: "basic_course",
    },
    {
      label: "Khóa học nâng cao",
      value: "advanced_course",
    },
    {
      label: "Khóa học chó sủa",
      value: "barking_course",
    },
  ],
  [
    {
      label: "Lê Quang C",
      value: "le_quang_c",
    },
    {
      label: "Lý Thanh G",
      value: "ly_thanh_g",
    },
    {
      label: "Trần Văn J",
      value: "tran_van_j",
    },
  ],
];

export const optionsCare: [Option[], Option[]] = [
  [
    {
      label: "Kiểm tra sức khỏe định kỳ",
      value: "health_check",
    },
    {
      label: "Chăm sóc y tế",
      value: "medical_care",
    },
    {
      label: "Phòng ngừa bệnh",
      value: "disease_prevention",
    },
  ],
  [
    {
      label: "Trần Thị B",
      value: "tran_thi_b",
    },
    {
      label: "Hoàng Văn E",
      value: "hoang_van_e",
    },
    {
      label: "Vũ Thị I",
      value: "vu_thi_i",
    },
  ],
];

export const formConfig: Record<string, BookingFormProps> = {
  spa: {
    title: "Đặt lịch SPA",
    options: optionsSpa,
    timeLabel: "THỜI GIAN",
    notePlaceholder:
      "Nhập một vài mô tả tình trạng của các bé để chuyên viên của chúng tôi có thể hỗ trợ bạn tốt nhất ...",
  },
  trainer: {
    title: "Đặt lịch Trainer",
    options: optionsTrainer,
    timeLabel: "THỜI GIAN",
    notePlaceholder:
      "Nhập một vài yêu cầu hoặc thông tin khác về lịch học/training...",
  },
  care: {
    title: "Đặt lịch Care",
    options: optionsCare,
    timeLabel: "THỜI GIAN",
    notePlaceholder:
      "Nhập một vài yêu cầu hoặc thông tin khác về chăm sóc/trợ giúp gia đình...",
  },
};
