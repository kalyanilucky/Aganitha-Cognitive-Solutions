import React from 'react';

const SearchBar = ({ setQuery }) => {
  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.elements.search.value;
    setQuery(query);
  };

  return (
    <form onSubmit={handleSearch}>
      <input type="text" name="search" placeholder="Search for a book..." />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
