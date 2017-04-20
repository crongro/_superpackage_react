import React from 'react'
import '../App.css'
import {NavLink} from 'react-router-dom'

const MainNavi = () => {
	return(
	<div className="naviWrap">
	  <ul>
	    <li><NavLink activeClassName="active" exact to="/">Home</NavLink></li>
	    <li><NavLink activeClassName="active" to="/card" >CARD</NavLink></li>
	    <li><NavLink activeStyle={{color:'magenta'}} to="/about">ABOUT</NavLink></li>
	  </ul>
	</div>	
	)
}

export default MainNavi;
