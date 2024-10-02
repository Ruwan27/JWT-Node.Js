import { Router } from "express";

const appRouter = Router();

appRouter.get("/", (req, res) => {
  res.status(200).json({ msg: "ok" });
});

export default appRouter;
