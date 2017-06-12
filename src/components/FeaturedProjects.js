import React, { Component } from 'react';
import ProjectCard from './ProjectCard.js';
import projects from '../projectDetails.js';

class FeaturedProjects extends Component {
    constructor(props){
        super(props)
        this.state = {
          placeholder: null
        }
        this.projects = this.projects.bind(this);
    }

    projects() {
      let projectsList = [];
      for(let i = 0; i < 6; i++) {
        projectsList.push((
          <ProjectCard key={i} title={projects[i].title} imgSrc={projects[i].imageSrc} description={projects[i].description} />
        ))
      }

      return projectsList;
    }

    render(){
      let projectsList = this.projects()
        return (
            <div className="app-content__projects-cards">
              {projectsList}
            </div>
        )
    }
}


export default FeaturedProjects
