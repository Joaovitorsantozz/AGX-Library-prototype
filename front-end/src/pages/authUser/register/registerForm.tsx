import { Form, Formik, Field, ErrorMessage } from "formik";


import type { registerUserInterface } from "../../../interfaces/registerUserInterface";
import { registerUserService } from "../../../services/registerService";
import { validateRegister } from "../../../validations/registerSchema";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function RegisterForm() {
  const navigate = useNavigate();
  const handleSubmit = async (values: registerUserInterface) => {
    try {
      const response = await registerUserService(values);
      alert(response.data.message);
      navigate("/login");
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
      initialValues={{ name: "", email: "", password: "" }}
      onSubmit={handleSubmit}
      validationSchema={validateRegister}
    >
      <Form className="loginForm">
        <div className="loginFormHeader">
          <h2>Criar conta</h2>
          <p>Cria sua conta com seus dados para acessar a biblioteca.</p>
        </div>
        <div className="loginInputGroup">
          <label htmlFor="email">Nome</label>
          <Field type="name" name="name" id="name" placeholder="Seu nome" />
          <ErrorMessage name="name" component="span"></ErrorMessage>
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
          Criar conta
        </button>

        <div className="loginFormFooter">
          <p>
            Já possui uma conta? <a href="/login">Logar</a>
          </p>
        </div>
      </Form>
    </Formik>
  );
}

export default RegisterForm;
