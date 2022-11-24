import React, { Component } from 'react'

export default class Appp extends Component {
  render() {
    return (
        <fieldset>
        <legend>appp.jsx</legend>
        <div className='app'>
          <p><h1> {this.props.lastName} </h1> <h1>{this.props.firstName}</h1></p>
          <p>age:{this.props.age}</p>
          <p>hair color:{this.props.hairColor}</p>
        </div>
        </fieldset>
    )
  }
}
