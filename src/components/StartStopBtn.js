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
    if (this.props.isRunning) {
      return (
        <div>
            <Button variant="contained" color="secondary"  onClick={this.props.onClick}>Pause</Button>
        </div>
      );
    } else {
      return (
        <div>
            <Button variant="contained" color="primary" onClick={this.props.onClick}>Start</Button>
        </div>
      );
    }
  }
}
export default withStyles(styles)(StartStopBtn);
