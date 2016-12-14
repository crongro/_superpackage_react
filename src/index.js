import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import reducer from './Reducers'
import { Provider } from 'react-redux'

import App from './App';
import './index.css';

const store = createStore(reducer)

const render = () => ReactDOM.render(
	 <Provider store={store}>
  		<App />
  	  </Provider>,
  document.getElementById('root')
);

render();
store.subscribe(render)