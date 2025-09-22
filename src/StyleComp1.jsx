import React, { Component } from 'react';

class StyleComp1 extends Component {
    render() {
        const style1 = {
            color:"blue",
            backgroundColor:"aqua"
        }
        return (
            <div>
                <h1 style={{color:"red",backgroundColor:"aquamarine"}}>Welcome to React</h1>
                <h1 style={style1}>Welcome to React</h1>
            </div>
        );
    }
}
export default StyleComp1;