import React, { Component } from 'react';
import StartStopBtn from './StartStopBtn'

import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add'
import MinusIcon from '@material-ui/icons/Remove'
import Typography from '@material-ui/core/Typography';
import { MillisecondsToHuman } from '../assets/helpers'
import { GetEndTime } from '../assets/helpers'

import { withStyles } from '@material-ui/core/styles';

const timeInc = 5;

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    height: '100vh',
    width: '100%'
  },
  sub1: {
    display: 'flex',
    justifyContent: 'center'
  },
  button: {
    margin: theme.spacing.unit,
  }
});

class TimerBox extends Component {
  componentDidMount() {
    this.forceUpdateInterval = setInterval(() => this.forceUpdate(), 50);
  }

  componentWillUnmount() {
    clearInterval(this.forceUpdateInterval);
  }

  state = {
    //Initialize state
    runTime: this.props.runTime,
    startTime: 0,
    runningState: "reset",
    currTime: Date.now(),
    endTime: 0,
    pauseTime: 0,
  }

  addRunTime = () => {
    this.setState({
      runTime: this.state.runTime + timeInc
    })
  }

  startPauseTrigger = () => {
    switch(this.state.runningState){
      case "reset":
        this.startTime();
        break;
      case "pause":
        this.continueTime();
        break;
      default:
        this.pauseTime();
    }
  }

  startTime = () => {
    const endTime = GetEndTime(this.state.runTime, Date.now())
    this.setState({
      startTime: Date.now(),
      endTime: endTime,
      runningState: "run",
    })
  }

  continueTime = () => {
    const endTime=this.state.endTime+(Date.now()-this.state.pauseTime);
    this.setState({
      runningState: "run",
      pauseTime: 0,
      endTime: endTime,
    })
  }

  pauseTime = () => {
    this.setState({
      runningState: "pause",
      pauseTime: Date.now(),
    })
  }

  resetTime = () => {
    this.setState({
      startTime: 0,
      runningState: "reset",
      currTime: Date.now(),
      endTime: 0,
      pauseTime: 0,
    })
  }

  subRunTime = () => {
    const runTime = this.state.runTime - timeInc
    if (runTime>0){
      this.setState({
        runTime: runTime
      })
    } else {
      this.setState({runTime: timeInc});
    }

  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.runTime !== this.state.runTime) {
      this.setState({ runTime: nextProps.runTime });
    }
  }

  render() {
    const {classes} = this.props;
    const tdiff = this.state.runningState==="run" ? this.state.endTime-Date.now() : (this.state.runningState==="pause" ? this.state.endTime-this.state.pauseTime: this.state.runTime*60*1000);
    const elapsedTime=MillisecondsToHuman(tdiff);
    return (
      <div className={classes.root}>
        <div className={classes.sub1}>
          <Button mini variant="fab" aria-label="Add" className={classes.button} onClick={this.subRunTime}>
            <MinusIcon />
          </Button>
          <Typography variant="h3">{this.state.runTime}</Typography>
          <Button mini variant="fab" aria-label="Add" className={classes.button} onClick={this.addRunTime}>
            <AddIcon />
          </Button>
        </div>
        <div className={classes.sub1}>
          <Typography variant="h1">{elapsedTime}</Typography>
        </div>
        <div className={classes.sub1}>
          <StartStopBtn isRunning={this.state.runningState==="run"} aw="awd" onClick={this.startPauseTrigger} />
          <Button variant="contained" onClick={this.resetTime}>Reset</Button>
        </div>
      </div>
    );
  }
}
export default withStyles(styles)(TimerBox);
