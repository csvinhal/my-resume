import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import EmptyState from "../../components/emptyState/emptyState";
import Resumes from "../../components/resumes/resumes";
import Layout from "../../hoc/Layout";
import { actions } from "../../reducers/resume";

class MyResumes extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleRemoveResume = this.handleRemoveResume.bind(this);
  }

  componentDidMount() {
    const { token, onFetchAllResumesStart } = this.props;
    onFetchAllResumesStart(token);
  }

  handleRemoveResume(id) {
    const { token, onDeleteResume } = this.props;
    onDeleteResume(id, token);
  }

  render() {
    const { isLoading, error, resumes } = this.props;
    return (
      <Layout>
        {!isLoading && !error && !!resumes.length && (
          <Resumes resumes={resumes} remove={this.handleRemoveResume} />
        )}
        {!isLoading && !error && !resumes.length && (
          <EmptyState
            title="No resumes found"
            message="It seems you don't have any resume registered. Click in the button below to add a new one."
            buttonName="New resume"
            svgPath="M18.99 5c0-1.1-.89-2-1.99-2h-7L7.66 5.34 19 16.68 18.99 5zM3.65 3.88L2.38 5.15 5 7.77V19c0 1.1.9 2 2 2h10.01c.35 0 .67-.1.96-.26l1.88 1.88 1.27-1.27L3.65 3.88z"
          />
        )}
      </Layout>
    );
  }
}

MyResumes.propTypes = {
  onFetchAllResumesStart: PropTypes.func.isRequired,
  error: PropTypes.instanceOf(Object),
  isLoading: PropTypes.bool.isRequired,
  token: PropTypes.string.isRequired,
  resumes: PropTypes.instanceOf(Array).isRequired,
  onDeleteResume: PropTypes.func.isRequired,
};

MyResumes.defaultProps = {
  error: null,
};

const mapStateToProps = state => ({
  token: state.auth.token,
  isLoading: state.loading.showLoader,
  error: state.resume.error,
  resumes: state.resume.resumes,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(actions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyResumes);
