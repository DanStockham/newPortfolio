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
      console.log(styles);
      return (
        <div className="app">
          <Nav passedStyles={styles}/>
          {this.props.children}
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
