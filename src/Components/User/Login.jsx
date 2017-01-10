import React, { Component } from 'react'
import './Login.css'


class Login extends Component {

	constructor(props) {
		super(props);
		this.state = {inputemail: ""};
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps.Login.status === "authenticated") {
			console.log("auth is ok");
			this.props.router.push("/")
		}
	}

	render() {
		const handleChange = (evt) => {
			this.setState({ inputemail : evt.target.value });
		}

		const onLogin = (evt) => {
			evt.preventDefault();
			this.props.onLogin(this.state.inputemail);
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