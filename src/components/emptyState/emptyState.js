import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import SvgIcon from '@material-ui/core/SvgIcon';
import PropTypes from 'prop-types';
import React from 'react';


const styles = theme => ({
  container: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    [theme.breakpoints.up(800 + theme.spacing(6))]: {
      width: 800,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    width: '100%;',
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  noDocument: {
    marginTop: theme.spacing(2),
  },
  title: {
    marginTop: theme.spacing(1),
  },
  message: {
    marginTop: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },
});

const EmptyState = (props) => {
  const {
    classes,
    title,
    message,
    buttonName,
    buttonClick,
    svgPath,
  } = props;

  return (
    <div className={classes.container}>
      <Paper className={classes.paper}>
        <SvgIcon className={classes.noDocument} color="action" style={{ fontSize: 100 }}>
          <path d={svgPath} />
        </SvgIcon>
        <Typography className={classes.title} align="center" component="h1" variant="h6" color="inherit" gutterBottom>
          {title}
        </Typography>

        <Typography className={classes.message} align="justify" variant="body1" gutterBottom>
          {message}
        </Typography>

        <Button variant="contained" color="primary" className={classes.button} onClick={buttonClick}>
          {buttonName}
        </Button>
      </Paper>
    </div>
  );
};

EmptyState.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  buttonName: PropTypes.string.isRequired,
  buttonClick: PropTypes.func.isRequired,
  svgPath: PropTypes.string.isRequired,
};

export default withStyles(styles)(EmptyState);
