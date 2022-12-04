const jokesController = require("../controllers/jokes.controller");




module.exports = app =>{
    app.get("/api/jokes",jokesController.findJokes);
    app.get("/api/jokes/:id",jokesController.findONEJokes);
    app.post("/api/jokes/new",jokesController.createJokes);
    app.put("/api/jokes/update/:id",jokesController.updateJokes);
    app.delete("/api/jokes/delete/:id",jokesController.deleteJoke);
}
