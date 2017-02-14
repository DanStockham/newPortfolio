import React, { Component } from 'react'

class AboutMe extends Component {
    render(){
        return (
          <div className="app-page">
            <div className="app-content">
              <div className="app-content__about">
                <h1 className="app-content__header">About Me</h1>
                <div className="app-content__profile">
                  <div className="profile__summary">
                    <p>This is summarized bio pic of me. Try to keep it to 140 characters</p>
                  </div>
                  <div className="profile__bio">
                    <p>A more detailed look of who I am, what I do, and how I got here. Create a story of why I got into web development and the things I done that got me there.</p>
                  </div>
                </div>
            </div>
          </div>
        </div>
        )
    }
}


export default AboutMe
