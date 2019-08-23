import Controller from "../controller";

const routes = (app) => {
    app.get("/", Controller.home )
    app.post("/add_email", Controller.registerUser)
}

export default routes;