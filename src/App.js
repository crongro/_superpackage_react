import React from 'react'
import { IndexLink } from 'react-router' 
import NavLink from './NavLink'
import logo from './logo.svg';
import './App.css'

export default React.createClass({
  render() {
    return (
      <div>

        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>CRA SuperSet</h2>
          </div>
          <p className="App-intro"> hi React, Redux, CRA ;-[] </p>
        </div>

        <div className="naviWrap">
          <ul>
            <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
            <li><NavLink to="/card">CARD</NavLink></li>
            <li><NavLink to="/about">ABOUT</NavLink></li>
          </ul>
        </div>
        {this.props.children}

      </div>
    )
  }
})