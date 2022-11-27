import React, { Component } from 'react'

export default class Button extends Component {
  constructor(props){

    super(props)
    this.state={
      firstName:this.state.firstName,
      lastName:this.state.lastName,
      age:this.state.age,
      hairColor:this.state.hairColor

    }
  }
  show =()=>{
    this.setState({
      age:this.state.age+1,
      peopleArr:{
        ...this.state.peopleArr,
        age:this.state.peopleArr(peopleArr =>  {peopleArr.age+1}),
      }
    })
  }
  render() {
    return (
      <div>
        <button onClick={() => {this.state.show()}}>brith day</button>
      </div>
    )
  }
}
