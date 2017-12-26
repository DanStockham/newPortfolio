import React from 'react'

const Footer = (props) => {
  return (
    <footer className="app-footer">
      <ul className="app-footer__social-media">
        <a className="social-media__link" rel="noopener noreferrer" href="https://github.com/danstockham" target="_blank"><li ><i className="fa fa-github-square" aria-hidden="true"></i></li></a>
        <a className="social-media__link" rel="noopener noreferrer" href="https://www.linkedin.com/in/danstockham/" target="_blank"><li ><i className="fa fa-linkedin-square" aria-hidden="true"></i></li></a>
        <a className="social-media__link" rel="noopener noreferrer" href="https://twitter.com/CodeMeAwesome" target="_blank"><li ><i className="fa fa-twitter-square" aria-hidden="true"></i></li></a>
        <a className="social-media__link" rel="noopener noreferrer" href="https://www.freecodecamp.com/danstockham" target="_blank"><li ><i className="fa fa-free-code-camp" aria-hidden="true"></i></li></a>
      </ul>
      <span className="app-footer__resume">
        <a rel="noopener noreferrer" href="http://goo.gl/A7Cbrt" target="_blank"><i className="fa fa-file-text-o"aria-hidden="true"></i>
        <span>Checkout my resume here</span>
        </a>
      </span>
    </footer>
  )
}

export default Footer
