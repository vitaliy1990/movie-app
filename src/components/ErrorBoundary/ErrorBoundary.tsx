import { Component, type ReactNode, type ErrorInfo } from 'react';

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
    console.error('Uncaught error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className='flex h-dvh flex-col items-center justify-center gap-8 bg-black/65 p-5'>
          <h2 className='text-3xl font-extrabold text-red-600'>
            Something went wrong. Please try again later.
          </h2>
          <details className='whitespace-pre-wrap text-red-300'>
            {this.state.error?.message}
          </details>
          <button
            className='cursor-pointer rounded-xl bg-blue-400 px-4 py-1 text-black'
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
