import React, { Component } from 'react';
import FeaturedProjects from '../components/FeaturedProjects.js';
import AllProjects from '../components/AllProjects.js';

class Home extends Component {
    render(){
        return (
          <div>
            <div className="app-page">
              <div className="app-content">
                <div className="app-content__projects">
                  <h1 className="app-content__header">Daniel Stockham</h1>
                  <p className="app-content__tagline">My featured projects that were done recently. Something to look at while you're here</p>
                  <FeaturedProjects />
                </div>
              </div>
            </div>
          </div>
        )
    }
}

export default Home
