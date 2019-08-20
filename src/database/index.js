import mysql from "mysql";

const options = {
    user: "root",
    password: "rootpassword",
    database: "mailing_list",
}

const connection = mysql.createConnection(options);


export default connection;