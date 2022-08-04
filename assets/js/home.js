//getting references
const todos = document.querySelectorAll('.todo');
const todoName = document.getElementById('name');
const category = document.getElementById('category');
const date = document.getElementById('date');

// to make the todo text line through on clicking checkbox
const check = () => {
    todos.forEach((todo) => {
        if (todo.children[0].checked) {
            todo.children[1].children[0].classList.add('strike');
            todo.children[1].children[1].classList.add('strike');
        } else {
            todo.children[1].children[0].classList.remove('strike');
            todo.children[1].children[1].classList.remove('strike');
        }
    });
}

const todoList = document.getElementById('todo_list');

todoList.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-pen')) {

        const todo_name = e.target.parentElement.parentElement.children[1].children[0];

        todoName.value = todo_name.innerText;
        
        //show update button
        const updateBtn = document.getElementById('update_btn');

        updateBtn.classList.remove('hidden');
        //hide add button
        document.getElementById('add_btn').classList.add('hidden');

        // getting url from update button link
        const form = document.getElementById('form');
        const updateUrl = form.getAttribute('action');

        // console.log(updateUrl);

        //getting to be updated todo id from data-id attribute of edit button
        const toBeUpdateTodoId = e.target.parentElement.parentElement.children[3].children[0].getAttribute('data-id');

        //adding to be updated todo id to form action url
        form.setAttribute('action', '/update-todo/' + toBeUpdateTodoId);
        
        // e.target.parentElement.parentElement.children[3].children[0].getAttribute('data-id')
        

    }
})
