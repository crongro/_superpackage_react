import App from '../Components/App'
import * as actions from '../Actions/Action'
import { connect } from 'react-redux'

const mapStateToProps = (props)  => {
  //console.log("props of AppContainer is ", props);
  return props;
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLoadTokenInfo() {
      const token = sessionStorage.getItem('myToken');
      if( !token || token === '') {
        return null;
      }
      dispatch(actions.validToken(dispatch));
    },
  }
};


const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
