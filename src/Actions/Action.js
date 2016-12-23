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