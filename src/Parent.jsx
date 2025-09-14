import React, { Component } from 'react'
import Child from './Child1';
import Child2 from './Child2';
export default class Parent extends Component {
  render() {
    return (
      <div>
    <Child sid={1001} sname="Syam" course="python"/>
    <Child2 sid={1001} sname="Syam" course="Python"/>
      </div>
    )
  }
}
