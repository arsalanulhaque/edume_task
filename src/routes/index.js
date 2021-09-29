import { Router } from "express";
import predictions from "./predictions/predictions";

const allRoutes = Router();

allRoutes.get("/", (req, res) => {
  res.status(200).json({ msg: "API connected" });
});

allRoutes.use("/predictions", predictions);

export default allRoutes;
