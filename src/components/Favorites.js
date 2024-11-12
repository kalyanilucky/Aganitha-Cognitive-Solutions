import React from 'react';

const Favorites = ({ favorites }) => (
  <div>
    <h2>Favorites</h2>
    {favorites.map((book) => (
      <div key={book.key}>
        <h3>{book.title}</h3>
      </div>
    ))}
  </div>
);

export default Favorites;
