import { DeleteTodo } from '../DeleteTodo/DeleteTodo.js';
import { EditTodo } from '../EditTodo/EditTodo.js';

export function Todo(todo, idx) {
  const task = document.createElement('li'); // <li>Learn HTML <button>❌</button></li>
  // if editable <input value="Learn JS"> instead of textContent
  if (todo.edit) {
    task.appendChild(EditTodo(todo.task));
  } else {
    task.textContent = todo.task + ' ';
    task.appendChild(DeleteTodo(idx));
  }
  
  return task;
}