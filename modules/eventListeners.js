export function attachEventListeners(todos, todosContainer) {
  // Event listeners setup
  const clearButton = document.querySelector('.clearer');
  clearButton.addEventListener('click', () => {
    todos = todos.filter(item => !item.completed);
    todosContainer.innerHTML = '';
    todos.forEach((todoItem, index) => {
      todoItem.index = index + 1;
      renderTodoItem(todosContainer, todoItem);
    });
    saveTodosToLocalStorage(todos);
  });

  checkbox.addEventListener('change', () => {
    todoItem.completed = checkbox.checked;
    saveTodosToLocalStorage();

    todos.forEach((item, index) => {
      item.index = index + 1;
      const itemId = `todo-item-${item.index}`;
      const todoItemContainer = document.getElementById(itemId);
      if (todoItemContainer) {
        const todoText = todoItemContainer.querySelector('#todo-text');
        const hrId = `${itemId}-hr`;
        const horizontalLine = document.getElementById(hrId);
        todoItemContainer.id = `todo-item-${item.index}`;
        todoText.id = 'todo-text';
        horizontalLine.id = `${itemId}-hr`;
      }
    });
  });

  const hr = document.createElement('hr');
  hr.id = `${todoItemId}-hr`;
  todosContainer.appendChild(hr);
}

function removeHorizontalLine(todoItemId) {
  const hrId = `${todoItemId}-hr`;
  const horizontalLine = document.getElementById(hrId);
  if (horizontalLine) {
    horizontalLine.parentElement.removeChild(horizontalLine);
  }
}

const clearButton = document.querySelector('.clearer');

clearButton.addEventListener('click', () => {
  todos = todos.filter((item) => !item.completed);

  todosContainer.innerHTML = '';
  todos.forEach((todoItem, index) => {
    todoItem.index = index + 1;
    renderTodoItem(todoItem);
  });

  saveTodosToLocalStorage();
});

function saveTodosToLocalStorage() {
  localStorage.setItem('todos', JSON.stringify(todos));
}
}

export function refreshTodos() {
  const refreshIcon = document.querySelector('.refresh-it');
  refreshIcon.addEventListener('click', () => {
    todos = [];
    todosContainer.innerHTML = '';
    localStorage.removeItem('todos');
  });
}
