import express from "express";
import cors from "cors";
import { json } from "body-parser";
import morgan from "morgan";
import allRoutes from "./routes";

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(json());
app.use("/", allRoutes);

export default app;
