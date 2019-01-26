import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import withStyles from '@material-ui/core/styles/withStyles';
import DeleteIcon from '@material-ui/icons/Delete';
import Description from '@material-ui/icons/Description';
import PropTypes from 'prop-types';
import React from 'react';

const styles = theme => ({
  container: {
    marginTop: theme.spacing.unit,
    width: '80%',
  },
  icon: {
    fontSize: 50,
  },
});

const ResumesList = (props) => {
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
