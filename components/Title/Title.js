import './title.css';

export function Title() {
  const title = document.createElement('h1');
  title.classList.add('cla');
  title.textContent = 'Todolist:';
  
  return title;
}