const todos = document.querySelectorAll('.todo');

const check = () =>{
    todos.forEach((todo)=>{
        // console.log(todo.children[0].checked);
        //  console.log(todo.children[1].children[1]);
        if (todo.children[0].checked){
            todo.children[1].children[0].style.textDecoration = 'line-through';
            todo.children[1].children[1].style.textDecoration = 'line-through';
        }else{
            todo.children[1].children[0].style.textDecoration = 'none';
            todo.children[1].children[1].style.textDecoration = 'none';
        }
    })
}
