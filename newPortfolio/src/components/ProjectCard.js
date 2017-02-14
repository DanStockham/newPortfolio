import React, { Component } from 'react'

class ProjectCard extends Component {

    render(){
      console.log(this.props);
      const imgSrc = require('../'+ this.props.imgSrc);
        return (
          <div className="project-card">
            <h3>{this.props.title}</h3>
            <img className="project-card--img" alt="placeholder" src={imgSrc} />
            <p>{this.props.description}</p>
          </div>
        )
    }
}


export default ProjectCard
