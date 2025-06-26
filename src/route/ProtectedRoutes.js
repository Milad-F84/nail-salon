import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/authStore";

export default function ProtectedRoutes({ children }) {
  const navigate = useNavigate();

  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  return isLoggedIn ? children : navigate("/Login");
}
