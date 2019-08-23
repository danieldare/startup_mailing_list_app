import pool from "../database";

class UserModel {
    static async getUsersCount(){
        try{
            const query = `SELECT count(*) as count from users`;
            await pool.query(query, (error, results) => {
                return results;
            });
        }catch(err){
            return err;
        }
    }
}

export default UserModel;