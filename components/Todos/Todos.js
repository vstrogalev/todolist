import { dataTodos } from '../../data/data.js'
import { DeleteTodo } from './DeleteTodo/DeleteTodo.js'

export function Todos() {
  const todos = document.createElement('ol');

  dataTodos.forEach(todo => {
    const task = document.createElement('li'); // <li>Learn HTML <button>❌</button></li>
    // if editable <input value="Learn JS"> instead of textContent
    task.textContent = todo.task + ' ';
    task.appendChild(DeleteTodo());
    todos.appendChild(task);
  })
  
  return todos;
}