import { Todos } from "../Todos/Todos.js";

export function TodosContainer() {
  const todosContainer = document.createElement('div');
  todosContainer.append(Todos());
  
  return todosContainer;
}