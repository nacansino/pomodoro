import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100vh',
    width: '100%'
  },
};

class Home extends Component {
  render() {
    const {classes} = this.props;
    return (
      <div className={classes.root}>
        <Button variant="contained" color="primary">Hello World</Button>
      </div>
    );
  }
}
export default withStyles(styles)(Home);
