import React, { Component } from 'react'
import AllProjects from '../components/AllProjects.js';
import getProjects from '../api/getProjects';

class Projects extends Component {
  constructor() {
    super();
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
        <div className="app-page">
          <div className="app-content">
            <div className="app-content__project">
              <h1 className="app-content__header">Projects</h1>
              <AllProjects projects={this.state.projects}/>
            </div>
          </div>
        </div>
        )
    }
}

export default Projects
