export function EditTodo(textInput) {
  const editTodo = document.createElement('input'); // <li><input value="Learn JS"></li>
  editTodo.value = textInput;
  
  return editTodo;
}