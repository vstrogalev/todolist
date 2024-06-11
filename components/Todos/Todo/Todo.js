import { DeleteTodo } from '../DeleteTodo/DeleteTodo';
import './todo.css';

export function Todo() {
  const todo = document.createElement('li');
  todo.textContent = 'Todolist:';
  todo.innerHTML = DeleteTodo();
  
  return title;
}