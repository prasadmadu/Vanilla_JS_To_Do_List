//selectors
const todoInput = document.querySelector(".todoinput");
const todoButton = document.querySelector(".todobutton");
const todoList = document.querySelector(".todolist");
const filterOption = document.querySelector(".filtertodo");
//event listeners
todoButton.addEventListener("click", addToDo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);
//functions
function addToDo(event){
  //prevent form from submitting
  event.preventDefault();
  //todo div
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');
  //create li
  const newTodo = document.createElement('li');
  newTodo.innerText = todoInput.value;
  newTodo.classList.add('todoitem');
  todoDiv.appendChild(newTodo);
  //check mark button
  const completedButton = document.createElement('button');
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add('completebtn');
  todoDiv.appendChild(completedButton);
    //check trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trashbtn');
    todoDiv.appendChild(trashButton);
    //append to list
    todoList.appendChild(todoDiv);
    //clear to do value
    todoInput.value = "";
}

function deleteCheck(e){
  const item = e.target;
  //delete todo
  if(item.classList[0] === "trashbtn"){
    const todo = item.parentElement;
    //animation
    todo.classList.add("fall");
    todo.addEventListener('transitionend', function(){
        todo.remove();
      }
    )
  }

  //check mark
  if(item.classList[0] === "completebtn"){
    const todo = item.parentElement;
    todo.classList.toggle("completed")
  }
}
