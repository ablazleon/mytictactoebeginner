import React, { Component } from 'react';

import '../assets/style/index.css';

import Header from './Header.js';
import Board from './Board.js';


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
      };
      this.appClick = this.appClick.bind(this);
  }

  //When done
  appClick(rowIndex, columnIndex){
      console.log({columnIndex})
      console.log({rowIndex})
      // Get the copy and set it
  }

  render() {

    return (
      <div>
        <h1> Tic Tac Toe </h1>
        <Header turn={this.state.turn} />
        <Board values={this.state.values} appClick={this.appClick}/>
      </div>
    );
  }
}

export default App;
