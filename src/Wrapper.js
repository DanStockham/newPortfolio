import React, {Component} from 'react';
import Nav from './Nav.js';
import Footer from './components/Footer';

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
        <div>
          <div className="app">
            <Nav passedStyles={styles}/>
            <div></div>
            {this.props.children}
            <Footer />
          </div>
        </div>
      )
  }
}
