import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './Reducers/Counter.js'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory, IndexRoute} from 'react-router'

import App from './App'
import Home from './Components/Home'
import Card from './Components/Card'
import About from './Components/About'
import './index.css'

const store = createStore(reducer, applyMiddleware(thunk))

const render = () => ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={Home}/> 
				<Route path="/card" component={Card}/>
		        <Route path="/about" component={About}/>
			</Route>
	  	</Router>
	</Provider>,
  document.getElementById('root')
);

render();