import pool from ".";
import faker from "faker";

export const initialDatabaseQuery = () => {
        const query = `CREATE table IF NOT EXISTS users(
            email VARCHAR(255) PRIMARY KEY,
            created_at TIMESTAMP DEFAULT NOW()
        )`;

        pool.query(query, (error, results, fields) => {
        if(error) {
            console.log(`An error occured!.. ${error}`);
            throw error;
        }
        console.log(results);
        })
};

export const insertUserTableQuery = () => {
    const query = `INSERT into users(email, created_at) VALUES ?`;
    const data = [];
    for(let i = 0; i < 500 ; i++){
        data.push([ faker.internet.email(), faker.date.past() ])
    }
    pool.query(query , [data], (error, results, fields) => {
        if(error){
            console.log(error);
            throw error;
        }
        console.log(results)
    })  
    connection.end();
}

export const dropUserTable = () => {
    const query = `DROP table IF EXIST users`;
    connection.connect(query, (error, results) => {
        if(error){
            console.log(error);
            throw error;
        }
        console.log(results);
    })
    connection.end();
}


require("make-runnable");