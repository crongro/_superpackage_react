import React, { Component } from 'react'
import './ShowCardNavi.css'

class ShowCardNavi extends Component {
	render() {
    		//const { value }  = this.props
    		return (
    			 <div className="naviWrap">
    			 	<ul >
    			 		<li><a href="#">HOME</a></li>
    			 		<li><a href="#">CARD</a></li>
    			 		<li><a href="#">DUMMY</a></li>
    			 	</ul>
    			 </div>
    		)
    	}
}

export default ShowCardNavi