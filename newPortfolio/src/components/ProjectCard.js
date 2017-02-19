import React, { Component } from 'react'

class ProjectCard extends Component {

    render(){
      const imgSrc = require('../'+ this.props.imgSrc);
        return (
          <div className="project-card">
            <div className="project-card__inner-contents">
              <div className="front">
                <img alt="placeholder" src={imgSrc} />
              </div>
              <a href="#"><div className="back">
                <h4>{this.props.title}</h4>
                <p>{this.props.description}</p>
              </div></a>
            </div>
          </div>
        )
    }
}


export default ProjectCard
