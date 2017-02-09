import React, { Component } from 'react';
import Projects from './Projects.js';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-page">
          <div className="app-nav">
            <ul className="app-nav__links">
              <li><div className="app-nav__logo-name">DanStockham</div></li>
              <li><a href="">Home</a></li>
              <li><a href="">Projects</a></li>
              <li><a href="">About Me</a></li>
              <li><a href="">Contact</a></li>
            </ul>
          </div>
          <div className="app-content">
            <div className="app-content__projects">
              <h1 className="app-content__projects-header">My Creative and Modern Projects</h1>
              <p className="app-content__projects-tagline">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sapien ante, cursus non imperdiet eget.</p>
              <Projects/>
            </div>
          </div>
        </div>
        <div className="app-sidebar">
          <div className="app-sidebar__card">Hello World</div>
          <div className="app-sidebar__card">Hello World</div>
          <div className="app-sidebar__card">Hello World</div>
          <div className="app-sidebar__card">Hello World</div>
          <div className="app-sidebar__card">Hello World</div>
        </div>
        <footer className="app-footer">
          HelloWorld
        </footer>
    </div>

    );
  }
}

export default App;
