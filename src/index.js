import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './Reducers/Counter.js'
import { Provider } from 'react-redux'

import App from './App';
import './index.css';

const store = createStore(reducer, applyMiddleware(thunk))

const render = () => ReactDOM.render(
	 <Provider store={store}>
  		<App />
  	  </Provider>,
  document.getElementById('root')
);

render();