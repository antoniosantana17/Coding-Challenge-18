// src/App.js
import React from 'react';
import Toolbar from './components/Toolbar';

function App() {
  return (
    <div className="App">
      <Toolbar>
        <h1>Interactive Media Toolbar</h1>
      </Toolbar>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import Toolbar from './components/Toolbar';
import RateMovieButton from './components/RateMovieButton';

function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <div className="App">
      <Toolbar>
        <h1>Interactive Media Toolbar</h1>
        <RateMovieButton movie={selectedMovie} />
      </Toolbar>
    </div>
  );
}

export default App;


