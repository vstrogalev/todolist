import { Title } from './Title/Title.js';
import { TodosContainer } from './TodosContainer/TodosContainer.js';

export function TodoList(rootId) {
  const rootElement = document.getElementById(rootId);
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
  rootElement.appendChild(todoList);
}