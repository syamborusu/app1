import React, { Component } from 'react';
/*WHEN PRESS BUTTON DYNAMICAL WAY OF CHANGING COLOUR*/
class StyleComp4 extends Component {
    constructor(props) {
        super(props);
        this.state={
            color:''
        }
    }
    redColor=()=>{
        this.setState(
            {color:"red"}
        )
    }
    BlueColor=()=>{
        this.setState(
            {color:"blue"}
        )
    }
    greenColor=()=>{
        this.setState(
            {color:"green"}
        )
    }
    render() {
        const style1 = {
            color:this.state.color
        }
        return (
            <div>
                <h1 style={style1}>Python</h1>
                <button onClick={this.redColor}>Red</button>
                <button onClick={this.BlueColor}>Blue</button>
                <button onClick={this.greenColor}>Green</button>
            </div>
        );
    }
}
export default StyleComp4;