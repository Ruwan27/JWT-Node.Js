import express from "express";
import dotenv from "dotenv";
import mainRouter from "./routes/index.mjs";

dotenv.config();

const app = express();

app.use(express.json());
app.use(mainRouter);

const port = process.env.PORT || 4000;

app.listen(port, () => console.log("server running"));
