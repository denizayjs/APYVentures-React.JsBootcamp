import React, { Component } from "react";

export default class Persons extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.persons.map((person) => (
            <li key={person.id}>
              {person.username} : {person.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
