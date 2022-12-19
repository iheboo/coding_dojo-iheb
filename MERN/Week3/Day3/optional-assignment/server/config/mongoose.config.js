const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost/beltreviewauthordb')
  .then(() => console.log(`Database connection establish`))
  .catch((err) => console.log('Something went wrong with Db ', err));