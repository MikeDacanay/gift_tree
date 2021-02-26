import React from 'react';

import Header from './hoc/Layout/Header/Header';
import Main from './hoc/Layout/Main/Main';

import Section from './components/Section/Section';

import './App.scss';

function App() {
  return (    
    <React.Fragment>  
      <Header>
        This header
      </Header>
      <Main>
        <Section></Section>
        <Section></Section>
      </Main>
      <Header>This is header 2</Header>
      <Main>
        <Section></Section>
        <Section></Section>
      </Main>
    </React.Fragment> 
  );
}

export default App;
