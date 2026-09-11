import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '3rem 1.5rem', textAlign: 'center', fontFamily: 'sans-serif', backgroundColor: '#FBF8F3', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <h2 style={{ color: '#2C1F17', fontSize: '1.8rem', marginBottom: '1rem' }}>حدث خطأ في تحميل الصفحة</h2>
          <p style={{ color: '#5A4A3E', maxWidth: '500px', lineHeight: 1.6, marginBottom: '1.5rem' }}>
            {this.state.error?.toString() || 'تعذر تحميل المكون الرئيسي'}
          </p>
          <button
            onClick={() => window.location.reload()}
            style={{
              padding: '0.8rem 1.8rem',
              backgroundColor: '#2C1F17',
              color: '#FBF8F3',
              borderRadius: '999px',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 600
            }}
          >
            إعادة تحميل الصفحة
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
