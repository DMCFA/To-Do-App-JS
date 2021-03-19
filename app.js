// SELECTORS
const toDoInput = document.querySelector('.todo-input');
const toDoButton = document.querySelector('.todo-button');
const toDoList = document.querySelector('.todo-list');


// EVENT LISTENERS
toDoButton.addEventListener('click', addToDo);


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