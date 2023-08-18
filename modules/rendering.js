export function renderTodoItem(todosContainer, todoItem) {
  const todoItemContainer = document.createElement('div');
  // ... (rest of the rendering logic)
}

export function removeHorizontalLine(todoItemId) {
  // ... (rest of the code)
}

export function saveTodosToLocalStorage(todos) {
  localStorage.setItem('todos', JSON.stringify(todos));
}
