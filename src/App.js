import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {number: 0};
  updateNumber = () => {
    this.setState({number: 1});
  }

  render() {
    return (
      <div>
        <button onClick={this.updateNumber}>
          Hello world!
        </button>
        <span>
          number: {this.state.number}
        </span>
      </div>
    );
  }
}

export default App;
