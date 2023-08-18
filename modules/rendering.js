export function renderTodoItem(todosContainer, todos, todoItem) {
  const todoItemContainer = document.createElement('div');
  todoItemContainer.classList.add('todo-item-container');
  const todoItemId = `todo-item-${todoItem.index}`;
  todoItemContainer.id = todoItemId;
  todosContainer.appendChild(todoItemContainer);

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = 'todo-checkbox';
  checkbox.checked = todoItem.completed;
  todoItemContainer.prepend(checkbox);

  const todoText = document.createElement('p');
  todoText.id = 'todo-text';
  todoText.innerText = todoItem.text;
  todoItemContainer.appendChild(todoText);

  todoText.addEventListener('click', () => {
    todoText.contentEditable = true;
    todoText.focus();
  });

  todoText.addEventListener('blur', () => {
    todoText.contentEditable = false;
    todoItem.text = todoText.innerText;
    saveTodosToLocalStorage();
  });

  const deleteButton = document.createElement('button');
  deleteButton.id = 'delete-button';
  const deleteIcon = document.createElement('i');
  deleteIcon.classList.add('fas', 'fa-trash');
  deleteButton.appendChild(deleteIcon);
  todoItemContainer.appendChild(deleteButton);

  deleteButton.addEventListener('click', () => {
    const parent = deleteButton.parentElement;
    parent.parentElement.removeChild(parent);
    removeHorizontalLine(todoItemId);

    todos = todos.filter((item) => item.index !== todoItem.index);

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

    saveTodosToLocalStorage();
  });

  checkbox.addEventListener('change', () => {
    todoItem.completed = checkbox.checked;
    saveTodosToLocalStorage(todos);

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

export function removeHorizontalLine(todoItemId) {
  const hrId = `${todoItemId}-hr`;
  const horizontalLine = document.getElementById(hrId);
  if (horizontalLine) {
    horizontalLine.parentElement.removeChild(horizontalLine);
  }
}

export function saveTodosToLocalStorage(todos) {
  localStorage.setItem('todos', JSON.stringify(todos));
}
