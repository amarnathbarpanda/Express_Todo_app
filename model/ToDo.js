const mongoose = require('mongoose');

//defining schema for todo
const todoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, 
    },
    category: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    }
},{
    timestamps: true
});

//creating model using schema
const ToDo = mongoose.model("ToDo", todoSchema);
module.exports = ToDo;