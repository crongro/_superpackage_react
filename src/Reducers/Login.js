const initialState = {
 	status : ""
} 

let Login = (state=initialState, action) => {
	switch (action.type) {

		case 'LOGINSUCCESS' :
			return {status : "authenticated"};

		default :
			return state
	}
}

export default Login;