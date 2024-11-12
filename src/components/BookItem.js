import React from 'react';

const BookItem = ({ book, addToFavorites }) => (
  <div>
    <h2>{book.title}</h2>
    {book.cover_i && <img src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`} alt={book.title} />}
    <p>{book.author_name?.join(', ')}</p>
    <button onClick={() => addToFavorites(book)}>Add to Favorites</button>
  </div>
);

export default BookItem;
