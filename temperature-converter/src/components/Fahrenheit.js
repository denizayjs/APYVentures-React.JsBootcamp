import React, { Component } from "react";

export default class Fahrenheit extends Component {
  render() {
    return (
      <div>
        Fahrenheit - <span>{this.props.fahrenheit}</span>{" "}
      </div>
    );
  }
}
