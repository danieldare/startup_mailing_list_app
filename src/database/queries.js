import connection from ".";
import faker from "faker";

const initialDatabaseQuery = () => {
        const query = `CREATE table IF NOT EXISTS users(
            email VARCHAR(255) PRIMARY KEY,
            created_at TIMESTAMP DEFAULT NOW()
        )`;

        connection.query(query, (error, results, fields) => {
        if(error) {
            console.log(`An error occured!.. ${error}`);
            throw error;
        }
        console.log(results);
        })
        connection.end();
};

const insertUserTableQuery = () => {
    const query = `INSERT INTO users set ? `;
    const data = [];
    for(let i = 1; i <= 500 ; i++){
        data.push([ faker.internet.email(), faker.date.past() ])
    }

    connection.query(query, [data], (error, results, fields) => {
        if(error){
            console.log(error);
            throw error;
        }
        console.log(results)
    })  
}

const dropUserTable = () => {
    const query = `DROP table IF EXIST users`;
    connection.connect(query, (error, results) => {
        if(error){
            console.log(error);
            throw error;
        }
        console.log(results)
    })
}


export {
    initialDatabaseQuery,
    insertUserTableQuery,
    dropUserTable
};

