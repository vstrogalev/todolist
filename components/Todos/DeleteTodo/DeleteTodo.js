import { deleteTodo } from '../../../data/data.js'

export function DeleteTodo(id) {
  const deleteButton = document.createElement('button');
  deleteButton.textContent = '❌';
  deleteButton.addEventListener('click', () => {
    deleteTodo(id);
  })
  
  return deleteButton;
}