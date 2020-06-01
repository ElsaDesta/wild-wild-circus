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
    }
});

const actmodel = mongoose.model('Act', actSchema);
module.exports = actmodel;
