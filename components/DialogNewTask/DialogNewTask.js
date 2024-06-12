import { DialogNewTaskInput } from "./DialogNewTaskInput/DialogNewTaskInput.js";
import { DialogNewTaskTitle } from "./DialogNewTaskTitle/DialogNewTaskTitle.js";

export function DialogNewTask() {
  const dialogNewTask = document.createElement('dialog');
  dialogNewTask.append(DialogNewTaskTitle());
  dialogNewTask.append(DialogNewTaskInput());
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

  dialogNewTask.open = true;
  
  return dialogNewTask;
}