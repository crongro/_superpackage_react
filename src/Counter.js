import React, { Component } from 'react'
import ShowCard from './Components/ShowCard'
import ShowCardNavi from './Components/ShowCardNavi.js'
import './Counter.css'

class Counter extends Component {
	render() {
    		const { value, onIncrement, onDecrement } = this.props
    		return (
    			 <div>
    			 	<div className="TitleWrap">
		    			 <p className="TitleDesc"> {value} 개의 카드가 생성되었습니다. </p>
		    			 <button className="counterButton" onClick={onIncrement}> + </button>
		    			 <button className="counterButton" onClick={onDecrement}> - </button>
	    			 </div>
	    			 <ShowCard cardCount={value} />
	    			 <ShowCardNavi />
    			 </div>
    		)
    	}
}

export default Counter
