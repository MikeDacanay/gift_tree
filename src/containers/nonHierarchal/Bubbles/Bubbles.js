import React from 'react';
import firebase from "firebase/app";
import "firebase/firestore";
import { connect } from 'react-redux';

import SubHead from '../../../components/SubHead/SubHead';
import Sections from '../../../components/Sections/Sections';
import * as actions from '../../../store/actions/index';

import './Bubbles.scss';

const Bubbles = props => {
    // console.log(props.bubblesScores);

    const form = (
        <form action="">
            <div className="Bubbles__txtfield--container">
                <label htmlFor="User_number">User Number</label>                
                <input name='User_number' type="text"/>
            </div>            
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
                        <button onClick={props.onTest}>TEST</button>
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
        onTest: () => dispatch(actions.test()),
    }
} 
export default connect(mapStateToProps, mapDispatchToProps)(Bubbles);