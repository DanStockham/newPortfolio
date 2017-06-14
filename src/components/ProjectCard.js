import React, { Component } from 'react';

class ProjectCard extends Component {

    render(){
        return (
          <div className="project-card">
            <div className="project-card__inner-contents">
              <div className="front">
                <img alt="placeholder" src={this.props.imgUrl} />
              </div>
              <a href={this.props.link} target="_blank" rel="noopener noreferrer" ><div className="back">
                <h4>{this.props.title}</h4>
                <p>{this.props.description}</p>
              </div></a>
            </div>
          </div>
        )
    }
}


export default ProjectCard
