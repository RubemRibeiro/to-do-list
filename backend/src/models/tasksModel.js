import connection from "./connection.js"


const getALL = async () => {
    const sql = "SELECT * FROM tasks";
    const tasks = await connection.execute(sql);
    return tasks;
}

export default {
    getALL
}