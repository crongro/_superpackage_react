import 'whatwg-fetch'

export const addCount = () => ({
	type : 'INCREMENT',
})

export const minusCount = () => ({
	type : 'DECREMENT',
})

export const getFetchData = (data) => ({
	type : 'GETDATA',
	value : data
})

export const apologize = () => ({
	type : 'GETWRONGDATA',
})


function fetchData() {
  return fetch('https://api.github.com/users/facebook')
}

function _dispatchForgetFetchData(dispatch, value) {
	dispatch(getFetchData(value))
}


export const sendFetchData = (dispatch) => {

	return (dispatch) => {
			    return fetchData()
			    .then((response) => {
			    	return response.json();
				})
			    .then((json) => { 
			    	_dispatchForgetFetchData(dispatch, json.public_gists);
			    })
				.catch((ex) => dispatch(apologize(ex)))
			}
}

// const _get = (dispatch) => {
// 	fetchData()
//     .then((response) => {
//     	return response.json();
// 	})
//     .then((json) => { 
//     	console.log("this", json);
//     	return json.public_gists;
//     })
// 	.catch((ex) => dispatch(apologize(ex)))
// }

// export const sendFetchData = (dispatch) => {

// 	return (dispatch) => {
// 				const value = _get(dispatch);
// 				console.log('value is ', value)
// 			    return _dispatchForgetFetchData(dispatch, value);
// 			}
// }


// function getFetchDataValue(dispatch) {
// 	return (dispatch) => {
// 	    return fetchData()
// 	    .then((response) => (response.json()))
// 	    .then((json) => (json.public_gists))
// 		.catch((ex) => (ex))
// 	}
// }

// export const sendFetchData = (dispatch) => {
// 	const value = getFetchDataValue(dispatch);
// 	_dispatchForgetFetchData(dispatch, value);
// }


