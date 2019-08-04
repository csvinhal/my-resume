import { Avatar, IconButton, ListItem, ListItemSecondaryAction, ListItemText, withStyles } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import Description from "@material-ui/icons/Description";
import PropTypes from "prop-types";
import React from "react";

const styles = theme => ({
    container: {
        marginTop: theme.spacing(),
        width: "80%",
    },
    icon: {
        fontSize: 50,
    },
});

const ResumesList = props => {
    const { resume, remove } = props;

    return (
        <ListItem>
            <Avatar>
                <Description />
            </Avatar>
            <ListItemText primary={resume.name} secondary="Jan 9, 2014" />
            <ListItemSecondaryAction>
                <IconButton aria-label="Delete" onClick={() => remove(resume.id)}>
                    <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    );
};

ResumesList.propTypes = {
    resume: PropTypes.instanceOf(Object).isRequired,
    remove: PropTypes.func.isRequired,
};

export default withStyles(styles)(ResumesList);
