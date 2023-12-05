import express from "express";
import { google, login, register } from "../controllers/Auth.controller.js";

const authRouter = express.Router();

authRouter.post("/register", register)
authRouter.post("/login", login)
authRouter.post("/google", google)


export default authRouter;