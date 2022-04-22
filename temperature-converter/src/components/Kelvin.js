import React, { Component } from "react";

export default class Kelvin extends Component {
  render() {
    return (
      <div>
        Kelvin - <span>{this.props.kelvin}</span>{" "}
      </div>
    );
  }
}
