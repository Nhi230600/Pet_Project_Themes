import React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data); // Dữ liệu của biểu mẫu có kiểu any ở đây, bạn có thể sửa thành kiểu dữ liệu phù hợp với dữ liệu của bạn
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Họ và tên"
        {...register("fullName", { required: true, maxLength: 80 })}
      />
      <input
        type="text"
        placeholder="Email"
        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
      />
      <input
        type="tel"
        placeholder="Số điện thoại di động"
        {...register("mobileNumber", {
          required: true,
          minLength: 6,
          maxLength: 12,
        })}
      />
      <select {...register("title", { required: true })}>
        <option value="Mr">Mr</option>
        <option value="Mrs">Mrs</option>
        <option value="Miss">Miss</option>
        <option value="Dr">Dr</option>
      </select>

      <div>
        <input
          type="radio"
          id="developerYes"
          {...register("developer", { required: true })}
          value="Yes"
        />
        <label htmlFor="developerYes">Có</label>
      </div>
      <div>
        <input
          type="radio"
          id="developerNo"
          {...register("developer", { required: true })}
          value="No"
        />
        <label htmlFor="developerNo">Không</label>
      </div>

      <button type="submit">Nộp</button>
    </form>
  );
}
