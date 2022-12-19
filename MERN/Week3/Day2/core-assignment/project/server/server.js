const express = require('express');
const app = express();
const cors = require('cors');
const PROT = 8000


// midellwhere
app.use(express.json(), express.urlencoded({ extended: true }));
app.use(cors())

require("./config/mongoose.config")

require("../server/routes/pro.routes")(app)

app.listen(PROT,() => console.log('the server is running 💎💍💎'))