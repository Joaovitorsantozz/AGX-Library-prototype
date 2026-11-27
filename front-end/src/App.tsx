import "./index.css";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/authUser/login/login";
import RegisterPage from "./pages/authUser/register/register";
import DashBoard from "./pages/dashboard/dashboard.tsx";
import ProtectedRoute from "./validations/protectedRoute";
import UserBorrowedBooks from "./pages/dashboard/userBorrowedBooks.tsx";
import AdminProtectedRoute from "./validations/adminRoute";
import AdminPage from "./pages/dashboard/adminPage.tsx";
import AvailableBooksPage from "./pages/dashboard/availableBooks.tsx";

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
        path="/availableBooks"
        element={
          <ProtectedRoute>
            <AvailableBooksPage />
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
