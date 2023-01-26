import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../Contexts/AuthContext";

export default function ProtectedRoute() {
  const location = useLocation();
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" state={{ from: location }} />;

  return <Outlet />;
}
