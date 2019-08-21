import Controller from "../controller";

const routes = (app) => {
    app.get("/", Controller.registerUser )
}

export default routes;