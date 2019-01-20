import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions } from '../reducers/auth';

export default function (WrappedComponent) {
  class Authenticate extends React.Component {
    componentDidMount() {
      this.checkAndRedirect();
    }

    componentDidUpdate() {
      this.checkAndRedirect();
    }

    checkAndRedirect() {
      const {
        isAuthenticated,
        history,
        expirationDate,
        checkAuthTokenValidate,
        checkLocalStorageTokenValidate,
        shouldRedirect,
      } = this.props;

      if (isAuthenticated) {
        checkAuthTokenValidate(expirationDate);
      } else if (!isAuthenticated) {
        if (shouldRedirect) {
          history.push('/signin');
        } else {
          checkLocalStorageTokenValidate();
        }
      }
    }

    render() {
      const { isAuthenticated } = this.props;
      return (
        <div>
          {isAuthenticated ? <WrappedComponent {...this.props} /> : null}
        </div>
      );
    }
  }

  Authenticate.defaultProps = {
    expirationDate: null,
  };

  Authenticate.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    expirationDate: PropTypes.instanceOf(Object),
    history: PropTypes.instanceOf(Object).isRequired,
    checkAuthTokenValidate: PropTypes.func.isRequired,
    shouldRedirect: PropTypes.bool.isRequired,
  };

  const mapStateToProps = state => ({
    isAuthenticated: !!state.auth.token,
    shouldRedirect: state.auth.shouldRedirect,
    expirationDate: state.auth.expirationDate,
    checkLocalStorageTokenValidate: PropTypes.func.isRequired,
  });

  const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(actions, dispatch),
  });

  return connect(mapStateToProps, mapDispatchToProps)(Authenticate);
}
