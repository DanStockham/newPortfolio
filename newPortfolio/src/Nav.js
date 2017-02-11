import React from 'react';
import { Link } from 'react-router';
import './App.scss';

export const Nav = () => {
    return (
    <div className="app-nav">
      <ul className="app-nav__links">
        <li><div className="app-nav__logo-name">DanStockham</div></li>
        <li><Link  to='/' >Home</Link></li>
        <li><Link  to='/projects' >Projects</Link></li>
        <li><Link  to='/about-me' >About Me</Link></li>
        <li><Link  to='/contact' >Contact</Link></li>
      </ul>
    </div>
    );
}
