import Display from './module/display.js';
const form = document.querySelector('.form');
form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const titleInput = document.querySelector('#first-name').value;
  const authorInput = document.querySelector('#last-name').value;

  Display.addBook(titleInput, authorInput);
  form.reset();
});