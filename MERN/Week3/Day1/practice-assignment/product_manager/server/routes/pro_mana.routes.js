const Pro_manaController = require('../controllers/Pro_mana.contro')

module.exports = app => {
    app.get("/api/pro_mana/", Pro_manaController.findAllPro_mana);
    app.get("/api/pro_mana/:id", Pro_manaController.findOneSinglePro_mana);
    app.put("/api/pro_mana/update/:id", Pro_manaController.updateExistingPro_mana);
    app.post("/api/pro_mana/new", Pro_manaController.createNewPro_mana);
    app.delete("/api/pro_mana/delete/:id", Pro_manaController.deleteAnExistingPro_mana);
  };