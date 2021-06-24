import * as actionTypes from '../actions/actionTypes';
import  { updateObject } from '../utility';

const initialState = {
    scores: [
        // {user: '001', score: 300000},
        // {user: '002', score:400000},
    ],
    // bestScore: {1: 300},
}

const init_bubbles = (state = initialState, action) => {
    
    const newBubbles = [...action.docs];

    return updateObject(state, {
        scores: newBubbles,
    });
}

const add_bubble = (state = initialState, action) => {
    // const amt = action.amt;
    const newBubbles = [...state.scores];

    newBubbles.push({user:'temp', score: action.amt});

    return updateObject(state, {
        scores: newBubbles,
    });
}

const reducer = (state = initialState, action) => {
    if(action.type === actionTypes.INIT_BUBBLES){
        return init_bubbles(state, action);
    }
    if(action.type === actionTypes.ADD_BUBBLE){
        return add_bubble(state, action);
    }
    
    return state;
}

export default reducer; 