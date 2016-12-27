import React, { Component, PropTypes } from 'react'
import ShowCard from './ShowCard'
import SaveCard from './SaveCard'
import './CardBoard.css'
import 'whatwg-fetch'

class CardBoard extends Component {

	static propTypes = {
		CardList: PropTypes.object.isRequired,
		SaveMyCard: PropTypes.object.isRequired,
		onIncrement: PropTypes.func.isRequired,
		onDecrement: PropTypes.func.isRequired,
		onRemoveCardInStorage : PropTypes.func.isRequired,
		onSaveMyCard: PropTypes.func.isRequired,
		onSendFetchData: PropTypes.func.isRequired
	}

	//move to parent component
	componentDidMount() {
		this.props.onSendFetchData();
	}

	render() {
			const { CardList, SaveMyCard, onIncrement, onDecrement, onRemoveCardInStorage, onSaveMyCard} = this.props
			const cardCount = CardList.cardList.length;
			const strSavecardlist = SaveMyCard.saveCardList.join();
    		return (
    			 <div className="cardWrap">
    			 	<div className="TitleWrap">
		    			 <p className="TitleDesc"> {cardCount} 개의 여분의 카드가 있습니다. </p>
		    			 <button className="counterButton" onClick={onIncrement}> + </button>
		    			 <button className="counterButton" onClick={onDecrement}> - </button>
	    			 </div>
	    			 <ShowCard cardList={CardList.cardList} />
	    			 <SaveCard onRemoveCardInStorage={onRemoveCardInStorage} onSaveMyCard={onSaveMyCard} savecardlist={strSavecardlist} />
    			 </div>
    		)
    	}
}

export default CardBoard
