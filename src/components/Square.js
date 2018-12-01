import React from 'react'

const squareStyle = {
    height: "100px",
    width: "100px"
}

export default class Header extends React.Component{

    // Props are created from its super
    constructor(props){
        super(props);
        this.squareClick = this.squareClick.bind(this);
    }

    // Needs information from its father
    squareClick(columnIndex, rowIndex){
        this.props.boardClick(columnIndex, rowIndex);
    }

    render(){
        return (<button onClick={this.squareClick(this.props.columnIndex, this.props.rowIndex)}
         style={squareStyle}> {this.props.value} </button>);
    }
}