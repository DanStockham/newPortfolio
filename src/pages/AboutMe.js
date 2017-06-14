import React, { Component } from 'react'
import selfImg from '../assets/Me_avatar.jpg';

class AboutMe extends Component {
    render(){
        return (
          <div className="app-page">
            <div className="app-content">
              <div className="app-content__about">
                <h1 className="app-content__header">About Me</h1>
                <img className="app_content__profile-img" src={selfImg} alt="Dan Stockham" />
                <div className="app-content__profile">
                  <div className="profile__summary">
                    <p>Developer, Runner, Avid Chess player, and Volunteer </p>
                  </div>
                  <div className="profile__bio">
                    <p>Currently attending the .NET track through Tech Elevator. I'm effective with HTML, CSS, and JavaScript which I cultivated through FreeCodeCamp and built several applications on my own. I enjoy the programming languages I'm currently working with and how they compare to each other when building an application. Also, I like articulating these concepts when collaborating with others with different backgrounds. My goal is to become a junior developer and ultimately a full-stack engineer.</p>
                    <p>If you're interested in getting to know me more, please do not hesitate to send me a message through the contact form. Also, I can be reached through several of my social media profiles as well. Links are provided below.</p>
                </div>
                </div>
            </div>
          </div>
        </div>
        )
    }
}


export default AboutMe
