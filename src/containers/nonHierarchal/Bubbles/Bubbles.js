import React from 'react';
import firebase from "firebase/app";
import "firebase/firestore";
import { connect } from 'react-redux';

import SubHead from '../../../components/SubHead/SubHead';
import Sections from '../../../components/Sections/Sections';

import './Bubbles.scss';

// START FIREBASE FOR BUBBLES
// var firebaseConfig = {
//     apiKey: "AIzaSyBRsfUHhRK6N4-yaQ0X-XL-pvZtE7TJCVs",
//     authDomain: "gift-tree-bubbles.firebaseapp.com",
//     projectId: "gift-tree-bubbles",
//     storageBucket: "gift-tree-bubbles.appspot.com",
//     messagingSenderId: "371566937572",
//     appId: "1:371566937572:web:1b7cca981777d27b0833f1",
//     measurementId: "G-L6NHT00RGT"
// };

// //** Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// const db = firebase.firestore();
// const settings = { timestampsInSnapshots: true,};
// db.settings(settings);

// db.collection('gift_bubbles').onSnapshot(res => {

//     res.docChanges().forEach(change => {
//         const doc = {
//             ...change.doc.data(),
//             id: change.doc.id
//         }
        
//         console.log(doc);
//     });
//     // console.log(data);
// });

// END FIREBASE FOR BUBBLES


const Bubbles = props => {
    console.log(props.bubblesScores);

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
            
        </div>
    );

    return (
        <div className="Bubbles">
            <SubHead>This is SUBHEAD Bubbles</SubHead>
            <Sections
                left={form}
                right={Bubbles}
            />
        </div>
    )
}

const mapStateToProps = state => {
    // return {
    //     bubbles: state.
    // };
    return {
        bubblesScores: state.bubblesReducer,
    };
}

export default connect(mapStateToProps, null)(Bubbles);