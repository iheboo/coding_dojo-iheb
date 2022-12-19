const {AddAuthor,AllAuthor,OneAthor,updateAuthor,deletAuthor,addBook } = require("../controllers/Authors.contro");

module.exports = (app )=>{
    app.post('/api/authors/new',AddAuthor);
    app.get('/api/authors',AllAuthor);
    app.get('/api/authors/:id',OneAthor);
    app.put('/api/authors/:id',updateAuthor);
    app.delete('/api/authors/:id',deletAuthor)
    // book****************
    app.put('/api/authors/books/:id',addBook)
}