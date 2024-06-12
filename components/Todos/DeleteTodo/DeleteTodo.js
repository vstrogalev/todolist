import { deleteTodo } from '../../../data/data.js'

export function DeleteTodo(idx) {
  const deleteButton = document.createElement('button');
  deleteButton.textContent = '❌';
  deleteButton.addEventListener('click', () => {
    deleteTodo(idx);
  })
  
  return deleteButton;
}