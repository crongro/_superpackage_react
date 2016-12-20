import React, { Component, PropTypes } from 'react'
import ShowCard from './ShowCard'
import './Counter.css'
import 'whatwg-fetch'

class Counter extends Component {

	static propTypes = {
		value : PropTypes.number.isRequired,
		onIncrement: PropTypes.func.isRequired
	}

	componentDidMount() {
		this.props.onSendFetchData();
	}

	render() {
			const { value, onIncrement, onDecrement } = this.props
    		return (
    			 <div className="cardWrap">
    			 	<div className="TitleWrap">
		    			 <p className="TitleDesc"> {value} 개의 카드가 생성되었습니다. </p>
		    			 <button className="counterButton" onClick={onIncrement}> + </button>
		    			 <button className="counterButton" onClick={onDecrement}> - </button>
	    			 </div>
	    			 <ShowCard cardCount={value} />
    			 </div>
    		)
    	}
}

export default Counter
