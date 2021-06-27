import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../store/actions/index';

import './Bubble.scss';

const Bubble = props => {
    // const bubble = props.bbl;
    const idx = props.idx;   

    const bubbleDeleteHandlr = (userId, bubbleRdcIdx) => props.sagaDeleteBubble(userId, bubbleRdcIdx);

    const bubbleUpdateHandlr = (userId, idx, e) => {
        // e.stopPropagation();
        props.sagaUpdateBubble(userId, idx, Number(e.target.value))
    };

    return (
        <div className="Bubble" 
            >
            <div className="Bubble__text">
                {props.user}: {props.score}
            </div>
            <button className="Bubble__delete"
                onClick={()=>bubbleDeleteHandlr(props.user, idx)}>
                Delete
            </button>
            <input className='Bubble__input--txt' type="text" onChange={(e)=>bubbleUpdateHandlr(props.user, idx,e)}/>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        sagaDeleteBubble: (userId, bubbleRdcIdx) => dispatch(actions.sagaDeleteBubble(userId, bubbleRdcIdx)),
        sagaUpdateBubble: (userId, idx, val) => dispatch(actions.sagaUpdateBubble(userId, idx, val)),
    }
}

export default connect(null, mapDispatchToProps)(Bubble);