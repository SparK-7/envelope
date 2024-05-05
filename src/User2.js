import React, { Component } from 'react';

export default class User2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }

  componentDidMount() {
    let a = prompt("Enter the name");
    this.setState({ name: a });
  }

  render() {
    return (
      <div>
        <h1>Class Component</h1>
        <h1>Name: {this.state.name}</h1>
      </div>
    );
  }
}
