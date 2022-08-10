import React, { Component } from "react";

export default class LayoutDefault extends Component {
  render() {
    return (
      <div>
        
        {this.props.children}
        <div>LayoutDefault</div>
      </div>
    );
  }
}
