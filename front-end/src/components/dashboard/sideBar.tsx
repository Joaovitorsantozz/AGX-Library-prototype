import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/userContext";


function Sidebar() {
  const { user, resetUser } = useAuth();

  const navigate = useNavigate();

  return (
    <aside className="dashboardSidebar">
      <div className="sidebarBrand">
        <div className="sidebarLogo">L</div>
        <div>
          <h2>AGX Library</h2>
          <p>Biblioteca Ficcional</p>
        </div>
      </div>

      <nav className="sidebarNavigation">
       
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? "sidebarLink active" : "sidebarLink"
          }
        >
          <span>T</span> Todos os Livros
        </NavLink>
        
        <NavLink
          to="/availableBooks"
          className={({ isActive }) =>
            isActive ? "sidebarLink active" : "sidebarLink"
          }
        >
          <span>L</span> Livros disponíveis
        </NavLink>
        <NavLink
          to="/myBorrowedBooks"
          className={({ isActive }) =>
            isActive ? "sidebarLink active" : "sidebarLink"
          }
        >
          <span>M</span> Meus empréstimos
        </NavLink>
        {user.role==="admin" ? <NavLink
          to="/manage-books"
          className={({ isActive }) =>
            isActive ? "sidebarLink active" : "sidebarLink"
          }
        >
          <span>G</span> Gerenciar livros <small>Admin</small>
        </NavLink> : ""}
      </nav>
      <div className="sidebarUser">
        <div className="userAvatar">{user.name.slice(0, 2).toUpperCase()}</div>
        <div className="userInfo">
          <strong>{user.name}</strong>
          <span>{user.email}</span>
        </div>
      </div>
      <button
        className="logoutButton"
        onClick={() => {
          resetUser();
          navigate("/login");
        }}
      >
        &gt; Sair
      </button>
    </aside>
  );
}

export default Sidebar;
