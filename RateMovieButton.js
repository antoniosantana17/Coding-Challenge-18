// src/components/RateMovieButton.js
import React, { useState } from 'react';

const RateMovieButton = ({ movie }) => {
  const [rating, setRating] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleRate = (rating) => {
    setRating(rating);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2000);
  };

  return (
    <div>
      <h2>{movie ? `Rate ${movie}` : 'Select a movie to rate'}</h2>
      {[1, 2, 3, 4, 5].map((star) => (
        <button key={star} onClick={() => handleRate(star)}>
          {star} Star
        </button>
      ))}
      {submitted && <p>Thank you for rating!</p>}
    </div>
  );
};

export default RateMovieButton;
