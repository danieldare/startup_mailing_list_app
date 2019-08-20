import express from "express";
import connection from "./database";
import routes from "./routes/index";


const app = express();

routes(app);

const port = process.env.PORT || 4400;

app.listen(port , () => {
    connection.connect(err => {
        if(err){
            console.error(`An error occured ... ${err}`)
            throw err;
        }else{
            console.log(`Connected to the database`)
        }
    })
    console.log(`Server running on port ${port}`);
})