const initialState = {
 	status : ""
} 

let Login = (state=initialState, action) => {
	switch (action.type) {

		case 'LOGINSUCCESS' :
			return {status : "authenticated"};

		case 'CHECKING_TOKEN' :
			return {status : "checking"}

		case 'NEED_TOKEN' :
			return {status : "needtoken"}

		default :
			return state
	}
}

export default Login;