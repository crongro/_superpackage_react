const initialState = {
 	saveCardList : []
} 

let SaveMyCard = (state=initialState, action) => {
	switch (action.type) {

		case 'SAVEMYCARD' :
			return {"saveCardList":[...state.saveCardList, +action.cardnumber]};

		default :
			return state
	}
}

export default SaveMyCard;