var mongoose = require('mongoose');

var bookSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    review:{
        type: String,
        default:'n/a'
    },
    pages:{
        type: String,
        default:'n/a'
    },
    rating:{
        type: Number,
        require: true,
        min:1,
        max:5
    },
    price:{
        type: String,
        default: 'n/a'
    },
    ownerId:{
        type: String,
        required: true
    }
},{timestamps:true})

var Book = mongoose.model('Book', bookSchema);
module.exports = { Book };
