import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import useAuthStore from "../../store/authStore";
import { useNavigate } from "react-router-dom";

const schema = yup.object({
  username: yup.string().required("Name is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
});

export default function Login() {

  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = () => {
    login();
    navigate("/Booking");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto mt-10">
      <div>
        <label>Username:</label>
        <input {...register("username")} className="border w-full p-2 mb-2 rounded"/>
        <p>{errors.username?.message}</p>
      </div>
      <div>
        <label>Password:</label>
        <input type="password" {...register("password")} className="border w-full p-2 mb-4 rounded"/>
        <p>{errors.password?.message}</p>
      </div>
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded w-full">Submit</button>
    </form>
  );
}
