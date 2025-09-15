import React, { Component } from 'react'

export default class Events extends Component {
    handleClickMe=()=>{
        console.log("ClickMe Button Clicked");
    }
  render() {
    return (
      <div>
        <button onClick={this.handleClickMe}>ClickMe</button>

      </div>
    )
  }
}
