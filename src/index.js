import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducer from './Redux/Reducers';
import RoutesContainer from './Redux/Containers';

import './Styles/index.scss';

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <RoutesContainer />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
