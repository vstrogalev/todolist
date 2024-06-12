import { dataTodos } from '../../data/data.js'
import { DeleteTodo } from './DeleteTodo/DeleteTodo.js'
import { EditTodo } from './EditTodo/EditTodo.js';

export function Todos() {
  const todos = document.createElement('ol');

  dataTodos.forEach(todo => {
    const task = document.createElement('li'); // <li>Learn HTML <button>❌</button></li>
    // if editable <input value="Learn JS"> instead of textContent
    if (todo.edit) {
      task.appendChild(EditTodo(todo.task));
    } else {
      task.textContent = todo.task + ' ';
      task.appendChild(DeleteTodo());
    }
    todos.appendChild(task);
  })
  
  return todos;
}