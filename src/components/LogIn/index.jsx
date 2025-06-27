import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import useAuthStore from "../../store/authStore";
import { useNavigate } from "react-router-dom";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const schema = yup.object({
  username: yup.string().required("نام کاربری الزامی است."),
  password: yup
    .string()
    .required("رمز عبور الزامی است.")
    .min(8, "رمز عبور باید حداقل 8 کاراکتر باشد."),
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
    <>
      <div className="max-w-4xl mx-auto py-8 px-4">
        <div className="mb-6">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
            sx={{
              "& .MuiBreadcrumbs-li": {
                display: "flex",
                alignItems: "center",
                fontSize: "1rem",
              },
            }}
          >
            <Link
              underline="hover"
              color="inherit"
              href="/"
              sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
            >
              <HomeIcon sx={{ fontSize: 20 }} />
              خانه
            </Link>
            <Typography
              color="primary"
              sx={{ display: "flex", alignItems: "center", fontWeight: 500 }}
            >
              صفحه ورود
            </Typography>
          </Breadcrumbs>
        </div>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md mx-auto mt-10"
      >
        <div className="flex flex-col gap-2 justify-center">
          <label>نام کاربری:</label>
          <input
            {...register("username")}
            className="border w-full p-2 mb-2 rounded"
          />
          <p className="text-red-600">{errors.username?.message}</p>
        </div>
        <div className="flex flex-col gap-2 justify-center">
          <label>رمز ورود:</label>
          <input
            type="password"
            {...register("password")}
            className="border w-full p-2 mb-2 rounded"
          />
          <p className="text-red-600">{errors.password?.message}</p>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded w-full cursor-pointer"
        >
          ورود
        </button>
      </form>
    </>
  );
}
