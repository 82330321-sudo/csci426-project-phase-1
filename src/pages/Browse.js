 import React, { useState } from 'react';
import '../styles/Browse.css';

function Browse() {
  const [books] = useState([
    { id: 1, title: 'React JS Guide', author: 'John Doe', price: 29.99, category: 'Web Programming' },
    { id: 2, title: 'Node.js Mastery', author: 'Jane Smith', price: 35.50, category: 'Backend' },
    { id: 3, title: 'JavaScript Fundamentals', author: 'Alex Karam', price: 19.99, category: 'Programming' },
    { id: 4, title: 'Database Systems', author: 'Samer Ali', price: 42.00, category: 'Databases' }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [cart, setCart] = useState([]);

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addToCart = (book) => {
    setCart([...cart, book]);
  };

  return (
    <div className="browse-container">
      <h2>Browse & Search Books</h2>
      
      <input
        type="text"
        className="search-input"
        placeholder="Search books by title..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="cart-summary">
        <h3>Shopping Cart ({cart.length})</h3>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>{item.title} - ${item.price}</li>
          ))}
        </ul>
      </div>

      <div className="books-grid">
        {filteredBooks.map((book) => (
          <div className="book-card" key={book.id}>
            <h3>{book.title}</h3>
            <p><strong>Author:</strong> {book.author}</p>
            <p><strong>Category:</strong> {book.category}</p>
            <p className="price">Price: ${book.price}</p>
            <button onClick={() => addToCart(book)}>Purchase Book</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Browse;