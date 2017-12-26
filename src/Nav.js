import React, {Component} from 'react';
import { IndexLink } from 'react-router';
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
        <li><IndexLink activeClassName='active' to='/about-me' >About Me</IndexLink></li>
        <li><IndexLink activeClassName='active' to='/blog'>Blog</IndexLink></li>
        <li><IndexLink activeClassName='active' to='/projects' >Projects</IndexLink></li>
        <li><IndexLink activeClassName='active' to='/contact' >Contact</IndexLink></li>
      </ul>
    </div>
    );
  }
}

export default Nav
