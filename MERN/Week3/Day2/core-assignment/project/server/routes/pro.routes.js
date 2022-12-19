const ProController = require("../controllers/project.contro");

module.exports = app =>{
  app.get("/api/pro/", ProController.findALL);
  app.get("/api/pro/:id", ProController.findone);
  app.put("/api/pro/update/:id", ProController.updatepro);
  app.post("/api/pro/new", ProController.createpro);
  app.delete("/api/pro/delete/:id", ProController.deletepro);
}