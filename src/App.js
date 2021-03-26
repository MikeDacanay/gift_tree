import React from 'react';
import { connect } from 'react-redux';
import Header from './hoc/Layout/Header/Header';
import Main from './hoc/Layout/Main/Main';
import Footer from './hoc/Layout/Footer/Footer';

import Bubbles from './containers/nonHierarchal/Bubbles/Bubbles';

import './App.scss';

const App = props => {
  return (    
    <React.Fragment>  
      <Header>
        This is Important
      </Header>
      <Main>
        <Bubbles/>
      </Main>
      <Footer/>
    </React.Fragment> 
  );
}

const mapStateToProps = state => {
  return {
    bestScoreObj: state.nonHierarchalReducer.bestScore,
  };
}

export default connect(mapStateToProps, null)(App);
