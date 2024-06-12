import { dataTodos } from '../../data/data.js'
import { Todo } from './Todo/Todo.js'

export function Todos() {
  const todos = document.createElement('ol');

  dataTodos.forEach(todo => {
    todos.appendChild(Todo(todo));
  })
  
  return todos;
}