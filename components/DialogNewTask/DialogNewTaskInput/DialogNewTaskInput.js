export function DialogNewTaskInput(handler) {
  const input = document.createElement('input');
  input.placeholder = 'Input your new task';
  input.addEventListener('change', handler)
  return input
}