import turnReducer from "./turnReducer";
import gameReducer from "./gameReducer";
import { combineReducers } from 'redux';

const GlobalState = combineReducers({
    turn: turnReducer,
    values: gameReducer
});

export default GlobalState;