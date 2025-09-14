import React, { Component } from 'react'

export default class Child extends Component {
  render() {
    return (
      <div>
        <h2>Student ID = {this.props.sid}</h2>
        <h2>Student Name = {this.props.sname}</h2>
        <h2>Student Course = {this.props.course}</h2>
      </div>
    )
  }
}
