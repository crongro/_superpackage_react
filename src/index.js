import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './Reducers/index'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory, IndexRoute} from 'react-router'

import AppContainer from './Container/AppContainer'
import Home from './Components/MainSection/Home/Home'
import CardContainer from './Container/MainSection/Card/CardContainer'
import LoginContainer from './Container/Login/LoginContainer'
import OtherError from './Components/Error/OtherError'
import NoMatch from './Components/Error/NoMatch'

import About from './Components/MainSection/About/About'
import './index.css'

const store = createStore(reducer, applyMiddleware(thunk))

const render = () => ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={AppContainer}>
				<IndexRoute component={Home} /> 
				<Route path="card" component={CardContainer}/>
		        <Route path="about" component={About}/>
				<Route path="login" component={LoginContainer} />
				<Route path="__err" component={OtherError} />
				<Route path="*" component={NoMatch}/>
			</Route>
	  	</Router>
	</Provider>,
  document.getElementById('root')
);

render();