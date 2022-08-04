//getting all the libraries and modules
const express = require('express');
const todoRoutes = require('./router/todoRoutes');
const bodyParser = require('body-parser');
const db = require('./config/mongoose');
const ToDo = require('./model/ToDo');
const app = express();

const port = 8000;

// setting up views
app.set('view engine', 'ejs');
app.set('views', './views');

// middleware
app.use(bodyParser.urlencoded({extended: false}));

//accessing static files
app.use(express.static('assets'));

//specifying routes
app.use('/', todoRoutes);

// read todos from mongodb
app.get('/', async (req, res)=>{
   
    const todos = await ToDo.find();
    return res.render('home', {
        title: 'Todo App',
        todos: todos
    });
});


// listening to port
app.listen(port, (err)=>{
    if(err){
        console.log('Error in running server');
        return;
    }
    console.log('Server is running on port', port);
});