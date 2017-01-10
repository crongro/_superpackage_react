import Login from '../../Components/User/Login'
import * as actions from '../../Actions/Action'
import { connect } from 'react-redux'

const mapStateToProps = (props)  => {
  return props;
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogin(email) {
      dispatch(actions.sendLogin(email));
    }
  }
};


const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginContainer;
