import * as actionTypes from '../actions/actionTypes';
import  { updateObject } from '../utility';

const initialState = {
    scores: [
        {user: '001', score: 300000},
        {user: '002', score:400000},
    ],
    // bestScore: {1: 300},
}

const init_bubbles1_scores = (state = initialState, action) => {
    const newScores = [...action.docs];

    console.log(newScores);

    return updateObject(state, {
        scores: newScores,
    });

    // return state;
}

const reducer = (state = initialState, action) => {
    if(action.type === actionTypes.INIT_BUBBLES1_SCORES){
        return init_bubbles1_scores(state, action);
    }
    
    return state;
}

export default reducer; 