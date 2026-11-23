import type { LoginUserInterface } from "../interfaces/loginUserInterface";
import Axios from "axios";
export const loginUserService = async (data: LoginUserInterface) => {
  return await Axios.post("http://localhost:3000/login", {
    email: data.email,
    password: data.password,
  });
};
