import React, { Component } from 'react';
import FeaturedProjects from '../components/FeaturedProjects.js';
import getProjects from '../api/getProjects';

class Home extends Component {
    constructor() {
      super()
      this.state = {
        projects: null
      }
    }

    componentDidMount() {
      const projects = this.state.projects;
      if(projects === null) {
        getProjects.then((projects) => {
          this.setState({ projects })
        });
      }
    }

    render(){
        return (
          <div>
            <div className="app-page">
              <div className="app-content">
                <div className="app-content__projects">
                  <h1 className="app-content__header">Daniel Stockham</h1>
                  <p className="app-content__tagline">My featured projects that were done recently. Something to look at while you're here</p>
                  <FeaturedProjects projects={this.state.projects} />
                </div>
              </div>
            </div>
          </div>
        )
    }
}

export default Home
