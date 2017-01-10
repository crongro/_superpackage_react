const initialState = {
 	cardList : [],
 	errMsg : null
}

let _getCardNumberList = (count) => {
	let i=1;
	let arr=[];
	while(i<=count) {
		arr.push(i);
		i++;
	}
	return arr;
}

let _addCardNumber = (arr) => {
	let lastNumber = arr[arr.length-1];
	arr.push(lastNumber+1);
	return arr;
}

let _removeLastIndex = (arr) => {
	return arr.slice(0,-1);
}

let _removeIndex = (arr, number) => {
	const num = arr.indexOf(+number);
	arr.splice(num,1);
	return arr;
}

let CardList = (state=initialState, action) => {
	switch (action.type) {

		case 'GETDATA' : 
			let _temp= action.value;
			let _arr = _getCardNumberList(_temp);
			return {...initialState, "cardList":_arr};

		case 'GETWRONGDATA' : 
			let errMsg = action.value;
			return {...initialState, "errMsg": errMsg};

		case 'INCREMENT' :
			return {...initialState, "cardList":_addCardNumber(state.cardList) };

		case 'DECREMENT' :
			return {...initialState, "cardList":_removeLastIndex(state.cardList) };

		case 'REMOVECARDINSTORAGE' :
			return {...initialState, "cardList":_removeIndex(state.cardList, action.number) };

		default :
			return state
	}
}

export default CardList;