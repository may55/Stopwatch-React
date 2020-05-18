import React, { Component } from 'react';

class Stopwatch extends Component {
  constructor(props){
    super(props);
    this.state = {
      timePassed: 0,
      milliSeconds: '00',
      seconds: '00',
      minutes: '00',
      isStarted: false,
    }
  }

  formatter = (input) => {
    const time = input.toString();
    return time.length < 2 ? '0' + time : time.slice(-2);
  }

  formatTime = () => {
    this.setState({
      milliSeconds: this.formatter(this.state.timePassed),
      seconds: this.formatter(Math.floor((this.state.timePassed / 100) % 60)),
      minutes: this.formatter(Math.floor((this.state.timePassed / (100 * 60)) % 60))
    });
  }

  timeNow = () => {
    let seconds = parseInt(this.state.timePassed, 10) + 1;
    this.setState({ timePassed: seconds });
    this.formatTime();
  }

  startTime = () => {
    if(this.state.isStarted===true) {return; }
    this.setState({ timePassed: 0,
                    milliSeconds: '00',
                    seconds: '00',
                    minutes: '00',
                    isStarted: true, 
    });
    this.interval = setInterval(this.timeNow, 10);
  }

  

  stopTime = () => {
    window.clearInterval(this.interval);
    this.setState({ isStarted: false,           
    });
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
          <div className="btn btn-primary" 
          onClick={this.startTime.bind(this)}>Start
          </div>
          <div className="btn btn-danger" 
          onClick={this.stopTime.bind(this)}>Stop
          </div>
        </div>
      </div>
    )
  };
}

export default Stopwatch;