import React, { Component } from 'react'

export default class User extends Component {
  render() {
    return (
        
      <div>
        <h1>class Component</h1>
        <h1>username: {this.props.name}</h1>
      </div>
    )
  }
}
User.defaultProps = {
  name:"world of programming"
}