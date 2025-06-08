import tasksModel from "../models/tasksModel.js";

const getAll =  async (req, res) => {
    const tasks = await tasksModel.getALL();

    return res.status(200).json(tasks);
}

const getById = async (req, res) => {
    const id  = req.params.id;
    const task = await tasksModel.getById(id);

    if (!task) {
        return res.status(404).json({ message: "Task not found" });
    }

    return res.status(200).json(task);
}

const addTask = async (req, res) => {
    const task = req.body;
    const addedTask = await tasksModel.addTask(task);

    return res.status(201).json(addedTask);
}

const deleteTask = async (req, res) => {
    const id = req.params.id;
    const deletedTask = await tasksModel.deleteTask(id);

    if (!deletedTask) {
        return res.status(404).json({ message: "Task not found" });
    }

    return res.status(204).send();
}

const updateTask = async (req, res) => {
    const id = req.params.id;
    const task = req.body;

    const updatedTask = await tasksModel.updateTask(id, task);

    if (!updatedTask) {
        return res.status(404).json({ message: "Task not found" });
    }

    return res.status(204).json(updatedTask);
}

export default {
    getAll,
    getById,
    addTask,
    deleteTask,
    updateTask
};