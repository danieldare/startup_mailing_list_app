import mysql from "mysql";

const options = {
    connectionLimit : 100,
    user: "root",
    password: "rootpassword",
    database: "mailing_list",
}

const pool = mysql.createPool(options);


export default pool;