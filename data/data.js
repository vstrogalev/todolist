export let dataTodos = [
  {
    task: 'Learn HTML',
    edit: false
  },
  {
    task: 'Learn CSS',
    edit: false
  },
  {
    task: 'Learn JS',
    edit: true
  },
  {
    task: 'Learn React',
    edit: false
  }
];

export function addTodo(task) {
  dataTodos = [...dataTodos, {task: task, edit: false}];
  renderAfterChange('root');
}

export function deleteTodo(idxToDelete) {
  dataTodos = dataTodos.filter((el, index) => index !== idxToDelete);
  renderAfterChange('root');
}

export function getDataTodos() {
  return dataTodos;
}