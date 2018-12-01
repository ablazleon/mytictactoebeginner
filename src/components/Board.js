import React from 'react'
import Square from "./Square";

export default class Header extends React.Component{
    // Iterate over the values state
    render(){
        // It is create a board object
        let board = this.props.values.map((rowValues, rowIndex)=>{
            //rowValues = ['-', '-', '-']; it is assigned these spans to the row
            let row = rowValues.map((value, columnIndex)=>{
                // It is represent each value in a span
                return (<Square key={""+rowIndex+columnIndex} value={value} />)
            });
            return (<div key={""+rowIndex}> {row} </div>)
        });

        return (<div> {board} </div>);
    }
}