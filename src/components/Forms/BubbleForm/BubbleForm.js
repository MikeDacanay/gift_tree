import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../store/actions/index';

import './BubbleForm.scss';

const BubbleForm = props => {
    const bubbleFormSubmitHandlr = (e) => {
        e.preventDefault();        
        props.sagaAddBubble(e.target[0].value);        
    };

    return (
        <form className='BubbleForm__form' 
            action=''
            onSubmit={(e)=>bubbleFormSubmitHandlr(e)}>
            <div className="Bubbles__txtfield--container">
                <label htmlFor="Dollar__amount">$$$ Amount</label>                
                <input className='BubbleForm__input--txt' name='Dollar__amount' type="text"/>
            </div>                        
            <input type="submit"/>
        </form>
    )
};

const mapDispatchToProps = dispatch => {
    return {
        sagaAddBubble: (amt) => dispatch(actions.sagaAddBubble(amt)),
    }
}

export default connect(null, mapDispatchToProps)(BubbleForm);