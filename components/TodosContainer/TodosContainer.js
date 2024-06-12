import { AddTodo } from "../AddTodo/AddTodo.js";
import { DialogNewTask } from "../DialogNewTask/DialogNewTask.js";
import { Todos } from "../Todos/Todos.js";

export function TodosContainer() {
  const todosContainer = document.createElement('div');
  todosContainer.append(Todos(), AddTodo(), DialogNewTask());
  
  return todosContainer;
}