import React from 'react'
import { Route, Switch, Redirect} from 'react-router-dom';
import Home from './MainSection/Home/Home'
import CardContainer from '../Container/MainSection/Card/CardContainer'
import OtherError from './Error/OtherError'
import NoMatch from './Error/NoMatch'
import About from './MainSection/About/About'
//import OtherError from './Components/Error/OtherError'
import MainNavi from './MainNavi/MainNavi'
import '../index.css'


const Body = (props) => {
	const isAuto = !!(props.Login.status === "authenticated");
	const result = (isAuto) 
	  ? ( <div>
		  		<MainNavi/>
		   		<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/card" component={CardContainer} />
						<Route path="/about" component={About} />
						<Route path="/__err" component={OtherError} />
						<Route component={NoMatch} />
					</Switch>
				</div>) 
	  : (<Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }} />)
	  return  result;
};

export default Body;
