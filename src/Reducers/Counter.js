
const initialState = {
 	value : 0,
} 

let Counter = (state=initialState, action) => {
	let _temp;
	switch (action.type) {
		case 'GETDATA' : 
			_temp= action.value;
			return {"value" : _temp};
		case 'INCREMENT' :
			_temp= state.value + 1;
			return {"value" : _temp};
		case 'DECREMENT' :
			_temp= state.value - 1;
			return {"value" : _temp};
		default :
			return state
	}
}

export default Counter;