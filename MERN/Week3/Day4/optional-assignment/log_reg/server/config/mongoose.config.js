const mongoose = require('mongoose');

    mongoose.connect('mongodb://127.0.0.1/log_reg')
      .then(() => console.log("Database connection establish🗯"))
      .catch((err) => console.log('Something went wrong with Db🔸 ', err));
