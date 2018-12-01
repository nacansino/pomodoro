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
  render() {
    const {classes} = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.sub1}>
          <Button variant="contained" color="primary">Sprint</Button>
          <Button variant="contained" color="secondary">Break</Button>
        </div>
        {/*flextimer container below*/}
        <TimerBox/>
      </div>
    );
  }
}
export default withStyles(styles)(Home);
