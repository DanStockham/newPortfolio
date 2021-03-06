import React, { Component } from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Wrapper from './Wrapper.js';
import Home from './pages/Home.js';
import Projects from './pages/Projects.js';
import AboutMe from './pages/AboutMe.js';
import Contact from './pages/Contact.js';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import NotFound from './pages/NotFound.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={Wrapper}>
          <IndexRoute component={Home} />
          <Route path='about-me' component={AboutMe} />
          <Route path='blog' component={Blog} />
          <Route path='blog/:slug' component={BlogPost} />
          <Route path='projects' component={Projects} />
          <Route path='contact' component={Contact} />
          <Route path='*' component={NotFound} />
        </Route>
      </Router>
    )
  }
}

export default App;
