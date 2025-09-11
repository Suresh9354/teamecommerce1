import express from "express";
import {
  registerUser,
  loginUser,
  adminUser,
} from "../controllers/userController.js";
const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.post("/admin", adminUser);

export default userRouter;
