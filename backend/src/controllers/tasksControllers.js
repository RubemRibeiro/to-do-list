import tasksModel from "../models/tasksModel.js";

const getAll =  async (req, res) => {
    const tasks = await tasksModel.getALL();

    return res.status(200).json({ message: "Tarefas encontradas com sucesso" });
}


export default {
    getAll
};