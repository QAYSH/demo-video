import React from 'react';
import { 
  BrainCircuit, 
  Mic, 
  CheckCircle2, 
  FileText, 
  HelpCircle,
  Zap,
  Play,
  Maximize2,
  Share2,
  Cpu,
  MessagesSquare,
  Activity,
  History,
  Cloud,
  Clock
} from 'lucide-react';

const AIClassroom: React.FC = () => {
  return (
    <div className="ai-classroom-page">
      <div className="ai-layout">
        <div className="ai-sidebar">
          <div className="learning-intent card">
            <h3>LEARNING INTENT</h3>
            <div className="intent-input">
              <textarea placeholder="Ask me anything about Software Engineering"></textarea>
              <Mic size={18} className="mic-icon" />
            </div>

            <div className="session-format">
              <h3>SESSION FORMAT</h3>
              <div className="format-options">
                <button className="format-option active">
                  <MessagesSquare size={18} />
                  <span>Interactive Classroom</span>
                  <CheckCircle2 size={16} className="check-icon" />
                </button>
                <button className="format-option">
                  <FileText size={18} />
                  <span>Article</span>
                </button>
                <button className="format-option">
                  <HelpCircle size={18} />
                  <span>Quiz</span>
                </button>
              </div>
            </div>

            <div className="token-cost">
              <span>Estimated Cost</span>
              <strong>~15 tokens</strong>
            </div>
            <div className="token-bar-container">
              <div className="token-bar-fill" style={{ width: '40%' }}></div>
            </div>
            <p className="token-remaining">Remaining: 1,240 tokens</p>

            <button className="generate-session-btn btn-primary">
              <Zap size={18} />
              <span>Generate Learning Session</span>
            </button>
          </div>

          <div className="recent-sessions card">
            <div className="section-header">
              <h3>RECENT SESSIONS</h3>
              <button className="view-all">View All</button>
            </div>
            <div className="sessions-list">
              <div className="session-item">
                <div className="session-icon blue">
                  <Cpu size={16} />
                </div>
                <div className="session-info">
                  <h4>Explaining SDLC</h4>
                  <span>2 days ago • Interactive</span>
                </div>
              </div>
              <div className="session-item">
                <div className="session-icon orange">
                  <FileText size={16} />
                </div>
                <div className="session-info">
                  <h4>Git Basics Quiz</h4>
                  <span>4 days ago • Quiz</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="ai-main">
          <div className="ai-breadcrumbs">
            <span>Courses</span> &gt; <span>CS101</span> &gt; <span>AI Classroom</span>
          </div>
          
          <div className="ai-header">
            <h1>AI Learning Laboratory</h1>
            <p>Powered by OpenMAIC Neural Tutor v4.2</p>
          </div>

          <div className="interactive-container card">
            <div className="interactive-header">
              <div className="status-badge">
                <span className="dot"></span> LIVE SESSION
              </div>
              <span className="current-topic">Software Engineering Principles</span>
              <div className="header-actions">
                <Maximize2 size={18} />
                <Share2 size={18} />
              </div>
            </div>

            <div className="interactive-content">
              <div className="ai-orb-container">
                <div className="ai-orb">
                  <BrainCircuit size={48} color="var(--primary)" />
                </div>
              </div>
              <h2>Interactive Learning Environment</h2>
              <p>Your AI tutor is ready to start a visual, interactive session on Software Engineering fundamentals. Click the button below to initialize the simulation.</p>
              
              <button className="launch-session-btn">
                <Play size={18} fill="white" />
                <span>Launch OpenMAIC Session</span>
              </button>
              
              <span className="estimated-time">ESTIMATED DURATION: 15-20 MINUTES</span>

              <div className="feature-grid">
                <div className="feature-item">
                  <Zap size={16} />
                  <span>Real-time Visualization</span>
                </div>
                <div className="feature-item">
                  <MessagesSquare size={16} />
                  <span>Active Socratic Dialogue</span>
                </div>
                <div className="feature-item">
                  <Activity size={16} />
                  <span>Adaptive Difficulty</span>
                </div>
              </div>
            </div>

            <div className="interactive-footer">
              <div className="footer-left">
                <Clock size={14} />
                <span>00:00</span>
                <span className="separator">|</span>
                <History size={14} />
                <span>Branch: Fundamental Concepts</span>
              </div>
              <div className="footer-right">
                <span>Auto-saving to progress tracker...</span>
                <Cloud size={14} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .ai-classroom-page {
          max-width: 1200px;
          margin: 0 auto;
        }

        .ai-layout {
          display: grid;
          grid-template-columns: 320px 1fr;
          gap: 32px;
        }

        .ai-sidebar {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .ai-sidebar h3 {
          font-size: 11px;
          font-weight: 700;
          color: var(--text-muted);
          letter-spacing: 0.5px;
          margin-bottom: 16px;
        }

        .intent-input {
          position: relative;
          margin-bottom: 24px;
        }

        .intent-input textarea {
          width: 100%;
          height: 100px;
          padding: 16px;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border);
          background: #f8fafc;
          resize: none;
          font-size: 14px;
          outline: none;
        }

        .mic-icon {
          position: absolute;
          bottom: 12px;
          right: 12px;
          color: var(--text-muted);
        }

        .format-options {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 24px;
        }

        .format-option {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          font-weight: 600;
          font-size: 13px;
          color: var(--text-main);
          position: relative;
        }

        .format-option.active {
          border-color: var(--primary);
          background: var(--primary-light);
          color: var(--primary);
        }

        .check-icon {
          position: absolute;
          right: 16px;
        }

        .token-cost {
          display: flex;
          justify-content: space-between;
          font-size: 13px;
          margin-bottom: 8px;
        }

        .token-bar-container {
          height: 6px;
          background: #e2e8f0;
          border-radius: 3px;
          margin-bottom: 8px;
        }

        .token-bar-fill {
          height: 100%;
          background: var(--primary);
          border-radius: 3px;
        }

        .token-remaining {
          font-size: 11px;
          color: var(--text-muted);
          margin-bottom: 24px;
        }

        .generate-session-btn {
          width: 100%;
          justify-content: center;
          padding: 14px;
        }

        .sessions-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .session-item {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .session-icon {
          width: 32px;
          height: 32px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .session-icon.blue { background: #dbeafe; color: #1e40af; }
        .session-icon.orange { background: #ffedd5; color: #9a3412; }

        .session-info h4 { font-size: 13px; font-weight: 600; }
        .session-info span { font-size: 11px; color: var(--text-muted); }

        .ai-breadcrumbs {
          font-size: 13px;
          color: var(--text-muted);
          margin-bottom: 8px;
        }

        .ai-breadcrumbs span { cursor: pointer; }
        .ai-breadcrumbs span:hover { color: var(--primary); }

        .ai-header h1 { font-size: 32px; font-weight: 700; }
        .ai-header p { color: var(--text-muted); margin-bottom: 32px; }

        .interactive-container {
          padding: 0;
          background: #0f172a;
          color: white;
          overflow: hidden;
          height: 600px;
          display: flex;
          flex-direction: column;
        }

        .interactive-header {
          padding: 16px 24px;
          background: rgba(255, 255, 255, 0.05);
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 13px;
        }

        .status-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(37, 99, 235, 0.2);
          border: 1px solid var(--primary);
          padding: 4px 12px;
          border-radius: 9999px;
          color: #3b82f6;
          font-weight: 700;
        }

        .status-badge .dot {
          width: 6px;
          height: 6px;
          background: #3b82f6;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.5); opacity: 0.5; }
          100% { transform: scale(1); opacity: 1; }
        }

        .header-actions { display: flex; gap: 20px; color: rgba(255, 255, 255, 0.6); }

        .interactive-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 40px;
          text-align: center;
          background: radial-gradient(circle at center, #1e293b 0%, #0f172a 100%);
        }

        .ai-orb-container {
          width: 100px;
          height: 100px;
          background: rgba(37, 99, 235, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 32px;
          position: relative;
        }

        .ai-orb-container::after {
          content: '';
          position: absolute;
          width: 140px;
          height: 140px;
          border: 1px solid rgba(37, 99, 235, 0.2);
          border-radius: 50%;
          animation: spin 10s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .ai-orb {
          width: 80px;
          height: 80px;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 40px rgba(37, 99, 235, 0.5);
        }

        .interactive-content h2 { font-size: 28px; margin-bottom: 16px; }
        .interactive-content p { max-width: 500px; opacity: 0.7; line-height: 1.6; margin-bottom: 40px; }

        .launch-session-btn {
          background: #4f46e5;
          color: white;
          padding: 16px 32px;
          border-radius: var(--radius-md);
          font-weight: 700;
          font-size: 16px;
          display: flex;
          align-items: center;
          gap: 12px;
          box-shadow: 0 8px 24px rgba(79, 70, 229, 0.4);
          margin-bottom: 16px;
        }

        .estimated-time { font-size: 10px; font-weight: 700; opacity: 0.5; letter-spacing: 1px; }

        .feature-grid {
          display: flex;
          gap: 32px;
          margin-top: 60px;
        }

        .feature-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          font-weight: 600;
          color: #3b82f6;
        }

        .interactive-footer {
          padding: 16px 24px;
          background: rgba(255, 255, 255, 0.05);
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 12px;
          color: rgba(255, 255, 255, 0.5);
        }

        .footer-left { display: flex; align-items: center; gap: 12px; }
        .footer-right { display: flex; align-items: center; gap: 8px; }
      `}} />
    </div>
  );
};

export default AIClassroom;
