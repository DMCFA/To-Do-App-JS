// SELECTORS
const toDoInput = document.querySelector('.todo-input');
const toDoButton = document.querySelector('.todo-button');
const toDoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.todo-filter')


// EVENT LISTENERS
document.addEventListener('DOMContentLoaded', getToDos)
toDoButton.addEventListener('click', addToDo);
toDoList.addEventListener('click', deleteItem);
toDoList.addEventListener('click', completeItem);
filterOption.addEventListener('click', toDoFilter);


// FUNCTIONS
function addToDo(event) {
    // prevent page from refreshing
    event.preventDefault();
    // create toDo div
    const toDoDiv = document.createElement('div');
    toDoDiv.classList.add('todo');
    // create li
    const newToDo = document.createElement('li');
    newToDo.innerText = toDoInput.value
    newToDo.classList.add('todo-item');
    toDoDiv.appendChild(newToDo);
    //add to do to local storage
    saveToDo(toDoInput.value)
    // complete button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    toDoDiv.appendChild(completedButton);
    // delete button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'
    trashButton.classList.add('trash-btn');
    toDoDiv.appendChild(trashButton);
    // append to list
    toDoList.appendChild(toDoDiv);
    // clear input value
    toDoInput.value = ""
};

// delete an item from the list function
function deleteItem(event) {
    const item = event.target;
    //delete
    if (item.classList[0] === "trash-btn") {
    const toDo = item.parentElement;
    toDo.classList.add("deleted");
    removeLocalStorage(toDo);
    toDo.addEventListener('transitionend', function() {
        toDo.remove()
    });
}};

//complete item from the list function
function completeItem(event) {
    const item = event.target;
    if (item.classList[0] === 'complete-btn') {
    const toDo = item.parentElement;
    toDo.classList.toggle("completed");
}};

function toDoFilter(event) {
    const todos = toDoList.childNodes;
    todos.forEach(function(todo) {
        switch (event.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if (!todo.classList.contains("completed")) {
                    todo.style.display = "flex"
                } else {
                    todo.style.display = "none";
                }
        };
    });
};

function saveToDo(toDo) {
    //check if it's already stored
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    };
    todos.push(todo)
    localStorage.setItem('todos', JSON.stringify(todos));
}

function getToDos() {
    //check if it's already stored
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    };
    todos.forEach(function(todo) {
    // create toDo div
    const toDoDiv = document.createElement('div');
    toDoDiv.classList.add('todo');
    // create li
    const newToDo = document.createElement('li');
    newToDo.innerText = todo
    newToDo.classList.add('todo-item');
    toDoDiv.appendChild(newToDo);
    // complete button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    toDoDiv.appendChild(completedButton);
    // delete button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'
    trashButton.classList.add('trash-btn');
    toDoDiv.appendChild(trashButton);
    // append to list
    toDoList.appendChild(toDoDiv);
    }
)};

function removeLocalStorage(toDo) {
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }; 
    const toDoIndex = toDo.children[0].innerText;
    todos.splice(todos.indexOf(toDoIndex), 1);
    localStorage.setItem("todos", JSON.stringify(todos));
}