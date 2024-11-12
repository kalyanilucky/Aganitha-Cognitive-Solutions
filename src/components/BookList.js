import React from 'react';
import BookItem from './BookItem';

const BookList = ({ books, addToFavorites }) => (
  <div>
    {books.map((book) => (
      <BookItem key={book.key} book={book} addToFavorites={addToFavorites} />
    ))}
  </div>
);

export default BookList;
