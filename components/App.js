import { Title } from './Title/Title.js';
import { TodosContainer } from './TodosContainer/TodosContainer.js';

export function App() {
  const app = document.createElement('div');
  const hr = document.createElement('hr');

  app.append(
    hr, 
    Title(), 
    TodosContainer()
  );
  return app;
}