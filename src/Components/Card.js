//MOVE TO Container
import React, { PropTypes }   from 'react';
import Counter from './Counter'
import * as actions from '../Actions/Action'
import { connect } from 'react-redux'

//MOVE TO New child component
let App = ({ valuestate, onIncrement, onDecrement, onSendFetchData}) => {
    return (
      <div>
        <Counter 
          value={valuestate.value} 
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onSendFetchData={onSendFetchData}
          />
      </div>
    );
}

const mapStateToProps = (valuestate)  => {
  return {valuestate};
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDecrement() {
      dispatch(actions.minusCount());
    },
    onIncrement() {
      dispatch(actions.addCount());
    },
    onSendFetchData() {
      dispatch(actions.sendFetchData(dispatch));
    }
  }
};

App.propTypes = {
  valuestate: PropTypes.object.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onSendFetchData: PropTypes.func.isRequired,
}

App = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
