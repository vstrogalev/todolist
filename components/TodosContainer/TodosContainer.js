import './todosContainer.css';

export function TodosContainer(children) {
  const todosContainer = document.createElement('div');
  todosContainer.innerHTML = children;
  
  return todosContainer;
}