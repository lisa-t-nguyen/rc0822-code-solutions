import React from 'react';

export class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { buttonClick: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(props) {
    this.setState((state, props) => ({
      buttonClick: state.buttonClick + 1
    }));
  }

  render() {
    let btnClass = 'btn-purple';
    const btnText = 'Hot Button';
    if (this.state.buttonClick <= 3) {
      btnClass = 'btn-purple';
    } else if (this.state.buttonClick <= 6) {
      btnClass = 'btn-lightpurple';
    } else if (this.state.buttonClick <= 9) {
      btnClass = 'btn-coral';
    } else if (this.state.buttonClick <= 12) {
      btnClass = 'btn-orange';
    } else if (this.state.buttonClick <= 15) {
      btnClass = 'btn-yellow';
    } else if (this.state.buttonClick <= 18) {
      btnClass = 'btn-white';
    }
    return <button className={`btn ${btnClass}`} onClick={this.handleClick}>{btnText}</button>;
  }
}
