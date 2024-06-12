export const dataTodos = [
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

// функция, в которую передаем команду и данные, типа диспетчер
// событие - добавить таску, есть данные новой таски
// событие - удалить таску, есть данные ИД удаляемой таски
export function deleteTodo(idxToDelete) {
  dataTodos.filter((el, index) => index !== idxToDelete);
  
}
// событие - редактировать таску