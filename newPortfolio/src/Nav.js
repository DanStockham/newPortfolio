import React, {Component} from 'react';
import { Link, IndexLink } from 'react-router';
import './App.scss';

export class Nav extends Component {
  constructor() {
    super();
    this.state = {
      placeholder: null
    }
  }

  render() {
    return (
    <div className="app-nav" style={this.props.passedStyles}>
      <div className="app-nav__logo-name">DanStockham</div>
      <ul className="app-nav__links">
        <li><IndexLink activeClassName='active' to='/' >Home</IndexLink></li>
        <li><Link activeClassName='active' to='/projects' >Projects</Link></li>
        <li><Link activeClassName='active' to='/about-me' >About Me</Link></li>
        <li><Link activeClassName='active' to='/contact' >Contact</Link></li>
      </ul>
    </div>
    );
  }
}

export default Nav
