import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AlertContent from '../../components/alert/alert';
import EmptyState from '../../components/empty-state/empty-state';
import LoadingState from '../../components/loadingState/loadingState';
import Layout from '../../hoc/Layout';
import { actions } from '../../reducers/resume';

const styles = () => ({
  container: {

  },
});

class Resumes extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.closeAlertHandler = this.closeAlertHandler.bind(this);
  }

  componentDidMount() {
    const { token, onFetchAllResumesStart } = this.props;
    onFetchAllResumesStart(token);
  }

  closeAlertHandler() {
    const { closeAlert } = this.props;
    closeAlert();
  }

  render() {
    const {
      classes,
      isLoading,
      error,
      showAlert,
    } = this.props;

    return (
      <Layout>
        {isLoading && <LoadingState />}
        {!isLoading && showAlert && (
          <AlertContent
            onClose={this.closeAlertHandler}
            open={showAlert}
            variant="error"
            message={error.error}
          />
        )}
        {!isLoading && !error && (
          <div className={classes.container}>
            <EmptyState
              title="No resumes found"
              message="It seems you don't have any resume registered. Click in the button below to add a new one."
              buttonName="New resume"
              svgPath="M18.99 5c0-1.1-.89-2-1.99-2h-7L7.66 5.34 19 16.68 18.99 5zM3.65 3.88L2.38 5.15 5 7.77V19c0 1.1.9 2 2 2h10.01c.35 0 .67-.1.96-.26l1.88 1.88 1.27-1.27L3.65 3.88z"
            />
          </div>
        )}
      </Layout>
    );
  }
}

Resumes.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  onFetchAllResumesStart: PropTypes.func.isRequired,
  closeAlert: PropTypes.func.isRequired,
  error: PropTypes.instanceOf(Object),
  showAlert: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  token: PropTypes.string.isRequired,
};

Resumes.defaultProps = {
  error: null,
};

const mapStateToProps = state => ({
  isLoading: state.resume.isLoading,
  error: state.resume.error,
  showAlert: state.resume.showAlert,
  token: state.auth.token,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Resumes));
