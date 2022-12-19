const express = require('express');
const app =express();
const PORT =8000;
const cros= require('cors')




require=("./server/config/mongoose.config");

const AllMyRoute = require("../server/routes/pro_mana.routes");
AllMyRoute(app)

// middlewara ????
app.use(express.json(), express.urlencoded({ extended: true }));
app.use(cros());


app.listen(PORT,()=> console.log(`concte to 🏹📞 :${PORT}`));