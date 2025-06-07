import mysql from 'mysql2';
// console.log(process.env.MYSQL_HOST)
// console.log(process.env.MYSQL_PORT)
// console.log(process.env.MYSQL_USER)
// console.log(process.env.MYSQL_PASSWORD)
// console.log(process.env.MYSQL_DATABASE)

const connection = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE 

});

export default connection;
