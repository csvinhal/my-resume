import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import PersonOutline from '@material-ui/icons/PersonOutline';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AlertContent from '../../../components/alert/alert';
import LoadingState from '../../../components/loadingState/loadingState';
import { actions } from '../../../reducers/auth';

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
        marginLeft: theme.spacing.unit * 3,
    },
    button: {
        marginTop: theme.spacing.unit * 3,
        marginLeft: theme.spacing.unit * 2,
    },
});

class SignUp extends Component {

    state = { email: "", password: "" };

    navigationSignInHandler = () => {
        this.props.history.push('/signin');
    }

    submitHandler = event => {
        event.preventDefault();
        this.props.signup(this.state.email, this.state.password);
    }

    inputChangedHandler = event => {
        const { value, name } = event.target;
        this.setState({
            [name]: value,
        });
    }

    closeAlertHandler = () => {
        this.props.closeAlert();
    }

    render() {
        const { classes, isLoading, error, hasError } = this.props;

        return (
            <div>
                {isLoading && <LoadingState />}
                {!isLoading && error && (<AlertContent
                    onClose={this.closeAlertHandler}
                    open={hasError}
                    variant="error"
                    message={error.message} />)}
                {!isLoading &&
                    <main className={classes.content}>
                        <Paper className={classes.paper}>
                            <Avatar className={classes.avatar}>
                                <PersonOutline />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Sign up
                        </Typography>
                            <form className={classes.form} onSubmit={this.submitHandler}>
                                <FormControl margin="normal" required fullWidth>
                                    <InputLabel htmlFor="email">Email Address</InputLabel>
                                    <Input id="email" name="email" autoComplete="email" onChange={this.inputChangedHandler} />
                                </FormControl>
                                <FormControl margin="normal" required fullWidth>
                                    <InputLabel htmlFor="password">Password</InputLabel>
                                    <Input name="password" type="password" id="password" autoComplete="new-password" onChange={this.inputChangedHandler} />
                                </FormControl>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                >
                                    Register
                            </Button>
                                <Button
                                    type="button"
                                    variant="contained"
                                    className={classes.button}
                                    onClick={this.navigationSignInHandler}
                                >
                                    Back to SignIn
                            </Button>
                            </form>
                        </Paper>
                    </main>
                }
            </div>
        );
    }
}

SignUp.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
    return {
        isLoading: state.auth.isLoading,
        error: state.auth.error,
        hasError: !!state.auth.error,
    };
};

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SignUp));