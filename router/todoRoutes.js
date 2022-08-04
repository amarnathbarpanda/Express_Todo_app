const express = require('express');
const { createToDo, deleteToDo, updateToDo } = require('../controller/todoControllers');

//initialising router
const router = express.Router();

//routes
router.post('/create-todo', createToDo);
router.get('/delete-todo/:id', deleteToDo);
router.post('/update-todo/:id', updateToDo);

module.exports = router;