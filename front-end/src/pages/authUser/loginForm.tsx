import { Form, Formik, Field } from "formik";

import { validateLogin } from "../../validations/loginSchema";
import type { LoginUserInterface } from "../../interfaces/loginUserInterface";
import { loginUserService } from "../../services/loginService";


function LoginForm() {
  const handleSubmit = async (values: LoginUserInterface) => {
    try {
      const response = await loginUserService(values);
      const token = response.data.data.token;
      localStorage.setItem("token", token);
      alert(response.data.message);
    } catch (error) {
      console.log("error", error);
    }
  };


  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={handleSubmit}
      validationSchema={validateLogin}
    >
      <Form className="loginForm">
        <div className="loginFormHeader">
          <h2>Entrar</h2>
          <p>Preencha seus dados para acessar a biblioteca.</p>
        </div>

        <div className="loginInputGroup">
          <label htmlFor="email">E-mail</label>
          <Field
            type="email"
            name="email"
            id="email"
            placeholder="seuemail@exemplo.com"
          />
        </div>

        <div className="loginInputGroup">
          <label htmlFor="password">Senha</label>
          <Field
            type="password"
            name="password"
            id="password"
            placeholder="Digite sua senha"
          />
        </div>

        <button type="submit" className="loginSubmitButton">
          Entrar
        </button>

        <div className="loginFormFooter">
          <p>
            Ainda não possui uma conta? <a href="/register">Criar conta</a>
          </p>
        </div>
      </Form>
    </Formik>
  );
}

export default LoginForm;
