import React, { Component } from 'react';

// Import initial state
import PLAYERX from '../constants/constants.js';
import PLAYER0 from '../constants/constants.js';

import '../assets/style/index.css';

import Header from './Header.js';
import Board from './Board.js';

import { connect } from 'react-redux'
import {playPosition} from "../reducers/actions";

class App extends Component {
  constructor(props){
      super(props);
      this.appClick = this.appClick.bind(this);
  }

  //When done
  appClick(rowIndex, columnIndex){
      this.props.dispatch(playPosition(rowIndex, columnIndex, this.props.turn));
  }

  render() {

    return (
      <div>
        <h1> Tic Tac Toe </h1>
        <Header turn={this.props.turn} />
        <Board values={this.props.values} appClick={this.appClick}/>
      </div>
    );
  }
}

function mapStateToProps(state){
    return{
        turn: state.turn,
        values: state.values
    };
}

export default connect(mapStateToProps)(App);
