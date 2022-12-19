const {
    addAuthor,
    getAllAuthors,
    getOneAuthor,
    updateAuthor,
    deleteAuthor,
    addBook,
  } = require('../controllers/author.controller');
  // const {AuthorController} = require('../controllers/author.controller');
  // => AuthorController.addAuthor
  
  module.exports = (app) => {
    app.post('/api/authors', addAuthor);
    app.get('/api/authors', getAllAuthors);
    app.get('/api/authors/:id', getOneAuthor);
    app.put('/api/authors/:id', updateAuthor);
    app.delete('/api/authors/:id', deleteAuthor);
    // BOOK
    // app.put('/api/authors/book/:id', addBook);
  };
  