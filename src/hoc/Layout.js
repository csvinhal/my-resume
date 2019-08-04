import { AppBar, Container, IconButton, Menu, MenuItem, Toolbar, Typography, withStyles } from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { actions } from "../reducers/auth";

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    link: {
        color: "inherit",
        margin: theme.spacing(1),
        textDecoration: "none",
        "&:hover": {
            textDecoration: "underline",
        },
    },
    container: {
        marginTop: theme.spacing(1),
    },
});

class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
        };

        this.handleMenu = this.handleMenu.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleSignOut = this.handleSignOut.bind(this);
    }

    handleMenu(event) {
        this.setState({ anchorEl: event.currentTarget });
    }

    handleClose() {
        this.setState({ anchorEl: null });
    }

    handleSignOut() {
        const { signOut } = this.props;

        signOut();
    }

    render() {
        const { classes, children } = this.props;
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);

        return (
            <div>
                <header className={classes.root}>
                    <AppBar position="static">
                        <Toolbar>
                            <Typography variant="h6" color="inherit" className={classes.grow}>
                                <Link to="/resumes" className={classes.link}>
                                    My Resumes
                                </Link>
                            </Typography>

                            <div>
                                <IconButton
                                    aria-owns={open ? "menu-appbar" : undefined}
                                    aria-haspopup="true"
                                    onClick={this.handleMenu}
                                    color="inherit"
                                >
                                    <AccountCircle />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: "top",
                                        horizontal: "right",
                                    }}
                                    transformOrigin={{
                                        vertical: "top",
                                        horizontal: "right",
                                    }}
                                    open={open}
                                    onClose={this.handleClose}
                                >
                                    <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                                    <MenuItem onClick={this.handleSignOut}>Sign out</MenuItem>
                                </Menu>
                            </div>
                        </Toolbar>
                    </AppBar>
                </header>
                <main className={classes.container}>
                    <Container>{children}</Container>
                </main>
            </div>
        );
    }
}

Layout.propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
    children: PropTypes.instanceOf(Object).isRequired,
    signOut: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(actions, dispatch),
});

export default connect(
    null,
    mapDispatchToProps
)(withStyles(styles)(Layout));
