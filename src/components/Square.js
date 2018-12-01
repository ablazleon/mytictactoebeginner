import React from 'react'

const squareStyle = {
    height: "100px",
    width: "100px"
}

export default class Header extends React.Component{
    render(){
        return (<button style={squareStyle}> {this.props.value} </button>);
    }
}