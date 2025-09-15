import React, { Component } from 'react'
export default class Counter extends Component {
    constructor(props){
        super(props);
        this.state = {
            cnt:0
        }
    }
    incrementCnt=()=>{
        this.setState({cnt:this.state.cnt+1}
        )
    }
    decrementCnt=()=>{
        this.setState({cnt:this.state.cnt-1})
    }
    render() {
        return (
            <div>
                <h1>Counter : {this.state.cnt}</h1>
                <button onClick={this.incrementCnt}>Increment</button>
                <button onClick={this.decrementCnt}disabled={this.state.cnt==0}>Decrement</button>

            </div>
        )
    }
}
