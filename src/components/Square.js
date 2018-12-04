import React from 'react'

const squareStyle = {
    height: "100px",
    width: "100px"
}

export default class Square extends React.Component{

    // Props are created from its super
    constructor(props){
        super(props);
        this.squareClick = this.squareClick.bind(this);
    }

    // Needs information from its father
    squareClick(){
        this.props.boardClick();
    }

    render(){
        return (<button onClick={this.squareClick()}
         style={squareStyle}> {this.props.value} </button>);
    }
}