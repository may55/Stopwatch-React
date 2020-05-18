import React, { Component } from 'react';

class Stopwatch extends Component {
  constructor(props){
    super(props);
    this.state = {
      timePassed: 0,
      milliSeconds: '00',
      seconds: '00',
      minutes: '00',
      isStop: false,
    }
  }

  render(){
    let {milliSeconds} = this.state;
    let {seconds} = this.state;
    let {minutes} = this.state;
    

    return (
      <div className="watch">
        <div className="stopwatch-screen">
          {minutes} - {seconds} - {milliSeconds}
        </div>
        <div className="stopwatch-btn">
          <div className="btn btn-primary">Start</div>
          <div className="btn btn-danger">Stop</div>
        </div>
      </div>
    )
  };
}

export default Stopwatch;