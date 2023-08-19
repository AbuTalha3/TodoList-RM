function saveTodosToLocalStorage(todos) {
  localStorage.setItem('todos', JSON.stringify(todos));
}

export function updateStatus(index, completed) {
  const todos = JSON.parse(localStorage.getItem('todos')) || [];
  const todoItem = todos.find((item) => item.index === index);
  if (todoItem) {
    todoItem.completed = completed;
    saveTodosToLocalStorage(todos);
  }
}

export function clearCompleted(todos) {
  const remainingTodos = todos.filter((item) => !item.completed);
  saveTodosToLocalStorage(remainingTodos);
  return remainingTodos;
}