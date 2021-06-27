import React from 'react';
import { connect } from 'react-redux';

import Bubble from './Bubble/Bubble';

import './Bubbles.scss';

const Bubbles = props => {

    const retThis = (
        <div className="Bubbles__container">
            {props.bubbleScores.map((b, i)=> {
                return (
                    <Bubble
                        score={b.score}
                        idx={i}
                        key={b.user}
                        user={b.user}
                    />
                )
            })}
        </div>
    );



    return retThis;
}

const mapStateToProps = state => {
    return {
        bubbleScores: state.bubblesReducer.scores,
    }
}

export default connect(mapStateToProps, null)(Bubbles);