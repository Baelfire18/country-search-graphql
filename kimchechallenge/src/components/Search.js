import React from 'react';
import '../styles/search.css';

export default function SearchBar(props) {
  const { set } = props;
  return (
      <input
        className="search-bar"
        type="text"
        placeholder="🔍Search..."
        onChange={(e) => {
          set(e.target.value);
        }}
      />
  );
}
