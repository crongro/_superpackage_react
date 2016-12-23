import React, { Component, PropTypes } from 'react'
import ShowCard from './ShowCard'
import './Counter.css'
import 'whatwg-fetch'

class Counter extends Component {

	static propTypes = {
		valuestate: PropTypes.object.isRequired,
		onIncrement: PropTypes.func.isRequired,
		onDecrement: PropTypes.func.isRequired,
		onSendFetchData: PropTypes.func.isRequired
	}

	//move to parent component
	componentDidMount() {
		this.props.onSendFetchData();
	}

	render() {
			const { valuestate, onIncrement, onDecrement } = this.props
    		return (
    			 <div className="cardWrap">
    			 	<div className="TitleWrap">
		    			 <p className="TitleDesc"> {valuestate.value} 개의 카드가 생성되었습니다. </p>
		    			 <button className="counterButton" onClick={onIncrement}> + </button>
		    			 <button className="counterButton" onClick={onDecrement}> - </button>
	    			 </div>
	    			 <ShowCard cardCount={valuestate.value} />
    			 </div>
    		)
    	}
}

export default Counter
