const mongoose = require('mongoose');
const Author = mongoose.model('Author');

module.exports = {

    getAuthors: function (req, res) {
        Author.find().sort('name')
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },

    createNewAuthor: function (req, res) {
        var newAuthor = new Author(req.body);
        newAuthor.save()
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },

    removeOne: function (req, res) {
        const { id } = req.params;
        Author.findOneAndDelete({ _id: id })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },

    showOne: function (req, res) {
        const { id } = req.params;
        Author.findOne({ _id: id })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    
        updateOne: function(req, res){
            const { id } = req.params;
            Author.findOneAndUpdate({_id: id}, req.body, {runValidators: true})
                .then(data => res.json(data))
                .catch(err=> res.json(err));
        }

}