import { dataTodos } from '../../data/data.js'
import { Todo } from './Todo/Todo.js'

export function Todos() {
  const todos = document.createElement('ol');

  dataTodos.forEach((todo, idx) => {
    todos.appendChild(Todo(todo, idx));
  })
  
  return todos;
}