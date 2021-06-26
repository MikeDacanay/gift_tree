import React from 'react';
import { connect } from 'react-redux';

import Bubble from './Bubble/Bubble';

import './Bubbles.scss';

const Bubbles = props => {
    return (
        <div className="Bubbles__container">
            {props.bubbleScores.map((b, i)=> {
                return (
                    <Bubble
                        bbl={b}
                        idx={i}
                        key={b.user}
                    />
                )
            })}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        bubbleScores: state.bubblesReducer.scores,
    }
}

export default connect(mapStateToProps, null)(Bubbles);