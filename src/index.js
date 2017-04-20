import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './Reducers/index'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './Components/App'
import BodyContainer from './Container/BodyContainer'
import LoginContainer from './Container/Login/LoginContainer'
import './index.css'


const store = createStore(reducer, applyMiddleware(thunk))

const render = () => ReactDOM.render(
	<Provider store={store}>
		<Router>
		  <div>
				<App/>
				<BodyContainer/>
				<Route exact path="/login" component={LoginContainer} />
			</div>
	  </Router>
	</Provider>,
  document.getElementById('root')
);

render();