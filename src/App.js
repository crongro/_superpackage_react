import React  from 'react';
import Counter from './Counter'
import * as actions from './Action'
import { connect } from 'react-redux'
import logo from './logo.svg';
import './App.css';


let App = ({ valuestate, onIncrement, onDecrement}) => {
  console.log(valuestate, onIncrement);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p> Thanks nigayo !!!!!</p>

        <Counter 
          value={valuestate} 
          onIncrement={onIncrement}
          onDecrement={onDecrement}
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
    }
  }
};

App = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
