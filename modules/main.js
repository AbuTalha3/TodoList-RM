import './style.css';
import { renderTodoItem, removeHorizontalLine, saveTodosToLocalStorage } from './rendering';
import { attachEventListeners } from './eventListeners';

document.addEventListener('DOMContentLoaded', () => {
  const textInputField = document.querySelector('#text-input-field');
  const addButton = document.querySelector('#add-button');
  const todosContainer = document.querySelector('.todos-container');

  let todos = JSON.parse(localStorage.getItem('todos')) || [];

  todos.forEach(todoItem => renderTodoItem(todosContainer, todos, todoItem)); // Pass 'todos' array

  addButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (textInputField.value.trim().length === 0) {
      return;
    }

    const todoItem = {
      text: textInputField.value,
      completed: false,
      index: todos.length + 1,
    };

    todos.push(todoItem);
    saveTodosToLocalStorage(todos);

    textInputField.value = '';

    renderTodoItem(todosContainer, todoItem);
  });

  attachEventListeners(todos, todosContainer);
});
