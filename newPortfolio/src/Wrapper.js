import React, {Component} from 'react';
import Nav from './Nav.js';

export default class Wrapper extends Component {
    constructor() {
      super();
      this.state = {
        scrollPos: 0
      }
      this.checkScrollState = this.checkScrollState.bind(this);
    }

    componentWillMount() {
      var ticking = false;

      window.addEventListener("scroll", (e) => {
        let prevScrollPos = window.scrollY;
        if (!ticking) {
          window.requestAnimationFrame(function() {
            ticking = false;
          });
        }
        ticking = true;
        this.setState({scrollPos: prevScrollPos});

      }, false);

    }

    checkScrollState() {
      const scrollPos = this.state.scrollPos;
      if(scrollPos >= 80) {
         return {
           background: 'rgba(255,255,255, 1)',
           transition: '1s'
         }
       }
      if(scrollPos >= 40) {
        return {
          background: 'rgba(255,255,255, 0.6)',
          transition: '1s'
        }
      }

    }

    render() {
      const styles = this.checkScrollState();
      return (
        <div className="app">
          <Nav passedStyles={styles}/>
          {this.props.children}
          <footer className="app-footer">
            <ul className="app-footer__social-media">
              <a className="social-media__link" href="https://github.com/danstockham" target="_blank"><li ><i className="fa fa-github-square" aria-hidden="true"></i></li></a>
              <a className="social-media__link"href="https://www.linkedin.com/in/danstockham/" target="_blank"><li ><i className="fa fa-linkedin-square" aria-hidden="true"></i></li></a>
              <a className="social-media__link"href="https://twitter.com/CodeMeAwesome" target="_blank"><li ><i className="fa fa-twitter-square" aria-hidden="true"></i></li></a>
              <a className="social-media__link" href="https://www.freecodecamp.com/danstockham" target="_blank"><li ><i className="fa fa-free-code-camp" aria-hidden="true"></i></li></a>
            </ul>
          </footer>
        </div>
      )
  }
}
