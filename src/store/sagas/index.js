import { takeEvery, all, takeLatest } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';

import { 
    initBubbles,
    addBubble 
} from './sagabubbles';

export function* watchBubblesPopulator() {    
    yield takeEvery(actionTypes.SAGA_INIT_BUBBLES, initBubbles);
    yield takeEvery(actionTypes.SAGA_ADD_BUBBLE, addBubble);
}