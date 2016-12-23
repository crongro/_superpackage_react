import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './Reducers/Counter'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory, IndexRoute} from 'react-router'

import App from './Components/App'
import Home from './Components/MainSection/Home/Home'
import CardContainer from './Container/MainSection/Card/CardContainer'
import About from './Components/MainSection/About/About'
import './index.css'

const store = createStore(reducer, applyMiddleware(thunk))

const render = () => ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={Home}/> 
				<Route path="/card" component={CardContainer}/>
		        <Route path="/about" component={About}/>
			</Route>
	  	</Router>
	</Provider>,
  document.getElementById('root')
);

render();