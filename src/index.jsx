import React from 'react';
import ReactDOM from 'react-dom';
import {
  createStore, combineReducers, applyMiddleware, compose
} from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';

import '../assets/stylesheets/application.scss';

import flatsReducer from './reducers/FlatsReducer';
import selectedFlatReducer from './reducers/SelectedFlatReducer';

import App from './components/App';

const reducers = combineReducers({
  flats: flatsReducer,
  selectedFlat: selectedFlatReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const devMiddlewares = composeEnhancers(applyMiddleware(logger, reduxPromise));
const prodMiddlewares = applyMiddleware(reduxPromise);

if (process.env.NODE_ENV === 'development') {
  ReactDOM.render(
    <Provider store={createStore(reducers, {}, devMiddlewares)}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
} else {
  ReactDOM.render(
    <Provider store={createStore(reducers, {}, prodMiddlewares)}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
}
