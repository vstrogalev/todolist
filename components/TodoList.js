import { Title } from './Title/Title.js';
import { TodosContainer } from './TodosContainer/TodosContainer.js';

export function TodoList(root) {
  const todos = document.querySelector('#todosContainer');
  
  if (todos) { // to update if already exists
    todos.remove();
  } 

  const todoList = document.createElement('div');
  todoList.id = 'todosContainer';
  
  const hr = document.createElement('hr');

  todoList.append(
    hr, 
    Title(), 
    TodosContainer()
  );
  root.appendChild(todoList);
}