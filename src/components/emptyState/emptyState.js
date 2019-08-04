import { Button, SvgIcon, Typography, withStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

const styles = theme => ({
    container: {
        width: "auto",
        display: "block", // Fix IE 11 issue.
        padding: theme.spacing(1),
    },
    icon: {
        width: "100%",
        marginTop: theme.spacing(2),
    },
    title: {
        marginTop: theme.spacing(1),
    },
    message: {
        marginTop: theme.spacing(1),
        textAlign: "center",
    },
    buttonLane: {
        width: "100%",
        textAlign: "center",
    },
    button: {
        margin: theme.spacing(1),
        marginBottom: theme.spacing(2),
    },
});

const EmptyState = props => {
    const { classes, title, message, buttonName, buttonClick, svgPath } = props;

    return (
        <div className={classes.container}>
            <SvgIcon className={classes.icon} color="action" style={{ fontSize: 100 }}>
                <path d={svgPath} />
            </SvgIcon>
            <Typography
                className={classes.title}
                align="center"
                component="h1"
                variant="h6"
                color="inherit"
                gutterBottom
            >
                {title}
            </Typography>

            <Typography className={classes.message} align="justify" variant="body1" gutterBottom>
                {message}
            </Typography>

            <div className={classes.buttonLane}>
                <Button variant="contained" color="primary" className={classes.button} onClick={buttonClick}>
                    {buttonName}
                </Button>
            </div>
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
