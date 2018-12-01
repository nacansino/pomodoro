import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    display: 'flex',
  }
};

class StartStopBtn extends Component {
  render() {
    const {classes} = this.props;
    if (classes.isRunning) {
      return (
        <div>
            <Button variant="contained" color="secondary">Stop</Button>
        </div>
      );
    } else {
      return (
        <div>
            <Button variant="contained" color="primary">Start</Button>
        </div>
      );
    }
  }
}
export default withStyles(styles)(StartStopBtn);
