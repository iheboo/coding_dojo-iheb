const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, 'Name is required'],
      minlength: [3, 'Name must be 3 characters at least.'],
    },
    // books: [
    //   {
    //     title: {
    //       type: String,
    //       required: true,
    //     },
    //     numberOfPages: {
    //       type: Number,
    //       required: true,
    //     },
    //   },
    // ],
  },
  { timestamps: true }
);

module.exports.Author = mongoose.model('Author', AuthorSchema);