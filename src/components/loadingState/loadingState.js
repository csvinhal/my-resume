import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';


const styles = theme => ({
  loading: {
    height: '100vh;',
    width: '100%;',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  progress: {
    margin: theme.spacing.unit * 2,
  },
});

const LoadingState = (props) => {
  const { classes } = props;

  return (
    <div className={classes.loading}>
      <CircularProgress className={classes.progress} />
    </div>
  );
};

LoadingState.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
};

export default withStyles(styles)(LoadingState);
