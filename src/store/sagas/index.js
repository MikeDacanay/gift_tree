import { takeEvery, all, takeLatest } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';

import { initBubbles } from './bubbles';

export function* watchBubblesPopulator() {
    yield takeEvery(actionTypes.TEST, initBubbles);
}