import { Router } from "express";
import appRouter from "./app/index.mjs";
import loginRouter from "./auth/login.mjs";
import { authCheck } from "../src/middleware/auth-check.mjs";

const mainRouter = Router();

mainRouter.use(loginRouter);
mainRouter.use(authCheck, appRouter);

export default mainRouter;
