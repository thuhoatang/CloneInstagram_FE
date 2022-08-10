import './App.css'
import React, { Component } from 'react'
import LoginSignup from './layout/LoginSignup'
import Login from './components/pages/Login/Login'



export default class App extends Component {
  render() {
    return (
      <div>
        <LoginSignup>
          <Login/>
        </LoginSignup>
      </div>
    )
  }
}
