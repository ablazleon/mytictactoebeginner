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
      }
  }


  render() {

    return (

      <div>
        <h1> Tic Tac Toe </h1>
        <Header turn={this.state.turn} />
        <Board values={this.state.values}/>
      </div>
    );
  }
}

export default App;
