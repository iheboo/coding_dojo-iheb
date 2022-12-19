const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true }));

require('./config/mongoose.config');

// ROUTES
require('./routes/author.routes')(app);
// PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server run on port ${PORT}...`));