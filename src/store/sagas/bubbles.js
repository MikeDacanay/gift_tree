import rsf from '../../firebaseConfig';
import { put, call } from 'redux-saga/effects';

import * as actions from "../actions";

export function* initBubbles(action) {
  const collection = yield call(rsf.firestore.getCollection, 'gift_bubbles');

  const scores = collection.docs.map(doc => {
    return {
      user: doc.id,
      score: doc.data().amount
    }    
  });

  yield put(actions.initBubbles(scores))
}