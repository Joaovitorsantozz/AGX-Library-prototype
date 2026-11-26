import "./index.css";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/authUser/login/login";
import RegisterPage from "./pages/authUser/register/register";
import DashBoard from "./pages/dashboard";
import ProtectedRoute from "./validations/protectedRoute";
import UserBorrowedBooks from "./pages/userBorrowedBooks";
import AdminProtectedRoute from "./validations/adminRoute";
import AdminPage from "./pages/adminPage";

function App() {
  return (
    <Routes>
      <Route
        path="*"
        element={
          <ProtectedRoute>
            <DashBoard></DashBoard>
          </ProtectedRoute>
        }
      ></Route>
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
      <Route
        path="/myBorrowedBooks"
        element={
          <ProtectedRoute>
            <UserBorrowedBooks />
          </ProtectedRoute>
        }
      ></Route>
      <Route path = "/manage-books" element= {<AdminProtectedRoute><ProtectedRoute><AdminPage/></ProtectedRoute></AdminProtectedRoute>}></Route>
    </Routes>
  );
}

export default App;
