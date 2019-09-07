
import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
class Room extends React.Component {
  state = {
    isLit: false,
    temperature: 72,
  }

flipLight = () => {
  this.setState({
    isLit: !this.state.isLit
  });
};

lightOn = () => {
  this.setState({
    isLit: true
  });
};

lightOff = () => {
  this.setState({
    isLit: false
  });
};

increaseTemp = () => {
  this.setState({
    temperature: this.state.temperature + 1
  });
};

decreaseTemp = () => {
  this.setState({
    temperature: this.state.temperature - 1
  });
};

  render() {
    const brightness = this.state.isLit ? "lit" : "dark";

    return (
      <div className={`room ${brightness}`}>
        the room is {this.state.isLit ? 'lit' : 'dark'}
        <br />
        <button onClick={this.flipLight}>flip</button>
        <br />
        <button onClick={this.lightOn}>ON</button>
        <br />
        <button onClick={this.lightOff}>OFF</button>
        <br />
        <p>the current temperature is {this.state.temperature}</p>
        <br/>
        <button onClick={this.increaseTemp}>+</button>
        <br />
        <button onClick={this.decreaseTemp}>-</button>
      </div>

    );
  }
}

ReactDOM.render(
  <Room />,
  document.getElementById('root')
);
