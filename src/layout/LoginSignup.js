import React, { Component } from "react";
import Signup from "../components/pages/Signup/Signup";
import Footer from "./components/Footer";

class LoginSignup extends Component {
  render() {
    return (
      <div>
        {this.props.children}

        <Footer />
      </div>
    );
  }
}

export default LoginSignup;
