import { TodoList } from "../components/TodoList.js";

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

// функция, в которую передаем команду и данные, типа диспетчер
// событие - добавить таску, есть данные новой таски
export function addTodo(task) {
  dataTodos = [...dataTodos, {task: task, edit: false}];
  TodoList('root');
}
// событие - удалить таску, есть данные ИД удаляемой таски
export function deleteTodo(idxToDelete) {
  dataTodos = dataTodos.filter((el, index) => index !== idxToDelete);
  TodoList('root');
}
// событие - редактировать таску