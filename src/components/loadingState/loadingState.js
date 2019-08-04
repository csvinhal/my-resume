import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';

const styles = theme => ({
  loading: {
    height: '100vh;',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'fixed',
    top: 0,
    backgroundColor: 'black',
    opacity: '0.5',
    zIndex: '9999',
  },
  progress: {
    margin: theme.spacing(2),
    animationDuration: '3s',
  },
});

const LoadingState = (props) => {
  const { classes } = props;

  return (
    <div className={classes.loading}>
      <CircularProgress className={classes.progress} size={60} />
    </div>
  );
};

LoadingState.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
};

export default withStyles(styles)(LoadingState);
