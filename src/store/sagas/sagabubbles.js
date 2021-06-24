import rsf from '../../firebaseConfig';
import { put, call } from 'redux-saga/effects';

import * as actions from "../actions";

export function* initBubbles(action) {
  
  const collection = yield call(rsf.firestore.getCollection, 'gift_bubbles');

  const bubbles = collection.docs.map(doc => {
    return {
      user: doc.id,
      score: doc.data().amount
    }    
  });

  yield put(actions.initBubbles(bubbles))
}

export function* addBubble(action) {

  const amt = Number(action.amt);

  yield put(actions.addBubble(amt));

  yield call(rsf.firestore.addDocument, 'gift_bubbles', {
    amount: Number(amt),
  });  
}