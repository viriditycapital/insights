import React from 'react';
import viridity_icon from './viridity_large.png';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={viridity_icon} className="App-logo" alt="logo" />
        <p className="App-text">
          Insights by Viridity Capital
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
      <div className="blog">
        <section className="blog-post">
          <p>Beyond Meat (NYSE:BYND) is a Los Angeles-based producer of plant-based meat substitutes founded in 2009 by Ethan Brown. The company's initial products became available across the United States in 2012. The company has products designed to simulate chicken, beef, and pork sausage. As of 2020, Beyond products are widely available in most U.S. grocery stores, and the company's web site lists availability at over 60 restaurant chains and venues such as stadiums and campus cafeterias.</p>
        </section>
        <section className="blog-post">
          <p>Virgin Galactic (NYSE:SPCE) is a British spaceflight company within the Virgin Group. It is developing commercial spacecraft and aims to provide suborbital spaceflights to space tourists and suborbital launches for space science missions. SpaceShipTwo, Virgin Galactic's suborbital spacecraft, is air launched from beneath a carrier airplane known as White Knight Two.</p>
        </section>
      </div>
    </div>
  );
}

export default App;
