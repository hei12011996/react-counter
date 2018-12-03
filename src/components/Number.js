import React, { Component } from 'react';

class Number extends Component {

  render() {
    return (
        <span>
          number: {this.props.numberValue}
        </span>
    );
  }
}

export default Number;
