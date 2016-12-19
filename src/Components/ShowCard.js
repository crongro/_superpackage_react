import React, { Component, PropTypes } from 'react'
import './ShowCard.css'

class ShowCard extends Component {

    static propTypes = {
        cardCount : PropTypes.number.isRequired
    }

	render() {
    		const { cardCount } = this.props

            let aCardList = [];
            for (var i = 0; i < cardCount; i++) {
                let str =`${i+1}번째 카드`;
                aCardList.push(<li key={i}> {str} </li>)
            }

    		return (
    			 <div className="cardUIWrap">
                    <ul className="cardList">
                        {aCardList}
                    </ul>
    			 </div>
    		)
    	}
}

export default ShowCard