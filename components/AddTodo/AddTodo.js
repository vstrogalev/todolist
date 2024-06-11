import './addTodo.css';

export function AddTodo() {
  const addTodo = document.createElement('button');
  addTodo.textContent = '+ add';
  
  return addTodo;
}