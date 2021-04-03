import * as actionTypes from './actionTypes';

export const initBubbles = (docs) => {
    return {
        type: actionTypes.INIT_BUBBLES1_SCORES,
        docs: docs,
    };
};

export const test = () => {
    return {
        type: actionTypes.TEST,
    };
}