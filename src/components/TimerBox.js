import React, { Component } from 'react';
import StartStopBtn from './StartStopBtn'

import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add'
import MinusIcon from '@material-ui/icons/Remove'
import Typography from '@material-ui/core/Typography';

import { withStyles } from '@material-ui/core/styles';

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
  state = {
    sprintTime: this.props.sprintTime,
  }
  render() {
    const {classes} = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.sub1}>
          <Button mini variant="fab" aria-label="Add" className={classes.button}>
            <MinusIcon />
          </Button>
          <Typography variant="h3">25</Typography>
          <Button mini variant="fab" aria-label="Add" className={classes.button}>
            <AddIcon />
          </Button>
        </div>
        <div className={classes.sub1}>
          <Typography variant="h1">25:00</Typography>
        </div>
        <div className={classes.sub1}>
          <StartStopBtn isRunning={true}/>
          <Button variant="contained">Reset</Button>
        </div>
      </div>
    );
  }
}
export default withStyles(styles)(TimerBox);
