import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'center'
  }
};

class TimerBox extends Component {
  render() {
    const {classes} = this.props;
    return (
      <div className={classes.root}>
        hellow
        hi
      </div>
    );
  }
}
export default withStyles(styles)(TimerBox);
