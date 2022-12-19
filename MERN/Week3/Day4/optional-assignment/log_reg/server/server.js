require ('dotenv').config({path:"../server/config/config.env"});
const express = require('express')
const app =express()
const cors = require ('cors')
const cookieParser = require('cookie-parser');



app.use(cors({credentials:true,origin:'http://localhost:3000'}))
app.use(express.json(), express.urlencoded({ extended: true }));
app.use(cookieParser());
// **************************************
require("./config/mongoose.config")
// ****************
require('./routes/user.routes')(app)


const PORT = process.env.PORT ;

app.listen(PORT, () => console.log(`Server run on port ${PORT}♿♿...`));