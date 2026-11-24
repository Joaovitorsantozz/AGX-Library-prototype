import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/userContext";
import { useEffect } from "react";

function Sidebar() {
  const { user, resetUser } = useAuth();
  const navigate = useNavigate();



  return (
    <aside className="dashboardSidebar">
      <div className="sidebarBrand">
        <div className="sidebarLogo">L</div>
        <div>
          <h2>AGX Library</h2>
          <p>Biblioteca Acadêmica</p>
        </div>
      </div>

      <nav className="sidebarNavigation">
        <a href="/dashboard" className="sidebarLink active">
          <span>D</span> Dashboard
        </a>

        <a href="/catalog" className="sidebarLink">
          <span>L</span> Catálogo
        </a>

        <a href="/available" className="sidebarLink">
          <span>L</span> Livros disponíveis
        </a>

        <a href="/loans" className="sidebarLink">
          <span>M</span> Meus empréstimos
        </a>

        <a href="/manage-books" className="sidebarLink">
          <span>G</span> Gerenciar livros
          <small>Admin</small>
        </a>
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
