import connection from "./connection.js"

const getALL = async () => {
    const tasks = await connection.execute('SELECT * FROM tasks');
    return tasks;
}

export default {
    getALL
}