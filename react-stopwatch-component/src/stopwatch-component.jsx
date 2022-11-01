import React from 'react';

export class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      isPlay: false
    };
    this.clickPlay = this.clickPlay.bind(this);
    this.clickPause = this.clickPause.bind(this);
    this.circleReset = this.circleReset.bind(this);
  }

  circleReset(props) {
    this.setState(state => ({
      counter: 0
    }));
  }

  clickPlay(props) {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
    this.setState({ isPlay: !this.state.isPlay });
  }

  clickPause(props) {
    clearInterval(this.timerID);
    this.setState({ isPlay: !this.state.isPlay });
  }

  tick() {
    this.setState(state => ({
      counter: state.counter + 1
    }));
  }

  render() {
    if (this.state.isPlay) {
      return (
        <div>
          <div className='circle'>
            <div className='number'>{this.state.counter}</div>
          </div>
          <i className='fa-solid fa-pause button' onClick={this.clickPause}></i>
        </div>
      );
    } else {
      return (
        <div>
          <div className='circle' onClick={this.circleReset}>
            <div className='number'>{this.state.counter}</div>
          </div>
          <i className='fa-solid fa-play button' onClick={this.clickPlay}></i>
        </div>
      );
    }
  }
}
