import React, { Component } from 'react'
import './Login.css'
import {Redirect} from 'react-router-dom'


class Login extends Component {

	constructor(props) {
		super(props);
		this.state = {inputemail: ""};
	}

	componentWillReceiveProps(nextProps) {
		// if(nextProps.Login.status === "authenticated") {
		// 	console.log("auth is ok");
		// 	this.props.history.push("/")
		// }
	}

	/*
	shouldComponentUpdate(nextProps, nextState) {
		console.log("shouldComponUpdate loaded");
		if(nextProps.Login.status !== "authenticated") {
			console.log("shouldComponUpdate auth is ok");
			return true;
		}
		return false;
		//this.props.history.push("/")
	}
	*/

	render() {
		const handleChange = (evt) => {
			this.setState({ inputemail : evt.target.value });
		}

		const onLogin = (evt) => {
			evt.preventDefault();
			this.props.onLogin(this.state.inputemail);
		}

		const bAuth = (this.props.Login.status === "authenticated");

		const {from} = this.props.location.state;

		if (bAuth) {
      return (
        <Redirect to={from} />
      )
    }

		return (
			<div className="loginWrap">
				<h1>Login Page</h1>
				<section>
					E-mail: <input type="email" name="useremail"  onChange={ handleChange }/>
					<input type="submit" onClick={onLogin}/>
				</section>
			</div>
		)
	}

}

export default Login;