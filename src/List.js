import React, { Component } from 'react';
import './List.css';

class List extends Component {

  handleClick(evt) {
    console.log(evt.target);
  }

  render() {
    return (
      <div className="list">
        <ul>
          <li>apple</li>
          <li onClick={this.handleClick}>orange</li>
        </ul>
      </div>
    );
  }
}

export default List;
