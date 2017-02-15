import React, {Component} from 'react';
import { Link } from 'react-router';
import './App.scss';

export class Nav extends Component {
  constructor() {
    super();
    this.state = {
      scrollPos: 0
    }
    this.setScrollPosition = this.setScrollPosition.bind(this);
  }
  componentWillMount() {

    var ticking = false;

    window.addEventListener("scroll", findScrollPosition, false);

    function findScrollPosition(e) {
      let prevScrollPos = window.scrollY;
      if (!ticking) {
        this.setScrollPosition(prevScrollPos)
        window.requestAnimationFrame(function() {
          ticking = false;
        });
      }
      ticking = true;
      }

  }

  setScrollPosition(position) {
    this.setState({ scrollPos: position });
  }

  render() {
    return (
    <div className="app-nav">
      <ul className="app-nav__links">
        <li><div className="app-nav__logo-name">DanStockham</div></li>
        <li><Link to='/' >Home</Link></li>
        <li><Link to='/projects' >Projects</Link></li>
        <li><Link to='/about-me' >About Me</Link></li>
        <li><Link to='/contact' >Contact</Link></li>
      </ul>
    </div>
    );
  }
}

export default Nav
