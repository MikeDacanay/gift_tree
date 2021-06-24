import React, { useEffect } from 'react';
import firebase from "firebase/app";
import "firebase/firestore";
import { connect } from 'react-redux';

import SubHead from '../../../components/SubHead/SubHead';
import Sections from '../../../components/Sections/Sections';
import * as actions from '../../../store/actions/index';

import './Bubbles.scss';

const BubblesContainer = props => {

    useEffect(() => {
        props.sagaInitBubbles();

        // console.log('hehehehe');
    }, [])

    console.log(props.bubblesScores);

    const bubbleFormSubmitHandlr = (e) => {
        e.preventDefault();
        props.sagaAddBubble(e.target[0].value);        
    };

    const form = (
        <form action="" onSubmit={(e) => {
            bubbleFormSubmitHandlr(e);
        }}>
            {/* <div className="Bubbles__txtfield--container">
                <label htmlFor="User_number">User Number</label>                
                <input name='User_number' type="text"/>
            </div>             */}
            <div className="Bubbles__txtfield--container">
                <label htmlFor="Dollar__amount">$$$ Amount</label>                
                <input name='Dollar__amount' type="text"/>
            </div>                        
            <input type="submit"/>
        </form>
    );  

    const Bubbles = (
        <div className="Bubbles__container">
            {props.bubblesScores.map((bubble, i) => {
                return (
                    <div className="" key={`${bubble.user}`}>
                        {bubble.user}: {bubble.score}
                    </div>                    
                )
            })}
        </div>
    );

    return (
        <div className="Bubbles">
            {/* <button onClick={props.sagaInitBubbles}>TEST</button> */}
            <SubHead>This is SUBHEAD Bubbles</SubHead>
            <Sections
                left={form}
                right={Bubbles}
            />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        bubblesScores: state.bubblesReducer.scores,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        sagaInitBubbles: () => dispatch(actions.sagaInitBubbles()),
        sagaAddBubble: (amt) => dispatch(actions.sagaAddBubble(amt)),
    }
} 
export default connect(mapStateToProps, mapDispatchToProps)(BubblesContainer);