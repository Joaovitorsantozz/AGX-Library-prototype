import "./index.css";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/authUser/login/login";
import RegisterPage from "./pages/authUser/register/register";
import DashBoard from "./pages/dashboard";
import ProtectedRoute from "./validations/protectedRoute";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage></LoginPage>}></Route>
      <Route path="/register" element={<RegisterPage></RegisterPage>}></Route>
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashBoard />
          </ProtectedRoute>
        }
      ></Route>
    </Routes>
  );
}

export default App;
