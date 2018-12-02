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
    switch(this.props.runningState){
      case "run":
        return (
          <div>
              <Button variant="contained" color="secondary"  onClick={this.props.onClick}>Pause</Button>
          </div>
        );
      case "reset":
      case "pause":
        return (
          <div>
              <Button variant="contained" color="primary" onClick={this.props.onClick}>Start</Button>
          </div>
        );
      default: //"timesup" or whatever
        return (
          <div>
              <Button variant="contained" disabled color="secondary">Pause</Button>
          </div>
        );
    }
  }
}

export default withStyles(styles)(StartStopBtn);
