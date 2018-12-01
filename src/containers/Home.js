import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TimerBox from '../components/TimerBox'


import { withStyles } from '@material-ui/core/styles';

const styles = {
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
  }
};

class Home extends Component {
  state = {
    mode: 0,
    runTime: [25,5],
  }
  goSprint = () => {
    this.setState({mode: 0});
  }
  goBreak = () => {
    this.setState({mode: 1});
  }

  render() {
    const {classes} = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.sub1}>
          <Button variant="contained" disabled={this.state.mode===0} onClick={this.goSprint} color="primary">Sprint</Button>
          <Button variant="contained" disabled={this.state.mode===1} onClick={this.goBreak} color="secondary">Break</Button>
        </div>
        {/*flextimer container below*/}
        <div className={classes.sub1}>
          <TimerBox runTime={this.state.runTime[this.state.mode]}/>
        </div>
      </div>
    );
  }
}
export default withStyles(styles)(Home);
