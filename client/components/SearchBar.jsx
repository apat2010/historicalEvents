import React, { useState, useEffect } from 'react';

export default function SearchBar({searchData}) {
  const [wordSearched, setWordSearched] = useState('');

  const handleChange = (event) => {
    setWordSearched(event.target.value)
  }

  const handleSubmit= (event) => {
    alert('An search was submitted: ' + wordSearched);
    searchData(wordSearched);
    event.preventDefault();
  }


  return (
    <form onSubmit={handleSubmit} className="search-form">
      <label>
        Search for events:
        <textarea value={wordSearched} onChange={handleChange} />
      </label>
      <button type="submit" value="Submit"> Submit </button>
    </form>
  );
}