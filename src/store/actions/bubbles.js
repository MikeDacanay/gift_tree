import * as actionTypes from './actionTypes';

// export const changeBubbles = (docs) => {
//     return {
//         type: actionTypes.CHANGE_BUBBLES_SCORES,
//         docs: docs,
//     };
// };

export const sagaInitBubbles = () => {
    return {
        type: actionTypes.SAGA_INIT_BUBBLES,
    };
}

export const sagaAddBubble = (amt) => {
    return {
        type: actionTypes.SAGA_ADD_BUBBLE,
        amt: amt,
    };
}

export const initBubbles = (docs) => {
    return {
        type: actionTypes.INIT_BUBBLES,
        docs: docs,
    };
}

export const addBubble = (amt) => {
    return {
        type: actionTypes.ADD_BUBBLE,
        amt: amt,
    };
}