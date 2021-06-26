import * as actionTypes from './actionTypes';

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

export const sagaUpdateBubble = (usrId, idx, val) => {
    return {
        type: actionTypes.SAGA_UPDATE_BUBBLE,
        usrId: usrId,
        val: val,
        idx: idx
    }
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

export const updateBubble = (idx, val) => {
    return {
        type: actionTypes.UPDATE_BUBBLE,
        idx: idx,
        val: val,
    }
}