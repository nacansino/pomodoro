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
    isRunning: false,
    currTime: Date.now(),
    endTime: this.props.runTime,
  }

  addRunTime = () => {
    this.setState({
      runTime: this.state.runTime + timeInc
    })
  }

  startEndTrigger = () => {
    if (!this.state.isRunning){
      this.startTime();
    }else{
      this.endTime();
    }
  }

  startTime = () => {
    const endTime = GetEndTime(this.state.runTime, Date.now())
    this.setState({
      startTime: Date.now(),
      endTime: endTime,
      isRunning: true,
    })
  }

  endTime = () => {

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
    const elapsedTime = MillisecondsToHuman(this.state.endTime-Date.now());
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
          <StartStopBtn isRunning={this.state.isRunning} onClick={this.startEndTrigger} />
          <Button variant="contained">Reset</Button>
        </div>
      </div>
    );
  }
}
export default withStyles(styles)(TimerBox);
