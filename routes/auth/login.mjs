import { Router } from "express";
import { login, register } from "../../src/services/login.mjs";

const loginRouter = Router();

loginRouter.post("/login", async (req, res) => {
  console.log(req.body);
  const { username, password } = req.body;
  const userDetails = { username, password };
  const data = await login(userDetails);
  res.status(data.statusCode).json(data);
});

loginRouter.post("/register", async (req, res) => {
  console.log(req.body);
  const { username, password, name, email } = req.body;
  const userDetails = { username, password, name, email };
  const data = await register(userDetails);
  res.status(data.statusCode).json(data);
});

export default loginRouter;
