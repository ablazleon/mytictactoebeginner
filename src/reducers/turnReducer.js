// Change the turn

import {PLAYERX, PLAYER0} from "../constants/constants";

function turnReducer(state=PLAYERX, action){ // Starts PLAYERX
    switch(action.type){
        case 'PLAY_POSITION':
            // Si player X, cambia
            return action.turn === PLAYERX ? PLAYER0 : PLAYERX;
        default:
            return state;
    }
}

export default turnReducer;