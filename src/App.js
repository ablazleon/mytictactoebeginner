import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const PLAYERX = "Player 1 - Xs";
const PLAYER0 = "Player 2 - Xs";

class App extends Component {
  constructor(props){
      super(props);
      this.state = {
        turn: PLAYERX,
        values: [
            ['-', '-', '-'],
            ['-', '-', '-'],
            ['-', '-', '-']
        ]
      }
  }

  render() {

      let text = "Turn of "+ this.state.turn;

      // It is create a board object
      let board = this.state.values.map((rowValues, rowIndex)=>{
         //rowValues = ['-', '-', '-']; it is assigned these spans to the row
          let row = rowValues.map((value, columnIndex)=>{
              // It is represent each value in a span
              return (<span> {value} </span>)
          });
          return (<div>{row} </div>)
      });



    return (

      <div>
        <h1> Tic Tac Toe </h1>
        <header> {text}  </header>
          {board}
      </div>
    );
  }
}

export default App;
