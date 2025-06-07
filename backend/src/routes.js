import { Router } from "express";
import tasksControllers from "./controllers/tasksControllers.js";

const router = Router();
//importação das rotas


router.get("/tasks", (req, res) => tasksControllers.getAll(req, res));







export default router;
