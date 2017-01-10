import React, { Component } from 'react'
import Header from './Header/Header'
import MainNavi from './MainNavi/MainNavi'
import './App.css'

class App extends Component {
	componentWillMount() {
    	// if(this.props.status !== 'authenticated') {
    	// 	this.props.router.push('/login');
    	// }
        const tokenresult = this.props.onLoadTokenInfo();
        if(tokenresult === null) {
        	console.log("token is..needed");
        	this.props.router.push('/login');
        }
	}

	// componentWillReceiveProps(nextProps) {
	// 	console.log("receiverprops", nextProps.Login.status);
 //    	if(nextProps.Login.status !== 'authenticated') {
 //    		console.log("must be login ..", nextProps.Login);
 //    		//this.props.router.push('/login');
 //    	}
 //    	console.log("not go login");
 //    }

	render() {
		let isAuthenticated = (this.props.Login.status === 'authenticated');
		//에러내용이 있으면 HEADER, NAVIGATION UI는 렌더링하지 않는다. 
		let bErrorPage = (this.props.router.location.pathname === "__err");

	    return (
	      <div>
	        {!bErrorPage &&  <Header />}
	        {!bErrorPage && isAuthenticated && <MainNavi />}
	        {this.props.children}
	      </div>
	    )

	}
}

export default App;