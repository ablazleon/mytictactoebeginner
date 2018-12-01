import React from 'react'
import Square from "./Square";

export default class Header extends React.Component{

    // Props are created from its super
    constructor(props){
        super(props);
        this.boardClick = this.boardClick.bind(this);
    }

    boardClick(columnIndex, rowIndex){
        this.props.appClick(columnIndex, rowIndex)
    }

    // Iterate over the values state
    render(){
        // It is create a board object
        let board = this.props.values.map((rowValues, rowIndex)=>{
            //rowValues = ['-', '-', '-']; it is assigned these spans to the row
            let row = rowValues.map((value, columnIndex)=>{
                // It is represent each value in a span
                return (<Square boardClick={this.boardClick}
                    columnIndex={columnIndex} rowIndex={rowIndex}
                    key={""+rowIndex+columnIndex} value={value} />)
            });
            return (<div key={""+rowIndex}> {row} </div>)
        });

        return (<div> {board} </div>);
    }
}