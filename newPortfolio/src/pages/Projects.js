import React, { Component } from 'react'
import AllProjects from '../components/AllProjects.js'

class Projects extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
        <div className="app-page--projects">
          <div className="app-content">
            <div className="app-content__projects" style={{ width: "85%"}}>
              <h1 className="app-content__header">Projects</h1>
              <AllProjects />
            </div>
          </div>
        </div>
        )
    }
}

export default Projects
