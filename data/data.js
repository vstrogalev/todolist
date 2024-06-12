import { renderAfterChange } from '../renderers/setRenderer.js';

export let dataTodos = [
  {
    id: 1,
    task: 'Learn HTML',
    edit: false
  },
  {
    id: 2,
    task: 'Learn CSS',
    edit: false
  },
  {
    id: 3,
    task: 'Learn JS',
    edit: false
  },
  {
    task: 'Learn React',
    edit: false
  }
];

export function addTodo(task) {
  dataTodos = [...dataTodos, {
    id: Date.now(),
    task: task, 
    edit: false
  }];
  renderAfterChange('root');
}

export function deleteTodo(idToDelete) {
  dataTodos = dataTodos.filter((el) => el.id !== idToDelete);
  renderAfterChange('root');
}

export function changeToEditModeTodo(idToEdit) {
  dataTodos.forEach(el => {
    if (el.id === idToEdit) {
      el.edit = true;
    }
  });
  renderAfterChange('root');
}

export function changeTodo(idToChange, task) {
  dataTodos.forEach(el => {
    if (el.id === idToChange) {
      el.task = task;
      el.edit = false;
    }
  })
  renderAfterChange('root');
}

export function getDataTodos() {
  return dataTodos;
}