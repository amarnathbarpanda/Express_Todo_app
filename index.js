const express = require('express');
// const todoRoutes = require('./router/todoRoutes');
const bodyParser = require('body-parser');
const db = require('./config/mongoose');
const ToDo = require('./model/ToDo');
const app = express();

const port = 8000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('assets'));

// app.use('/', todoRoutes);

// let todoArr = [
//     {
//         name: 'Workout',
//         date: 'AUG 4, 2022',
//         category: 'body_care',
//         id: 1
//     },
//     {
//         name: 'Buy vegies',
//         date: 'AUG 4, 2022',
//         category: 'chores',
//         id: 2

//     }, {
//         name: 'Read 10 pages',
//         date: 'AUG 4, 2022',
//         category: 'learning',
//         id: 3

//     }
// ]


app.get('/', async (req, res)=>{
   
    const todos = await ToDo.find();
    return res.render('home', {
        title: 'Todo App',
        todos: todos
    })
})

app.post('/create-todo', async (req, res)=>{
    // console.log(typeof req.body.date);
    // if(!req.body.date)
    //     req.body.date = 'No Deadline';
    // todoArr.push(req.body);

    const todo = await ToDo.create(req.body);
    if(!todo){
        console.log('Todo creation failed!');
        return;
    }
    return res.redirect('back');
});

app.get('/delete-todo/:id', async (req, res)=>{
    const id = req.params.id;
    const deleteTodo = await ToDo.findByIdAndDelete(id);
    return res.redirect('back');
});

app.post('/update-todo/:id', async (req, res)=>{

    const updatedTodo = await ToDo.findByIdAndUpdate(req.params.id ,req.body);
    console.log(req.body);
    return res.redirect('back');
})

// app.get('/', (req, res)=>{
//     return res.render('home', {title: 'World'});
// });

app.listen(port, (err)=>{
    if(err){
        console.log('Error in running server');
        return;
    }
    console.log('Server is running on port', port);
});