
import './App.css';

import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import BookList from './components/BookList';
import Favorites from './components/Favorites';

const App = () => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    if (query) {
      fetch(`https://openlibrary.org/search.json?title=${query}`)
        .then(response => response.json())
        .then(data => setBooks(data.docs))
        .catch(error => console.error('Error fetching data:', error));
    }
  }, [query]);

  const addToFavorites = (book) => {
    setFavorites([...favorites, book]);
  };

  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <BookList books={books} addToFavorites={addToFavorites} />
      <Favorites favorites={favorites} />
    </div>
  );
};

export default App;

