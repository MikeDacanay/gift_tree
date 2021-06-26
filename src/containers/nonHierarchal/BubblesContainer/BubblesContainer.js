import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Bubbles from '../../../components/Bubbles/Bubbles';
import BubbleForm from '../../../components/Forms/BubbleForm/BubbleForm';
import Sections from '../../../components/Sections/Sections';
import SubHead from '../../../components/SubHead/SubHead';

import * as actions from '../../../store/actions/index';

import './BubblesContainer.scss';

const BubblesContainer = props => {

    useEffect(() => {
        props.sagaInitBubbles();
    }, [])

    return (
        <div className="Bubbles">
            <SubHead>This is SUBHEAD Bubbles</SubHead>
            <Sections
                left={<BubbleForm/>}
                right={<Bubbles/>}
            />
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        sagaInitBubbles: () => dispatch(actions.sagaInitBubbles()),
    }
} 
export default connect(null, mapDispatchToProps)(BubblesContainer);