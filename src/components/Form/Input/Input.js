import './Input.css'
import React, { Component } from 'react'

export default class Input extends Component {
  // state = {valueInput}


  render() {
    return (
      <div className="input_login">
        <div className="input_login_child">
          <label className="input_login_label">
            <span className="span_hint">Phone number, username, or email</span>
            <input className="input_text" aria-label="Phone number, username, or email" type="text" required></input>
          </label>
        </div>
      </div>
    )
  }
}
