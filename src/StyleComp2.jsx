import React, { Component } from 'react';
class StyleComp2 extends Component {
    render() {
        const style1 = {
            color:"red"
        }
        const style2 = {
            backgroundColor:"aqua"
        }
        return (
            <div>
                <h1 style={{...style1,...style2}}>Welcome to React</h1>
                <h1 style={{...style1,...style2,...{fontSize:"25px"}}}>Welcome to React</h1>
            </div>
        );
    }
}
export default StyleComp2;