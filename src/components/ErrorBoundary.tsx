// components/ErrorBoundary.js
import React, { Component } from "react";
import { View, Text, Button } from "react-native";

class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  componentDidCatch(error: any, info: any) {
    console.error(error, info);
  }

  handleRetry = () => {
    this.setState({ hasError: false });
    this.props.onRetry();
  };

  render() {
    if (this.state.hasError) {
      return (
        <View>
          <Text>Something went wrong</Text>
          <Button title="Retry" onPress={this.handleRetry} />
        </View>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
