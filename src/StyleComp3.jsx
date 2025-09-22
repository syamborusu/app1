import React, { Component } from 'react';

class StyleComp3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flag:false
        }
    }
    changeBtnStyle=()=>{
        this.setState(
            {flag:true}
        )
    }
    render() {
        const btnStyle = {
            color:"Black",
            backgroundColor:"green",
            fontSize:"20px"
        }
        if(this.state.flag){
            btnStyle.backgroundColor = "yellow";
            btnStyle.color = "black";
            btnStyle.fontSize = "30px";
        }
        return (
            <div>
                <button style={btnStyle} onClick={this.changeBtnStyle}>Button</button>
            </div>
        );
    }
}

export default StyleComp3;