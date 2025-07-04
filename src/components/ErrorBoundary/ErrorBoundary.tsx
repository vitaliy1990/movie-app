import { Component, type ReactNode, type ErrorInfo } from "react";

type Props = {
  children: ReactNode;
};

type State = {
  hasError: boolean;
  error?: Error;
};

class ErrorBoundary extends Component<Props, State> {
  state: State = {
    hasError: false,
    error: undefined,
  };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-5 bg-black/65  h-dvh flex flex-col justify-center items-center gap-8">
          <h2 className="text-3xl font-extrabold text-red-600">
            Something went wrong. Please try again later.
          </h2>
          <details className="text-red-300 whitespace-pre-wrap">
            {this.state.error?.message}
          </details>
          <button
            className="cursor-pointer bg-blue-400 rounded-xl text-black py-1 px-4"
            onClick={() => this.setState({ hasError: false, error: undefined })}
          >
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
