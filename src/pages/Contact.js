import React, { Component } from 'react'

class Contact extends Component {
    render(){
        return (
          <div className="app-page">
              <div className="app-contact">
                  <h1 className="app-contact__header">Contact</h1>
                  <p className="app-contact__tagline">To contact me, please use the contact form visible. You can also reach out to me through social media. The links are provided on the footer of the site. </p>
                  <form className="app-contact__form" >
                    <div className="form__input">
                      <p>
                        <label htmlFor="username">Username:</label>
                        <input name="username"></input>
                      </p>
                    </div>
                    <div className="form__input">
                      <p>
                        <label htmlFor="email">Email:</label>
                        <input name="email"></input>
                      </p>
                    </div>
                    <div className="form__input">
                      <p>
                        <label htmlFor="message">Message: </label>
                        <textarea style={{"background:" : "#DFDEDE"}} rows="10" cols="5" name="message"></textarea>
                      </p>
                    </div>
                    <div className="app-contact__form__submit">
                      <button className="form__btn" type="submit">Submit</button>
                    </div>
                  </form>

              </div>
          </div>
        )
    }
}


export default Contact
