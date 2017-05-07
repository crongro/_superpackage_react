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

	// shouldComponentUpdate(nextProps, nextState) {
	// 	if(nextProps.Login.status !== "authenticated") {
	// 		console.log('shouldComponentUpdate true');
	// 		return true;
	// 	}
	// 	console.log('shouldComponentUpdate false');
	// 	return false;
	// 	//
	// }

	render() {
		console.log('login render');
		const handleChange = (evt) => {
			this.setState({ inputemail : evt.target.value });
		}

		const onLogin = (evt) => {
			evt.preventDefault();
			this.props.onLogin(this.state.inputemail);
		}

		const bAuth = (this.props.Login.status === "authenticated");

		let from = this.props.location && this.props.location.state && this.props.location.state.from;
		if (!from || from.pathname === "/login") from  = "/";

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