import React, { Component } from 'react'
import AllProjects from '../components/AllProjects.js'

class Projects extends Component {
  render(){
        return (
        <div className="app-page--projects">
          <div className="app-content">
            <div className="app-content__project">
              <h1 className="app-content__header">Projects</h1>
              <AllProjects />
            </div>
          </div>
        </div>
        )
    }
}

export default Projects
