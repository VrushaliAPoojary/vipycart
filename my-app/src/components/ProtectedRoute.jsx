import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token"); // or use a context hook
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return children;
}
