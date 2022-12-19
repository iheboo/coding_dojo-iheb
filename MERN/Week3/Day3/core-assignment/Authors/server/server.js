const express = require('express');
const app = express();
const cors = require('cors');



// midellwhere (use!!!!)
app.use(express.json(), express.urlencoded({ extended: true }));
app.use(cors())

// conction db 
require('./config/mongoose.config');

// Routes
require('./routes/author.routes')(app)

// for run the server (process.env.PROT:::for online)
const PROT = process.env.PROT || 8000
app.listen(PROT,() => console.log('the server is running ✅✅'))