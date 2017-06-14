import React, { Component } from 'react';
import ProjectCard from './ProjectCard.js';
import getProjects from '../api/getProjects';

class FeaturedProjects extends Component {
    constructor(props){
        super(props)
        this.state = {
          projects: []
        }
        this.projects = this.projects.bind(this);
    }

    componentDidMount() {
      const projects = this.state.projects;

      if(projects === []) {
        getProjects.then((projects) => {
          this.setState({ projects })
        });
      }

    }

    projects() {
      let projects = this.props.projects;
      let projectList = [];
      if(projects !== null) {
        for(let i = 0; i < 2; i++) {
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


export default FeaturedProjects
