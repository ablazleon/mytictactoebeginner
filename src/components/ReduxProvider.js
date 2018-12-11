import { Provider } from 'react-redux';
import GlobalState from '../reducers/reducers.js';
import { createStore } from 'redux';
import React, {component} from 'react';
import App from './App';

import {PLAYER0, PLAYERX, VALUES} from "../constants/constants";

export default class ReduxProvider extends React.Component {
    constructor(props){
        super(props);
        this.initialState = {
            turn: PLAYERX,
            values: VALUES
        };
        this.store = this.configureStore();
    }

    render() {

        return(
            <Provider store = { this.store }>
                <div>
                    <App store = { this.store }/>
                </div>
            </Provider>
        );
    }

    configureStore() {
        return createStore(GlobalState, this.initialState)
    }
}