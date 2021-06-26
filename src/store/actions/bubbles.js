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

export const sagaDeleteBubble = (usrId, rdcIdx) => {
    return {
        type: actionTypes.SAGA_DELETE_BUBBLE,
        usrId: usrId,
        rdcIdx: rdcIdx,
    };
}

export const initBubbles = (docs) => {
    return {
        type: actionTypes.INIT_BUBBLES,
        docs: docs,
    };
}

export const addBubble = (amt, id) => {
    return {
        type: actionTypes.ADD_BUBBLE,
        amt: amt,
        id: id,
    };
}

export const deleteBubble = (rdcIdx) => {
    return {
        type: actionTypes.DELETE_BUBBLE,
        rdcIdx: rdcIdx, 
    }
}