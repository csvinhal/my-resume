import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React from 'react';
import ResumesList from './resumesList/resumesList';

const styles = theme => ({
  container: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(800 + theme.spacing.unit * 3 * 2)]: {
      width: 800,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    width: '100%;',
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    marginTop: theme.spacing.unit,
  },
  list: {
    width: '80%',
    marginLeft: theme.spacing.unit * 3,
  },
});


const Resumes = (props) => {
  const { classes, resumes, remove } = props;

  return (
    <div className={classes.container}>
      <Paper className={classes.paper}>
        <Typography className={classes.title} align="center" component="h1" variant="h3" color="default" gutterBottom>
          My resumes
        </Typography>

        <List className={classes.list}>
          {resumes.map(resume => (
            <ResumesList key={resume.id} resume={resume} remove={remove} />
          ))}
        </List>
      </Paper>
    </div>
  );
};

Resumes.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  resumes: PropTypes.instanceOf(Array).isRequired,
  remove: PropTypes.func.isRequired,
};

export default withStyles(styles)(Resumes);
