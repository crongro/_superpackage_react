let ServerData = (state='', action) => {
	let _temp;
	switch (action.type) {
		case 'GETDATA' : 
			_temp= action.value;
			return {"value" : _temp};
		default :
			return state
	}
}

export default ServerData;