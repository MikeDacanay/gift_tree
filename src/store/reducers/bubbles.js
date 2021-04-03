import * as actionTypes from '../actions/actionTypes';
import  { updateObject } from '../utility';

const initialState = {
    scores: [],
    bestScore: {1: 300},
}

const init_bubbles1_scores = (state = initialState, action) => {
    return updateObject(state, {
        scores: action.scores,
    }); 
}

const reducer = (state = initialState, action) => {
    if(action.type === actionTypes.INIT_BUBBLES1_SCORES){
        return init_bubbles1_scores(state, action);
    }
    
    return state;
}

export default reducer; 