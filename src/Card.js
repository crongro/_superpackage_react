import React  from 'react';
import Counter from './Counter'
import * as actions from './Action'
import { connect } from 'react-redux'

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

App = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
