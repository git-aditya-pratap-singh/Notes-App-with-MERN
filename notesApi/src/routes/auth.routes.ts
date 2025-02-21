import express from 'express';
import LoginControllers from "../controllers/auth.controllers";
import UserAuthentication from '../middlewares/auth.middleware';
import dashboardRoutes from "../controllers/controllers.routes";

const AUTH_VERIFICATION = new UserAuthentication();
const AUTH_LOGIN = new LoginControllers();
const authRouter = express.Router();

authRouter.use('/dashboard', AUTH_VERIFICATION.verifyToken, dashboardRoutes);
authRouter.use('/login', AUTH_LOGIN.Login);

export default authRouter;