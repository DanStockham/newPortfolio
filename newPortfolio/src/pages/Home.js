import React, { Component } from 'react';
import FeaturedProjects from '../FeaturedProjects.js';

class Home extends Component {
    render(){
        return (
          <div>
          <div className="app">
            <div className="app-page">
              <div className="app-content">
                <div className="app-content__projects">
                  <h1 className="app-content__projects-header">My Creative and Modern Projects</h1>
                  <p className="app-content__projects-tagline">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sapien ante, cursus non imperdiet eget.</p>
                </div>
              </div>
              <div className="app-sidebar">
                <div className="app-sidebar__card">Hello World</div>
                <div className="app-sidebar__card">Hello World</div>
                <div className="app-sidebar__card">Hello World</div>
              </div>
            </div>
          </div>
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
}

export default Home
