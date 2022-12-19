const { Author } = require('../models/author.model');

// ADD NEW AUTHOR
module.exports.addAuthor = (req, res) => {
  Author.create(req.body)
    .then((author) => res.json({ author }))
    .catch((err) => res.status(400).json(err));
};

// GET ALL AUTHORS
module.exports.getAllAuthors = (req, res) => {
  Author.find()
    .then((authors) => res.json(authors))
    .catch((err) => res.status(400).json(err));
};
// GET ONE AUTHOR BY ID
module.exports.getOneAuthor = (req, res) => {
  Author.findOne({ _id: req.params.id })
    .then((author) => res.json(author))
    .catch((err) => res.status(400).json(err));
};

// UPDATE AUTHOR
module.exports.updateAuthor = (req, res) => {
  Author.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((author) => res.json({ author }))
    .catch((err) => res.status(400).json(err));
};

// DELETE AUTHOR
module.exports.deleteAuthor = (req, res) => {
  Author.deleteOne({ _id: req.params.id })
    .then((result) => res.json({ result }))
    .catch((err) => res.status(400).json(err));
};

// ************* BOOK ****************

// module.exports.addBook = (req, res) => {
//   Author.findOneAndUpdate(
//     { _id: req.params.id },
//     { $push: { books: req.body } },
//     { new: true, runValidators: true }
//   )
//     .then((author) => res.json(author))
//     .catch((err) => res.status(400).json(err));
// };
