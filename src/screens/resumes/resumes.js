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
            svgPath="M18.99 5c0-1.1-.89-2-1.99-2h-7L7.66 5.34 19 16.68 18.99 5zM3.65 3.88L2.38 5.15 5 7.77V19c0 1.1.9 2 2 2h10.01c.35 0 .67-.1.96-.26l1.88 1.88 1.27-1.27L3.65 3.88z"
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
