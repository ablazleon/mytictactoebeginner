// Change the turn

import {PLAYERX, PLAYER0} from "../constants/constants";

function turnReducer(state=PLAYERX, action){ // Starts PLAYERX
    switch(action.type){
        case 'PLAY_POSITION':
            return action.turn === PLAYERX ? PLAYERX : PLAYER0;
        default:
            return state;
    }
}

export default turnReducer;