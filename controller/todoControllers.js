const { model } = require('mongoose');
const ToDo = require('../model/ToDo');

// create todo controller
module.exports.createToDo = async (req, res)=>{
    const todo = await ToDo.create(req.body);
    if (!todo) {
        console.log('Todo creation failed!');
        return;
    }
    return res.redirect('back');
}

// delete todo controller
module.exports.deleteToDo = async (req, res) =>{
    const id = req.params.id;
    const deleteTodo = await ToDo.findByIdAndDelete(id);
    return res.redirect('back');
}


// update todo controller
module.exports.updateToDo = async (req, res) =>{
    const updatedTodo = await ToDo.findByIdAndUpdate(req.params.id, req.body);
    console.log(req.body);
    return res.redirect('back');
}