import { Form, Formik, Field, ErrorMessage } from "formik";

import { validateLogin } from "../../../validations/loginSchema";
import type { LoginUserInterface } from "../../../interfaces/loginUserInterface";
import { loginUserService } from "../../../services/loginService";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../../context/userContext";
function LoginForm() {
  const navigate = useNavigate();
  const {setUser} = useAuth();
  const handleSubmit = async (values: LoginUserInterface) => {

    try {
      const response = await loginUserService(values);
      const token = response.data.data.token;
      localStorage.setItem("token", token);
  
      setUser(response.data.data.user);
      alert(response.data.message);
      navigate("/dashboard");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        alert(error.response?.data?.message ?? "Erro ao realizar login");
      } else {
        alert("Ocorreu um erro inesperado");
      }
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
          <ErrorMessage name="email" component="span"></ErrorMessage>
        </div>

        <div className="loginInputGroup">
          <label htmlFor="password">Senha</label>
          <Field
            type="password"
            name="password"
            id="password"
            placeholder="Digite sua senha"
          />
          <ErrorMessage name="password" component="span"></ErrorMessage>
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
