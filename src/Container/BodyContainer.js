import Body from '../Components/Body'
import * as actions from '../Actions/Action'
import { connect } from 'react-redux'

import { withRouter } from 'react-router-dom'

const mapStateToProps = (props)  => {
  console.log("props of Body Container is ", props);
  return props;
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLoadTokenInfo() {
      const token = sessionStorage.getItem('myToken');
      if( !token || token === '') {
        return null;
      }
      //아래 validToken의 결과값은 함수이다. 즉 dispatch는 {}형태만 받을 수 있는 것이 아니고, 
      //아래와 같이 어떠한 함수를 받았을때도 처리를 할 수 있다.
      dispatch(actions.validToken(dispatch));
    },
  }
};


const BodyContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Body));

export default BodyContainer;
