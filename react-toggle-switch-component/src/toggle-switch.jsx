import React from 'react';

export class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(props) {
    this.setState({ isClicked: !this.state.isClicked });
  }

  render() {
    if (this.state.isClicked) {
      return (
      <div className='btn-off-gray' onClick={this.handleClick}>
        <div className='btn-off'></div>
        <span className='ptext'>OFF</span>
      </div>
      );
    } else {
      return (
      <div className='btn-on-green' onClick={this.handleClick}>
        <div className='btn-on'></div>
        <span className='ptext'>ON</span>
      </div>
      );
    }
  }
}
