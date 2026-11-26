import { Navigate } from "react-router-dom";
import type { JSX } from "react/jsx-dev-runtime";
import { jwtDecode } from "jwt-decode";

const AdminProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" replace />;
  }
  try {
    const {  role } = jwtDecode(token) as { role: string };
    if (role != "admin") {
      alert("Você não tem autorização para essa funcionalidade");
      return <Navigate to="/dashboard" replace />;
    }
  } catch (error) {
    console.error("Error decoding token:", error);
    localStorage.removeItem("token");
    return <Navigate to="/dashboard" replace />;
  }
  return children;
};

export default AdminProtectedRoute;
