import React, { Component } from 'react';
import ProjectCard from './ProjectCard.js';

class AllProjects extends Component {
    constructor(props){
        super(props)
        this.projects = this.projects.bind(this);
    }

    projects() {
      let projects = this.props.projects;
      let projectList = [];
      if(projects !== null) {
        for(let i = 0; i < projects.length; i++) {
            projectList.push((
              <ProjectCard key={i}
                title={projects[i].title}
                imgUrl={projects[i].imageUrl}
                description={projects[i].description}
                link = {projects[i].link}/>
            ))
        }
      }

      return projectList;
    }

    render(){
      let projects = this.projects();
        return (
            <div className="app-content__projects-cards">
              {projects}
            </div>
        )
    }
}


export default AllProjects
