import React from 'react'
import { IndexLink } from 'react-router' 
import NavLink from './NavLink'
import '../App.css'

const MainNavi = () => (
	<div className="naviWrap">
	  <ul>
	    <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
	    <li><NavLink to="/card">CARD</NavLink></li>
	    <li><NavLink to="/about">ABOUT</NavLink></li>
	  </ul>
	</div>	
)

export default MainNavi;