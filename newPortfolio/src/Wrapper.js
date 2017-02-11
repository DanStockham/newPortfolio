import React from 'react';
import Nav from './Nav.js';

const Wrapper = (props) => {
    return (
      <div className="app">
        <Nav />
        {props.children}
        <footer className="app-footer">
          <ul className="app-footer__social-media">
            <li className="social-media__link"><i className="fa fa-github-square" aria-hidden="true"></i></li>
            <li className="social-media__link"><i className="fa fa-linkedin-square" aria-hidden="true"></i></li>
            <li className="social-media__link"><i className="fa fa-twitter-square" aria-hidden="true"></i></li>
            <li className="social-media__link"><i className="fa fa-free-code-camp" aria-hidden="true"></i></li>
          </ul>
        </footer>
      </div>
    )
}

export default Wrapper;
