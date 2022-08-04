const mongoose = require('mongoose');

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

const ToDo = mongoose.model("ToDo", todoSchema);
module.exports = ToDo;