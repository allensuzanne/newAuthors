const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//----------create schema--------------------------------------------------
const authorSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 3},
},
    { timestamps: true });

//----------create model--------------------------------------------------
const Author = mongoose.model('Author', authorSchema);