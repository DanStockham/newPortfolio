import React, { Component } from 'react'
import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router';
import Wrapper from './Wrapper.js';
import Home from './pages/Home.js';
import Projects from './pages/Projects.js';
import AboutMe from './pages/AboutMe.js';
import Contact from './pages/Contact.js';
import NotFound from './pages/NotFound.js';
import './App.scss';

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={Wrapper}>
          <IndexRoute component={Home} />
          <Route path='projects' component={Projects} />
          <Route path='about-me' component={AboutMe} />
          <Route path='contact' component={Contact} />
          <Route path='*' component={NotFound} />
        </Route>
      </Router>
    )
  }
}

export default App;
