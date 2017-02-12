import React, { Component } from 'react'

class Contact extends Component {
    render(){
        return (
          <div className="app-page">
              <div className="app-contact">
                  <h1 className="app-contact__header">Contact</h1>
                  <p className="app-contact__tagline">To contact us please use the contact form visible. When sending files, please use the following e-mail</p>
                  <form className="app-contact__form">
                    <ul className="row">
                      <li>
                        <label for="username">Username:</label>
                        <input name="username"></input>
                      </li>
                      <li>
                        <label for="email">Email:</label>
                        <input name="email"></input>
                      </li>
                      <li>
                        <label for="message">Message: </label>
                        <input name="message"></input>
                      </li>
                    </ul>
                    <button type="submit">Submit</button>
                  </form>
              </div>
          </div>
        )
    }
}


export default Contact
