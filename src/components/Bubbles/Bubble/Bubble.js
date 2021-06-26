import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../store/actions/index';

import './Bubble.scss';

const Bubble = props => {
    const bubble = props.bbl;
    const idx = props.idx;

    const bubbleDeleteHandlr = (userId, bubbleRdcIdx) => {
        props.sagaDeleteBubble(userId, bubbleRdcIdx);
    }

    return (
        <div className="Bubble" 
            >
            <div className="Bubble__text">
                {bubble.user}: {bubble.score}
            </div>
            <button className="Bubble__delete"
                onClick={()=>bubbleDeleteHandlr(bubble.user, idx)}>
                Delete
            </button>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        sagaDeleteBubble: (userId, bubbleRdcIdx) => dispatch(actions.sagaDeleteBubble(userId, bubbleRdcIdx)),
    }
}

export default connect(null, mapDispatchToProps)(Bubble);