import React, { Component } from 'react'

class Projects extends Component {
    constructor(props){
        super(props)
        this.state = {
          placeholder: null
        }
        this.projects = this.projects.bind(this);
    }

    projects() {
      let projects = [];
      for(let i = 0; i < 6; i++) {
        projects.push((
          <div className="app-content__projects-cards__card">
            <img key={i} alt="placeholder" src=" http://placehold.it/300x150"></img>
          </div>
        ))
      }

      return projects
    }

    render(){
      let projects = this.projects()
        return (
            <div className="app-content__projects-cards">
              {projects}
            </div>
        )
    }
}


export default Projects
