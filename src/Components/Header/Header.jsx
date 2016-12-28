import React from 'react'
import '../../Components/App.css'
import logo from '../../imgs/logo.svg';

const Header = () => (
	<div className="App">
		<div className="App-header">
			<img src={logo} className="App-logo" alt="logo" />
			<h2>REACT Project SuperSet</h2>
		</div>
		<p className="App-intro"> hi React, Redux, CRA ;-[] </p>
	</div>	
)

export default Header;