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

	componentWillReceiveProps(nextProps) {
		if(nextProps.CardList.errMsg !== null) {
			//선택1. 특별한 URL로 보낼 수도 있음. 이때 query에 에러내용을 담아서 보낼 수 있다.
			this.props.router.push({
				pathname: "/__err",
				query: {errMsg: nextProps.CardList.errMsg}
			});
		}
	}

	render() {
			const { CardList, SaveMyCard, onIncrement, onDecrement, onRemoveCardInStorage, onSaveMyCard} = this.props
			const cardCount = CardList.cardList.length;
			const strSavecardlist = SaveMyCard.saveCardList.join();
			let textMsg;

			//선택2. 특별한 URL로 보내지 않고, 현재 화면을 분기처리해서 적절한 메시지를 노출할 수 있다.
			if(CardList.errMsg === null) textMsg = `${cardCount} 개의 여분의 카드가 있습니다.`;
			else textMsg = `카드를 받아오는데 문제가 생겼습니다. ${CardList.errMsg}`;

    		return (
    			 <div className="cardWrap">
    			 	<div className="TitleWrap">
		    			 <p className="TitleDesc"> {textMsg} </p>
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
