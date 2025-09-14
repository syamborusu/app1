import React, { Component } from 'react'

export default class Comp3 extends Component {
    a=100;
    b=120;
    student={
        sid:1001,
        sname:"syam",
        email:"jspsyam@gmail.com"
    }
    constructor(){
        super()
        this.state={
            1001:['Syam','syam@gmail.com','Python',4000],
            1002:['Lokesh','jsp@gmail.com','java',5000],
            1003:['Borusu','bsyam@gmail.com','react',3500],
        }
    }
  render() {
    return (
      <div>
        <h1>Score={this.a+this.b}</h1>
        <h2>{this.student.sid}|{this.student.sname}|{this.student.email}</h2>
        <h2>{this.state[1001][0]}|{this.state[1001][1]}|{this.state[1001][2]}</h2>
        <h2>{this.state[1002][0]}|{this.state[1002][1]}|{this.state[1002][2]}</h2>
        <h2>{this.state[1003][0]}|{this.state[1003][1]}|{this.state[1003][2]}</h2>
        <h2>==================================</h2>





      </div>
    )
  }
}