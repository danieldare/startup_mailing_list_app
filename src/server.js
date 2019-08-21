import express from "express";
import path from "path";
import morgan from "morgan";
import connection from "./database";
import routes from "./routes/index";
import exphbs from "express-handlebars";


const app = express();

app.engine(".hbs", exphbs({extname: ".hbs"}));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", ".hbs");

app.use(morgan("dev"));
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, "public")))

routes(app);

const port = process.env.PORT || 4400;

app.listen(port , () => {
    connection.connect(err => {
        if(err){
            console.error(`An error occured ... ${err}`);
            throw err;
        }else{
            console.log(`Connected to the database`);
        }
    })
    console.log(`Server running on port ${port}`);
});