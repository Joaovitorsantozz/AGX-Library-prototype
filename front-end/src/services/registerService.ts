import type { LoginUserInterface } from "../interfaces/loginUserInterface";
import Axios from "axios";
import type { registerUserInterface } from "../interfaces/registerUserInterface";
export const registerUserService = async (values: registerUserInterface) => {
  return await Axios.post("http://localhost:3000/register", {
    name: values.name,
    email: values.email,
    password: values.password,
  });
};
