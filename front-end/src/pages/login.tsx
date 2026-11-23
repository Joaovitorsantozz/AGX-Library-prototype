import "../index.css";
import placeholder from "../assets/loginIMGPlaceholder.jpg";
function LoginPage() {
  return (
    <section className="loginSection">
      <div className="loginContainer">
        <div className="loginContainerLS">
          <div className="loginContainerTitle">
            <div className="logo"></div>
            <div className="content">
              <h1>AGX Library</h1>
              <p>Sistema de gerenciamento de biblioteca</p>
            </div>
          </div>
          <div className="loginContainerImage"></div>
          <div className="loginContainerFooter">
            <img src={placeholder}></img>
          </div>
        </div>
        <div className="loginContainerRS"></div>
      </div>
    </section>
  );
}

export default LoginPage;
