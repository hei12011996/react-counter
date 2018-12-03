import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {number: this.props.defaultNumber};
  updateNumber = () => {
    this.setState({number: this.props.onClickFunc(this.state.number)});
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
