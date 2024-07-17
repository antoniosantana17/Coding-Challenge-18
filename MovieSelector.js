// src/components/MovieSelector.js
import React from 'react';

const MovieSelector = ({ movies, onSelect }) => {
  return (
    <select onChange={(e) => onSelect(e.target.value)}>
      <option value="">Select a Movie</option>
      {movies.map((movie) => (
        <option key={movie} value={movie}>
          {movie}
        </option>
      ))}
    </select>
  );
};

export default MovieSelector;
