import { uuid } from 'uuidv4';
import rsf from '../../firebaseConfig';
import { put, call } from 'redux-saga/effects';

import * as actions from "../actions";

export function* initBubbles(action) {
  
  const collection = yield call(rsf.firestore.getCollection, 'bubbles');

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
  const id = uuid()+'x';

  yield put(actions.addBubble(amt, id));

  // yield call(rsf.firestore.addDocument, 'gift_bubbles', {
  //   amount: amt,
  // });  
  yield call(
    rsf.firestore.setDocument,
    `bubbles/${id}`,
    { amount: amt }
  );
}

export function* deleteBubble(action) {
  yield put(actions.deleteBubble(action.rdcIdx));

  yield call(
    rsf.firestore.deleteDocument, 
    `bubbles/${action.usrId}`
  )
}

export function* updateBubble(action){
  const idx = action.idx;
  const val = action.val

  yield put(actions.updateBubble(idx, val));

  
}