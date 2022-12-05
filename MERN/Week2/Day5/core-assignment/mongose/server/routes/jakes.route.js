const jokesController = require("../controllers/jokes.controller");




module.exports = app =>{
    app.get("/api/jokes",jokesController.findJokes);
    app.get("/api/jokes/:id",jokesController.findONEJokes);
    app.post("/api/jokes/new",jokesController.createJokes);
    app.put("/api/jokes/:id",jokesController.updateJokes);
    app.delete("/api/jokes/:id",jokesController.deleteJoke);
}
