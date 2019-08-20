const routes = (app) => {
    app.get("/api", () => {
        res.send("Hello")
    })
}

export default routes;