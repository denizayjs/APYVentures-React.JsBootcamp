import React, { Component } from "react";

export default class Celcius extends Component {
  render() {
    return (
      <div>
        Celcius - <span>{this.props.celcius}</span>{" "}
      </div>
    );
  }
}
