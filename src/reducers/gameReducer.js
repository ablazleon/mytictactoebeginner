// Change the state

import {VALUES, PLAYERX} from "../constants/constants";

function gameReducer(state=VALUES, action){
    switch(action.type){
        case 'PLAY_POSITION':
            // Help the reconcilition algorithm by creating the reference to another object
            let newState = JSON.parse(JSON.stringify(state));
            let newValue = action.turn === PLAYERX ? "X":"0";
            newState[action.x][action.y] = newValue;
            return newState;
        default:
            return state;
    }
}

export default gameReducer;