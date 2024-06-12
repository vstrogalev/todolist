import { DialogNewTaskInput } from "./DialogNewTaskInput/DialogNewTaskInput.js";
import { DialogNewTaskTitle } from "./DialogNewTaskTitle/DialogNewTaskTitle.js";
import { addTodo } from '../../data/data.js'

export function DialogNewTask() {
  function handleChangeInput(e) {
    const value = e.target.value.trim()

    if (value !== '') { // вынести в data
      addTodo(value);
      dialogNewTask.open = false;
    }
  }

  const dialogNewTask = document.createElement('dialog');
  dialogNewTask.id = 'dialogNewTask';
  dialogNewTask.append(DialogNewTaskTitle());
  dialogNewTask.append(DialogNewTaskInput(handleChangeInput));

  dialogNewTask.style = `
    position: fixed;
    /* Фиксированное позиционирование относительно вьюпорта */
    left: 50%;
    /* Позиционирование от левого края вьюпорта */
    top: 50%;
    /* Позиционирование от верхнего края вьюпорта */
    transform: translate(-50%, -50%);
    /* Смещение диалога на 50% его ширины и высоты для центрирования */
  `
  
  return dialogNewTask;
}