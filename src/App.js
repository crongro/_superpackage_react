import React  from 'react';
import Counter from './Counter'
import * as actions from './Action'
import { connect } from 'react-redux'
import logo from './logo.svg';
import './App.css';

let App = ({ valuestate, onIncrement, onDecrement, onSendFetchData}) => {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>REACT Super Base</h2>
        </div>

        <p className="App-intro">
          hi React, Redux, CRA ;-)
        </p>

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
