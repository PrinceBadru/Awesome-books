/* eslint-disable  max-classes-per-file */

import Book from './book.js';

export default class Display {
  static getBooks() {
    let books;
    if (JSON.parse(localStorage.getItem('books')) == null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static addRemoveEvent() {
    document.querySelectorAll('.removeBtn').forEach((button) => button.addEventListener('click', (event) => {
      event.preventDefault();
      const { id } = button;
      this.removeBook(id);
    }));
  }

  static displayBooks() {
    const books = this.getBooks();
    const book = document.querySelector('.books');
    let display = '';
    books.forEach((book, i) => {
      display += `
          <div class="booksAdded">
          <p>"${book.title}" by ${book.author}</p>
          <button class="removeBtn" id='${i}'>Remove</button>
          </div>`;
    });
    book.innerHTML = display;
    this.addRemoveEvent();
  }

  static addBook(title, author) {
    if (title !== '' && author !== '') {
      const newBook = new Book(title, author);
      const books = this.getBooks();
      books.push(newBook);
      localStorage.setItem('books', JSON.stringify(books));
      this.displayBooks();
    }
  }

  static removeBook(id) {
    let books = this.getBooks();
    const itemToDelete = books[id];
    books = books.filter((item) => item !== itemToDelete);
    // const bookIndex = books.findIndex((item, i) => i === id);
    // books.splice(bookIndex, 1);
    localStorage.setItem('books', JSON.stringify(books));
    this.displayBooks();
  }
}
// window.addEventListener('DOMContentLoaded', () => {
//   this.displayBooks();
// });
// const form = document.querySelector('.form');
// form.addEventListener('submit', (evt) => {
//   evt.preventDefault();
//   Display.addBook();
//   form.reset();
// });
