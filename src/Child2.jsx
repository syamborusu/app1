import React, { Component } from 'react'

export default class Child2 extends Component {
    constructor(props){
        super(props);
        console.log(props);
        this.state ={
            sid:props.sid,
            sname:props.sname,
            course:props.course
        }
    }
  render() {
    return (
      <div>
        <h3>ID:{this.state.sid}</h3>
        <h3>ID:{this.state.sname}</h3>
        <h3>ID:{this.state.course}</h3>
      </div>
    )
  }
}
