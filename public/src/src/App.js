import React, { useState } from 'react';
import './App.css';

function App() {
  const [grid] = useState([
    ['', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
  ]);

  return (
    <div className="App">
      <header className="app-header">
        <h1>🐊 Snappy English Daily Crossword</h1>
        <p>Coming Soon!</p>
      </header>

      <main className="crossword-container">
        <div className="crossword-grid">
          {grid.map((row, rowIndex) => (
            <div key={rowIndex} className="crossword-row">
              {row.map((cell, colIndex) => (
                <div
                  key={`${rowIndex}-${colIndex}`}
                  className="crossword-cell white-cell"
                >
                  <span className="cell-letter">{cell}</span>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="clues-section">
          <div className="clues-column">
            <h2>Across</h2>
            <div className="clue">
              <strong>1.</strong> Coming soon...
            </div>
          </div>
          
          <div className="clues-column">
            <h2>Down</h2>
            <div className="clue">
              <strong>1.</strong> Coming soon...
            </div>
          </div>
        </div>
      </main>

      <footer className="app-footer">
        <p>© 2025 Snappy English | Daily Crossword Puzzle</p>
      </footer>
    </div>
  );
}

export default App;
