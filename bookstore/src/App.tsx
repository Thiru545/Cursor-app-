import React from 'react';
import './App.css';

const books = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', price: '$10.99', cover: 'https://covers.openlibrary.org/b/id/7222246-L.jpg' },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', price: '$8.99', cover: 'https://covers.openlibrary.org/b/id/8228691-L.jpg' },
  { id: 3, title: '1984', author: 'George Orwell', price: '$9.99', cover: 'https://covers.openlibrary.org/b/id/7222246-L.jpg' },
  { id: 4, title: 'Pride and Prejudice', author: 'Jane Austen', price: '$7.99', cover: 'https://covers.openlibrary.org/b/id/8091016-L.jpg' },
  { id: 5, title: 'Moby-Dick', author: 'Herman Melville', price: '$11.99', cover: 'https://covers.openlibrary.org/b/id/5552226-L.jpg' },
  { id: 6, title: 'The Hobbit', author: 'J.R.R. Tolkien', price: '$12.99', cover: 'https://covers.openlibrary.org/b/id/6979861-L.jpg' },
];

function App() {
  return (
    <div className="App">
      <header className="Bookstore-header">
        <h1>Book Store</h1>
      </header>
      <main className="Bookstore-main">
        <div className="Bookstore-grid">
          {books.map(book => (
            <div className="Bookstore-card" key={book.id}>
              <img src={book.cover} alt={book.title} className="Bookstore-cover" />
              <h2>{book.title}</h2>
              <p className="Bookstore-author">by {book.author}</p>
              <p className="Bookstore-price">{book.price}</p>
              <button className="Bookstore-buy">Buy</button>
            </div>
          ))}
        </div>
      </main>
      <footer className="Bookstore-footer">
        <p>&copy; {new Date().getFullYear()} Book Store. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
