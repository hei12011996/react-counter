import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Number from './components/Number.js';

class App extends Component {
  state = {number: <Number numberValue={this.props.defaultNumber} />, counter: this.props.defaultNumber};
  updateNumber = () => {
    this.state.counter = this.props.onClickFunc(this.state.counter);
    this.setState({number: <Number numberValue={this.state.counter} />, counter: this.state.counter});
  }

  render() {
    return (
      <div>
        <button onClick={this.updateNumber}>
          Hello world!
        </button>
        {this.state.number}
      </div>
    );
  }
}

export default App;
