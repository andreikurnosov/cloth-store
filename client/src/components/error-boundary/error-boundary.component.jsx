import React from 'react';

import { ErrorImageContainer, ErrorImageText, ErrorImageOverlay } from './error-boundary.styles';

class ErrorBoundary extends React.Component {
  constructor() {
    super();
    this.state = {
      hasErrored: false
    }
  }

  static getDerivedStateFromError(error) {
    return {
      hasErrored: true
    }
  }

  componentDidCatch(error, info) {
    console.log(error)
  }

  render() {
    if(this.state.hasErrored) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl='https://i.imgur.com/lKJiT77.png'/>
          <ErrorImageText> Sorry dog ate this page...</ErrorImageText>
        </ErrorImageOverlay>
      )
    }
    return this.props.children;
  }
}

export default ErrorBoundary;