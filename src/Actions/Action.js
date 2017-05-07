import 'whatwg-fetch'

export const addCount = () => ({
	type : 'INCREMENT',
})

export const minusCount = () => ({
	type : 'DECREMENT',
})

export const removeCardInStorage = (number) => ({
	type : 'REMOVECARDINSTORAGE',
	number : number
})

export const savemycard = (number) => ({
	type : 'SAVEMYCARD',
	cardnumber : number
})

export const getFetchData = (data) => ({
	type : 'GETDATA',
	value : data
})

export const apologize = (errMsg) => ({
	type : 'GETWRONGDATA',
	value: errMsg
})

export const successToken = (value) => ({
	type : 'LOGINSUCCESS',
	value : value
})

export const failToken = () => ({
	type : 'FAILTOKEN',
})

export const sendLogin = (email) => {
	sessionStorage.setItem('myToken', 'dummytoken');
	return {
		type : "LOGINSUCCESS",
		value : "dummytoken"
	}
}

export const checkingToken = () => ({
	type : 'CHECKING_TOKEN'
})

export const needToken = () => ({
	type : 'NEED_TOKEN'
})


function fetchData() {
  return fetch('https://api.github.com/users/facebook')
  //return fetch('http://localhost:3000/_data/fetch.json')
}

function _dispatchForgetFetchData(dispatch, value) {
	dispatch(getFetchData(value))
}

//ajax를 root component에서 해서 결과받 action을 호출할수는 없을까?
export const sendFetchData = (dispatch) => {
	return (dispatch) => {
			    return fetchData()
			    .then((response) => {
			    	//status 에 따라서 다르게 메시지를 만들어서 처리할 수 있습니다.
			    	if (response.status === 404) {throw "error_404";}
			    	return response.json();
				})
			    .then((json) => { 
			    	_dispatchForgetFetchData(dispatch, json.public_gists);
			    })
				.catch((ex) => { 
					dispatch(apologize(ex))
				})
			}
}

function checkValidToken() {
	return fetch('https://api.github.com/users/facebook');
}

export const validToken = (dispatch) => {

	dispatch(checkingToken());

	//thunk를 사용해서 action이 {}를 반환하는게 아니라 함수를 반환할 수 있게 됐다.
	return (dispatch) => {
			    return checkValidToken()
			    .then((response) => {
			    	return response.json();
				})
			    .then((json) => { 
			    	if(json.public_gists) { 
			    		//_dispatchForgetFetchData(dispatch, json.public_gists);
			    		dispatch(successToken('dummytoken'));
			    	} else {
			    		dispatch(failToken());
			    	}
			    })
				.catch((ex) => dispatch(apologize(ex)))
			}
}
