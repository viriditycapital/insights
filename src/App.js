import React from 'react';
import viridity_icon from './viridity_large.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={viridity_icon} className="App-logo" alt="logo" />
        <p>
          Coming soon: insights and analysis from the team at Viridity Capital
        </p>
        <a
          className="App-link"
          href="http://viriditycapital.github.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check out our homepage
        </a>
      </header>
    </div>
  );
}

export default App;
