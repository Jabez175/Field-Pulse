import React from 'react';
import './styles/index.css';

export function App() {
  return (
    <div className="app-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-primary, #0f172a)', color: 'var(--text-primary, #f8fafc)', fontFamily: 'Inter, sans-serif', padding: '2rem', textAlign: 'center' }}>
      <div style={{ maxWidth: '640px', padding: '2.5rem', borderRadius: '1rem', background: 'rgba(30, 41, 59, 0.7)', border: '1px solid rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(12px)', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.5)' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.25rem' }}>
            FP
          </div>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 700, margin: 0, letterSpacing: '-0.025em' }}>FieldPulse</h1>
        </div>
        <p style={{ color: '#94a3b8', fontSize: '1rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
          Intelligent Field Progress & Schedule Linking Platform.
        </p>
        <div style={{ display: 'inline-block', padding: '0.5rem 1rem', borderRadius: '9999px', background: 'rgba(59, 130, 246, 0.15)', color: '#60a5fa', fontSize: '0.875rem', fontWeight: 500, border: '1px solid rgba(59, 130, 246, 0.3)' }}>
          Phase 0: Core Scaffolding & Design Foundation Initialized
        </div>
      </div>
    </div>
  );
}

export default App;
