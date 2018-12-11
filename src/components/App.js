import React, { Component } from 'react';

// Import initial state
import PLAYERX from '../constants/constants.js';
import PLAYER0 from '../constants/constants.js';

import '../assets/style/index.css';

import Header from './Header.js';
import Board from './Board.js';

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
      let valuesCopy = JSON.parse(JSON.stringify(this.state.values));
      let newMovement = this.state.turn === PLAYERX ? 'X' : '0';
      valuesCopy[rowIndex][columnIndex] = newMovement;
      this.setState({
          turn: this.state.turn === PLAYERX ? PLAYER0 : PLAYERX, // Turn change
          values: valuesCopy
      })

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
