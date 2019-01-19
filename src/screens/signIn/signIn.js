import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import AlertContent from '../../components/alert/alert';
import LoadingState from '../../components/loadingState/loadingState';
import { actions } from '../../reducers/auth';


const styles = theme => ({
  content: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  account: {
    marginTop: theme.spacing.unit * 2,
  },
  link: {
    marginLeft: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

class SignIn extends Component {

  constructor(props) {
    super(props);

    this.state = { email: '', password: '' };

    this.navigationSignUpHandler = this.navigationSignUpHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.inputChangedHandler = this.inputChangedHandler.bind(this);
  }

  navigationSignUpHandler() {
    const { history } = this.props;
    history.push('/signup');
  }

  inputChangedHandler(event) {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  }

  submitHandler(event) {
    event.preventDefault();
    const { email, password } = this.state;
    const { login } = this.props;

    login(email, password);
  }

  closeAlertHandler() {
    const { closeAlert } = this.props;
    closeAlert();
  }

  render() {
    const {
      classes, isLoading, error, hasError, shouldRedirect,
    } = this.props;
    return (
      <div>
        {shouldRedirect && <Redirect to="/" />}
        {!shouldRedirect && isLoading && <LoadingState />}
        {!shouldRedirect && !isLoading && error && (
          <AlertContent
            onClose={this.closeAlertHandler}
            open={hasError}
            variant="error"
            message={error.message}
          />)}
        {!shouldRedirect && !isLoading && (
          <main className={classes.content}>
            <Paper className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <form className={classes.form} onSubmit={this.submitHandler}>
                <FormControl margin="normal" required fullWidth>
                  <InputLabel htmlFor="email">Email Address</InputLabel>
                  <Input id="email" name="email" autoComplete="email" autoFocus onChange={this.inputChangedHandler} />
                </FormControl>
                <FormControl margin="normal" required fullWidth>
                  <InputLabel htmlFor="password">Password</InputLabel>
                  <Input name="password" type="password" id="password" autoComplete="current-password" onChange={this.inputChangedHandler} />
                </FormControl>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Sign in
                </Button>
              </form>
              <span className={classes.account}>
                New here?
                <Button className={classes.link} size="small" onClick={this.navigationSignUpHandler}>
                  Create an account
                </Button>
              </span>
            </Paper>
          </main>
        )}
      </div>
    );
  }
}

SignIn.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  login: PropTypes.func.isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
  closeAlert: PropTypes.func.isRequired,
  error: PropTypes.instanceOf(Object),
  isLoading: PropTypes.bool.isRequired,
  shouldRedirect: PropTypes.bool.isRequired,
  hasError: PropTypes.bool.isRequired,
};

SignIn.defaultProps = {
  error: null,
};

const mapStateToProps = state => ({
  isLoading: state.auth.isLoading,
  error: state.auth.error,
  hasError: !!state.auth.error,
  shouldRedirect: state.auth.shouldRedirect,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SignIn));
