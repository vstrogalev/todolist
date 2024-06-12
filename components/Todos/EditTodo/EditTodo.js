import { changeTodo } from '../../../data/data.js'

export function EditTodo(textInput, id) {
  const editTodo = document.createElement('input'); // <li><input value="Learn JS"></li>
  editTodo.value = textInput;
  editTodo.addEventListener('change', (e) => {
    const value = e.target.value.trim();
    if (value !== '') {
      changeTodo(id, value);
    }
  });
  return editTodo;
}