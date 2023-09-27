import MyForm from "components/MyForm";

function App() {
  const fieldData = [
    {
      name: "Avatar",
      label: "Avatar",
      rules: [{ required: true, message: "Please upload your avatar!" }],
    },
    {
      name: "Name",
      label: "Name",
      rules: [{ required: true, message: "Please input your name!" }],
    },
    {
      name: "Phone",
      label: "Phone",
      rules: [
        { required: true, message: "Please input your phone number!" },
        {
          pattern: /^[0-9]*$/,
          message: "Please enter a valid phone number (digits only).",
        },
      ],
    },
    {
      name: "Email",
      label: "Email",
      rules: [
        { required: true, message: "Please input your email!" },
        { type: "email", message: "Please enter a valid email address!" },
      ],
    },
    {
      name: "Address",
      label: "Address",
      rules: [{ required: true, message: "Please input your address!" }],
    },

    // Thêm các trường và quy tắc khác tại đây
  ];
  const handleFormSubmit = (data: any) => {
    // Xử lý dữ liệu biểu mẫu ở đây
    console.log(data);
  };

  return (
    <div>
      <h1>My App</h1>
      <MyForm fieldData={fieldData} onSubmit={handleFormSubmit} />
    </div>
  );
}

export default App;
