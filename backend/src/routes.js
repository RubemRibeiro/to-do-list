import { Router } from "express";
import tasksControllers from "./controllers/tasksControllers.js";
import tasksMiddleware from "./middlewares/tasksMiddleware.js"

const router = Router();
//importação das rotas


router.get("/tasks", tasksControllers.getAll);

router.post("/tasks", tasksMiddleware.validateBody, tasksControllers.addTask);

router.get("/tasks/:id", tasksControllers.getById);

router.delete("/tasks/:id", tasksControllers.deleteTask);

router.put("/tasks/:id", tasksMiddleware.validateBody, tasksMiddleware.validateStatus, tasksControllers.updateTask);


export default router;
