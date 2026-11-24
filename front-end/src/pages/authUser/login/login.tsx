import "@/index.css";

import LoginForm from "./loginForm";
import AuthPagesLeftSideContainer from "../../../components/authPageLeftSideContainer";
function LoginPage() {
  return (
    <section className="loginSection">
      <div className="loginContainer">
        <AuthPagesLeftSideContainer></AuthPagesLeftSideContainer>
        <div className="loginContainerRS">
          <LoginForm></LoginForm>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
