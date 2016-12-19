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


export const sendFetchData = () => {

	return (dispatch) => {
			    return fetchData()
			    .then((response) => (response.json()))
			    .then((json) => dispatch(getFetchData(json.public_gists)))
				.catch((ex) => dispatch(apologize(ex)))
			}
  }
