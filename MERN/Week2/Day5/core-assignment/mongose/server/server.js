const express = require ('express');
const app = express();
const PORT=8000;
const DB_NAME= "test_app"


// middlewara ????
app.use(express.json(), express.urlencoded({ extended: true }));

// connct to db
require ("./config/mongose.config")(DB_NAME)

// :::::::::::::::::::::::::::

// import the routes-------------------------
// require("./routes/jakes.route")(app);
const tset = require("./routes/jakes.route")
tset (app);
console.log(tset)

// run server---------------------------------------------
app.listen(PORT,()=>{
    console.log(`my server🎯🎯runing${PORT}🎯🎯`)
})