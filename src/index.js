import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import createSagaMiddleware from "redux-saga";

import bubblesReducer from './store/reducers/bubbles';
// import { watchBubblesPopulator } from './store/sagas';

import './App.scss';

const rootReducer = combineReducers({
  bubblesReducer: bubblesReducer,
});

const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

// const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeEnhancers(),
)

// sagaMiddleware.run(watchBubblesPopulator);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
