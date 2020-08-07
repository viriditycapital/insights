import React from 'react';
import viridity_icon from './viridity_large.png';
import './App.scss';
var Latex = require('react-latex');

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
          <p>
          One of the strategies we use here at Viridity is IV-crushing for
          options.
          </p>
          <p>
          The idea is that when an option expires, if it is OTM, it will
          expire worthless. If the option is very volatile, it will have
          expensive options, and once expiration date hits, even if the
          volatility of the stock is very high, the option will have its
          value "crushed" to 0.
          </p>
          <p>
          This is why we like to trade more volatile stocks, such as BYND,
          SPCE, and stocks during earnings weeks.
          Of course, there is a risk of the stock being more volatile than
          expected, but if we manage our risk properly, we should be able to
          limit our losses.
          </p>
          <p>
            <a href="https://viriditycapital.github.io/theta/">Theta </a> 
            <Latex>
            is our app that does volatility analysis. We have a few models on the site.
            One of our models is a EWMA of the volatility of the stock.
            We calculate the EWMA by the following, where $\sigma$ is the volatility of the stock 
            and $u$ is the return of the stock.</Latex>
            We calculate historical volatility, and run an EWMA on the historical returns squared,
            <Latex displayMode={true}>
              {'$$\\sigma_n^2 = \\lambda \\sigma_{n-1} + (1-\\lambda)u_{n-1}^2$$'}
            </Latex>
          </p>
        </section>
        <section className="blog-post">
          <p>Beyond Meat (NYSE:BYND) is a Los Angeles-based producer of
          plant-based meat substitutes founded in 2009 by Ethan Brown. The
          company's initial products became available across the United
          States in 2012. The company has products designed to simulate
          chicken, beef, and pork sausage. As of 2020, Beyond products are
          widely available in most U.S. grocery stores, and the company's web
          site lists availability at over 60 restaurant chains and venues
          such as stadiums and campus cafeterias.</p>
        </section>
        <section className="blog-post">
          <p>Virgin Galactic (NYSE:SPCE) is a British spaceflight company
          within the Virgin Group. It is developing commercial spacecraft and
          aims to provide suborbital spaceflights to space tourists and
          suborbital launches for space science missions. SpaceShipTwo,
          Virgin Galactic's suborbital spacecraft, is air launched from
          beneath a carrier airplane known as White Knight Two.</p>
        </section>
      </div>
    </div>
  );
}

export default App;
