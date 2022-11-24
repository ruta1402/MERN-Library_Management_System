const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const bookSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    available: {
        type: Boolean,
        require: true
    }
});

module.exports = mongoose.model("Book", bookSchema);