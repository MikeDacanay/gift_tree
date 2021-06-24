import React from 'react';
import { connect } from 'react-redux';
import Header from './hoc/Layout/Header/Header';

import Main from './hoc/Layout/Main/Main';
import Footer from './hoc/Layout/Footer/Footer';
import BubblesContainer from './containers/nonHierarchal/BubblesContainer/BubblesContainer';

import './App.scss';

const App = props => {
  return (    
    <React.Fragment>  
      <Header>
        This is Important
      </Header>
      <Main>
        <BubblesContainer/>
      </Main>
      <Footer/>
    </React.Fragment> 
  );
}

export default App;
