import UserModel from "../model";
import db from "../database";


class Controller {
    static async home (req, res){
        try{
            const query = `SELECT count(*) as count from users`;
            await db.query(query, (error, results) => {
                if(error){
                    throw error;
                }
                return res.render("main", { layout: false , count: results[0].count});
            });
        }catch(err){
            return err;
        }  
    }

    static async registerUser (req, res) {
        try{
            const { body: {email}} =  req;
            const query = `INSERT INTO users set ?`;
            if(email === ""){
                res.redirect("/");
                return;
            }
            await db.query(query, data = { email }, (err, results) => {
                if(err){
                    throw err;
                }
                res.redirect("/");
            })
        }catch(err){
            return err;
        }
        
    }
}

export default Controller;