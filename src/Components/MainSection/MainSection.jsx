import React, { Component } from 'react'
import MainNavi from '../MainNavi/MainNavi'


class MainSection extends Component {
	render() {
		console.log("mainsection children is " , this.props.children);
		return (
			<div>
				<MainNavi />
				{this.props.chilren}
			</div>
		)

	}
}

export default MainSection;