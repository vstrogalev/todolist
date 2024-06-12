import { deleteTodo } from '../../../data/data.js'

export function DeleteTodo(idx) {
  const deleteTodo = document.createElement('button');
  deleteTodo.textContent = '❌';
  deleteTodo.addEventListener('click', () => {
    deleteTodo(idx);
  })
  
  return deleteTodo;
}