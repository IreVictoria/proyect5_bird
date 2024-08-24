import React from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
 
    console.log(`Se ha detectado un error: ${error}`, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>¡Ups! Algo salió mal.</h1>;
    }

    return this.props.children; 
  }
}

ErrorBoundary.propTypes = {
  children:PropTypes.node
};

export default ErrorBoundary;
