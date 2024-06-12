import { DeleteTodo } from '../DeleteTodo/DeleteTodo.js';
import { EditTodo } from '../EditTodo/EditTodo.js';
import { changeToEditModeTodo } from '../../../data/data.js';

export function Todo(todo) {
  const task = document.createElement('li'); // <li>Learn HTML <button>❌</button></li>
  // if editable <input value="Learn JS"> instead of textContent
  if (todo.edit) {
    task.appendChild(EditTodo(todo.task, todo.id));
  } else {
    
    const todoEditButton = document.createElement('button');
    todoEditButton.style = `
    background: none;
    margin: 0;
    padding: 0;
    cursor: pointer;
    border: none;
    `;
    todoEditButton.textContent = todo.task + ' ';
    todoEditButton.appendChild(DeleteTodo(todo.id));
    todoEditButton.addEventListener('click', () => {
      changeToEditModeTodo(todo.id)
    })
    task.append(todoEditButton);
  }
  
  return task;
}