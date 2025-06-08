import connection from "./connection.js"


const getALL = async () => {
    const [tasks] = await connection.execute('SELECT * FROM tasks');
    return tasks;
}



const addTask = async (task) => {

    const { title } = task;

    const dateUTC = new Date(Date.now()).toUTCString();

    const query = 'INSERT INTO tasks (title, status, created_at) VALUES (?, ?, ?)'

    const addedTask = await connection.execute(query, [title, 'pendente', dateUTC]
    );
    return addedTask;
}

const getById = async (id) => {
    const query = 'SELECT * FROM tasks WHERE id = ?'

    const [task] = await connection.execute(query, [id]);
    return task;
}



const deleteTask = async (id) => {
    const query = 'SELECT * FROM tasks WHERE id = ?';
    const [result] = await connection.execute(query, [id]);
    return result.affectedRows > 0;
}

const updateTask = async (id, task) => {
    const { status } = task;
    const query = 'UPDATE tasks SET status = ? WHERE id = ?';

    const [updatedTask] = await connection.execute( query, [status, id]);

    return updatedTask.affectedRows > 0;
}

export default {
    getALL,
    getById,
    addTask,
    deleteTask,
    updateTask,
}