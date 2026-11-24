import express from "express";
import {
  getUserInfo,
  loginUser,
  registerUser,
} from "../controllers/usercontroller.ts";
import AuthenticateToken from "../middlewares/authenticateToken.ts";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/getUserInfo",AuthenticateToken({adminOnly:false}),getUserInfo);
export default router;
