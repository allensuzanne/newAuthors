const mongoose = require('mongoose');
const Author = mongoose.model('Author');
const author = require('../controllers/authors.js');
const path = require('path');
module.exports = function (app) {


    app.get('/api/read', function (req, res) {
        author.getAuthors(req, res);
    });

    app.post('/api/new', function (req, res) {
        author.createNewAuthor(req, res);
    });


    app.delete('/api/delete/:id', function (req, res) {
        author.removeOne(req, res);
    });

    app.get('/api/read/:id', function(req, res){
        author.showOne(req, res);
    });
    
        app.put('/api/edit/:id', function(req, res){
            author.updateOne(req, res);
        });

    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    }); //everything goes before this route
}