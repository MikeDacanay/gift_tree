// import rsf from '../../firebaseConfig';
// import { put, call } from 'redux-saga/effects';

// export function* initBubbles() {
//     const snapshot = yield call(rsf.firestore.getCollection, 'gift_');
//     let bubbles;
//     snapshot.forEach(bubble => {
//         bubbles = {
//           ...bubbles,
//           bubble,
//         }
//     });
  
//     console.log(bubbles);
//     // yield put(gotUsers(users));
// }