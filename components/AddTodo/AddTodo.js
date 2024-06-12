export function AddTodo() {
  const addTodo = document.createElement('button');
  addTodo.textContent = '+ add';
  addTodo.addEventListener('click', () => {
    const dialog = document.querySelector('#dialogNewTask');
    if (dialog) {
      dialog.open = true;
    }
  })
  
  return addTodo;
}