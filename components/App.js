import { Title } from './Title/Title.js'
// import './app.css';


export function App() {
  const app = document.createElement('div');
  const hr = document.createElement('hr');
  
  app.append(hr, Title());
  
  return app;
}