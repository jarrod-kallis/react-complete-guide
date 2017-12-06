import React from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
    errorMessage: ''
  };

  componentDidCatch = (error, info) => {
    this.setState({
      hasError: true,
      errorMessage: `${error} ${info.componentStack}`
    });
  };

  render() {
    if (this.state.hasError) {
      return <h4>Something went wrong! {this.state.errorMessage}</h4>;
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.element.isRequired
};

export default ErrorBoundary;
