import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import EmptyState from '../../components/empty-state/empty-state';
import Layout from '../../hoc/Layout';

const styles = () => ({
  container: {

  },
});


class Resumes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;

    return (
      <Layout>
        <div className={classes.container}>
          <EmptyState
            title="No resumes found"
            message="It seems you don't have any resume registered. Click in the button below to add a new one."
            buttonName="New resume"
          />
        </div>
      </Layout>
    );
  }
}

Resumes.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
};

export default withStyles(styles)(Resumes);
