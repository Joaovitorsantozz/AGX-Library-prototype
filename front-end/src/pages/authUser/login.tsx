import "../../index.css";
import placeholder from "../../assets/placeholderlogin.jpg";
import bookIcon from "../../assets/book.png";
import LoginForm from "./loginForm";
function LoginPage() {
  return (
    <section className="loginSection">
      <div className="loginContainer">
        <div className="loginContainerLS">
          <div className="loginContainerTitle">
            <div className="logo">
              <img src={bookIcon}></img>
            </div>
            <div className="content">
              <h1>AGX Library</h1>
              <p>Sistema de gerenciamento de biblioteca</p>
            </div>
          </div>
          <div className="loginContainerImage">
            <img src={placeholder}></img>
          </div>
          <div className="loginContainerFooter">
            <div className="content">
              <h2>Acervo acadêmico organizado em um só lugar.</h2>
              <p>
                Consulte exemplares disponíveis, acompanhe seus empréstimos e
                gerencie devoluções com simplicidade.
              </p>
            </div>
          </div>
        </div>
        <div className="loginContainerRS">
          <LoginForm></LoginForm>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
