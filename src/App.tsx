import React from 'react';
import { AppProvider, useApp, AppView } from './context/AppContext';
import { TopBar } from './components/layout/TopBar';
import { TopNavigation } from './components/layout/TopNavigation';
import { GlobalStatusStrip } from './components/layout/GlobalStatusStrip';
import { P6PayloadDrawer } from './components/drawers/P6PayloadDrawer';
import { EvidenceTraceDrawer } from './components/drawers/EvidenceTraceDrawer';
import { DemoOverlay } from './components/layout/DemoOverlay';
import { DataIngestionView } from './views/DataIngestionView';
import { ExtractionWorkspaceView } from './views/ExtractionWorkspaceView';

const ViewPlaceholder: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '400px',
    padding: '3rem',
    background: 'var(--bg-surface, #1e293b)',
    borderRadius: '12px',
    border: '1px dashed var(--border-color, #334155)',
    textAlign: 'center',
    maxWidth: '700px',
    margin: '40px auto'
  }}>
    <div style={{
      width: '56px',
      height: '56px',
      borderRadius: '12px',
      background: 'rgba(59, 130, 246, 0.1)',
      color: '#3b82f6',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '1rem',
      fontWeight: 'bold',
      fontSize: '1.25rem'
    }}>
      FP
    </div>
    <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: '0 0 0.5rem 0', color: 'var(--text-primary)' }}>
      {title}
    </h2>
    <p style={{ color: 'var(--text-muted, #94a3b8)', fontSize: '0.95rem', maxWidth: '500px', lineHeight: 1.6 }}>
      {subtitle}
    </p>
    <div style={{ marginTop: '1.5rem', fontSize: '0.85rem', color: '#60a5fa', background: 'rgba(59, 130, 246, 0.1)', padding: '6px 14px', borderRadius: '9999px', border: '1px solid rgba(59, 130, 246, 0.2)' }}>
      Feature Module Scheduled for Sequential Merge
    </div>
  </div>
);

const AppContent: React.FC = () => {
  const { 
    activeView, 
    inspectingP6Activity, 
    setInspectingP6Activity,
    tracingEvidenceActivity,
    setTracingEvidenceActivity
  } = useApp();

  const [isMobileSimulated, setIsMobileSimulated] = React.useState(false);

  const renderActiveView = () => {
    switch (activeView) {
      case 'dashboard':
        return <ViewPlaceholder title="Executive Dashboard" subtitle="High-level project KPIs, progress vs baseline, and risk indicators." />;
      case 'capture':
        return <DataIngestionView />;
      case 'agent':
        return <ViewPlaceholder title="AI Time Agent" subtitle="Conversational schedule intelligence, query resolution, and timeline simulations." />;
      case 'extract':
        return <ExtractionWorkspaceView />;
      case 'link':
        return <ViewPlaceholder title="Schedule Linker" subtitle="Primavera P6 activity matching and schedule alignment." />;
      case 'review':
        return <ViewPlaceholder title="Planner Review Queue" subtitle="Verification gate for quantity sign-offs and variance reviews." />;
      case 'schedule':
        return <ViewPlaceholder title="Live Schedule Gantt" subtitle="Visual Gantt chart comparison of baseline vs actual schedule." />;
      case 'audit':
        return <ViewPlaceholder title="Audit Trail" subtitle="Immutable cryptographic log of all progress modifications and approvals." />;
      case 'analytics':
        return <ViewPlaceholder title="Predictive Analytics" subtitle="Trend forecasting, delay patterns, and critical path risk analysis." />;
      case 'memory':
        return <ViewPlaceholder title="Institutional Project Memory" subtitle="Historical dispute and delay records across infrastructure projects." />;
      default:
        return <ViewPlaceholder title="FieldPulse System" subtitle="Select a workflow step from the top navigation rail." />;
    }
  };

  const appShell = (
    <div className={`app-container ${isMobileSimulated ? 'mobile-simulated' : ''}`} style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      width: '100%',
      background: 'var(--bg-base)',
      color: 'var(--text-primary)',
      overflow: 'hidden'
    }}>
      <TopBar 
        isMobileSimulated={isMobileSimulated} 
        onToggleMobile={() => setIsMobileSimulated(!isMobileSimulated)} 
      />
      <TopNavigation />
      {activeView === 'dashboard' && <GlobalStatusStrip />}

      <main style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'auto',
        overflowX: 'hidden',
        padding: '24px',
        position: 'relative'
      }}>
        {renderActiveView()}
      </main>

      {/* Global Application Drawers */}
      <P6PayloadDrawer 
        activity={inspectingP6Activity}
        onClose={() => setInspectingP6Activity(null)}
      />

      <EvidenceTraceDrawer
        activity={tracingEvidenceActivity}
        onClose={() => setTracingEvidenceActivity(null)}
      />

      {/* Global Presenter Mode Overlay */}
      <DemoOverlay />
    </div>
  );

  if (isMobileSimulated) {
    return (
      <div className="mobile-simulated-wrapper">
        <button className="mobile-close-btn" onClick={() => setIsMobileSimulated(false)}>
          Exit Mobile View
        </button>
        {appShell}
      </div>
    );
  }

  return appShell;
};

const App: React.FC = () => {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
};

export default App;
