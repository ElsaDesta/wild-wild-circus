const mongoose = require('mongoose');

const Schema = mongoose.Schema
//create Schema

const actSchema = new Schema({
    title: {
        type: String,
        required: true
    },

    detail: {
        type: String,
        required: true
    },
    
    imagepath: {
        type: String,
        required: true
    }
});

 
module.exports = mongoose.model('Act', actSchema);
