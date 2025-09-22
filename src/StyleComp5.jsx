import React, { Component } from 'react';
/*WHEN PRESS BUTTON INLINE WAY FOR CHANGING COLOUR */
class StyleComp5 extends Component {
    constructor(props) {
        super(props);
        this.state={
            color:'black'
        }
    }
    addColor=(clr)=>{
        this.setState(
            {color:clr}
        )
    }
    render() {
        const style1 = {
            color:this.state.color
        }
        return (
            <div>
                <h1 style={style1}>Python</h1>
                <button onClick={()=>this.addColor("red")}>Red</button>
                <button onClick={()=>this.addColor("blue")}>Blue</button>
                <button onClick={()=>this.addColor("green")}>Green</button>
            </div>
        );
    }
} 
export default StyleComp5;