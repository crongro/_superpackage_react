
const initialState = {
 	value : 0,
 	//memos : []
} 

export default (state=initialState, action) => {
	//console.log("state ", state);
	switch (action.type) {
		case 'INCREMENT' :
			let value = state.value + 1;
			return {"value" : value};
		case 'DECREMENT' :
			let value2 = state.value - 1;
			return {"value" : value2};
		default :
			return state
	}
}