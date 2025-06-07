import { Router } from "express";

const router = Router();
//importação das rotas


router.get("/tasks", (req, res) => res.status(200).send("API funcionando!"));







export default router;
