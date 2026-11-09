import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home">
      <h1>Welcome to Online Bookstore</h1>
      <p>Browse, search, and purchase your favorite books easily</p>
      <Link to="/browse">
        <button>Explore Books Now</button>
      </Link>
    </div>
  );
}

export default Home;