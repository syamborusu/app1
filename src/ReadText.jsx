import React, { Component } from 'react'

export default class ReadText extends Component {
    readUserName=(e)=>{
        console.log(e.target)
        console.log(e.target.value)
    }
  render() {
    return (
      <div>
        <form>
            <lable>User Name</lable>
            <input type="text" name="user" onChange={this.readUserName}/>
        </form>
      </div>
    )
  }
}

