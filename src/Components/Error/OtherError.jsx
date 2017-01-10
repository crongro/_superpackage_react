import React from 'react'
import '../Common.css'

const OtherError = (props) => {

	//에러메시지를 받아서 처리할 수 있다
	let errMsg = props.location.query.errMsg;

	if(/SyntaxError:/.test(errMsg)) errMsg = "문법오류가 있는 것 같네요";

	return (
	<div>
		<h1 className="textCenter">이크;;<br/>어떤 문제가 생겼어요! &gt;&lt;</h1>
		<p className="textCenter"> {errMsg} </p>
	</div>
	)
}

export default OtherError;