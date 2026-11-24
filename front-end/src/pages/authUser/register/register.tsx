import AuthPagesLeftSideContainer from "../../../components/authPageLeftSideContainer";

import RegisterForm from "./registerForm";

function RegisterPage() {
  return (
    <section className="loginSection">
      <div className="loginContainer">
        <AuthPagesLeftSideContainer></AuthPagesLeftSideContainer>
        <div className="loginContainerRS">
          <RegisterForm></RegisterForm>
        </div>
      </div>
    </section>
  );
}

export default RegisterPage;
