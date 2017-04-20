import React, { Component } from 'react'
import Header from './Header/Header'
import './App.css'

class App extends Component {
	// componentWillMount() {
 //    const tokenresult = this.props.onLoadTokenInfo();
 //    //token이 없으면 null을 반환받아 동기적으로 처리가 가능함.
 //    if(tokenresult === null) {
 //    	console.log("token is..needed");
 //    	this.props.history.push('/login');
 //    }
	// }

	// componentWillReceiveProps(nextProps) {
	// 	console.log("receiverprops", nextProps.Login.status);
 //    	if(nextProps.Login.status !== 'authenticated') {
 //    		console.log("must be login ..", nextProps.Login);
 //    		//this.props.router.push('/login');
 //    	}
 //    	console.log("not go login");
 //    }

	render() {
		//let isAuthenticated = (this.props.Login.status === 'authenticated');
		//에러내용이 있으면 HEADER, NAVIGATION UI는 렌더링하지 않는다. 
		//let bErrorPage = (this.props.location.pathname === "__err");

	    return (
	      <div>
	        <Header/>
	      </div>
	    )

	}
}

export default App;