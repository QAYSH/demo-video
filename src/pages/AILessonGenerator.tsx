import React from 'react';
import { 
  ArrowLeft, 
  Sparkles, 
  MessagesSquare, 
  FileText, 
  HelpCircle,
  CheckCircle2,
  Lightbulb,
  History,
  TrendingDown
} from 'lucide-react';

const AILessonGenerator: React.FC = () => {
  return (
    <div className="lesson-generator-page">
      <button className="back-btn"><ArrowLeft size={18} /> Back to Course</button>

      <div className="generator-header">
        <div className="creation-badge">
          <Sparkles size={16} />
          <span>AI-POWERED CREATION</span>
        </div>
        <h1>AI Lesson Generator</h1>
        <p>Transform your syllabus into interactive, high-quality learning materials in seconds using our academic-trained LLMs.</p>
      </div>

      <div className="generator-steps">
        <div className="step-item">
          <div className="step-number">1</div>
          <div className="step-content">
            <h2>Topic Selection</h2>
            <div className="topic-input-container card">
              <label>What topic should this lesson cover?</label>
              <textarea placeholder="e.g. The impact of the Renaissance on modern European architecture, focusing on Brunelleschi's dome..."></textarea>
            </div>
          </div>
        </div>

        <div className="step-item">
          <div className="step-number">2</div>
          <div className="step-content">
            <h2>Lesson Format</h2>
            <div className="format-grid">
              <div className="format-card active card">
                <div className="format-header">
                  <MessagesSquare size={24} />
                  <CheckCircle2 size={18} className="check-icon" />
                </div>
                <h3>Interactive Classroom</h3>
                <p>Real-time discussion prompts and workshop exercises.</p>
                <div className="cost-tag">_RK ~15 Tokens</div>
              </div>

              <div className="format-card card">
                <div className="format-header">
                  <FileText size={24} />
                </div>
                <h3>Article</h3>
                <p>Long-form academic reading with citations and glossary.</p>
                <div className="cost-tag">_RK ~10 Tokens</div>
              </div>

              <div className="format-card card">
                <div className="format-header">
                  <HelpCircle size={24} />
                </div>
                <h3>Quiz</h3>
                <p>10-question assessment with logic-based feedback.</p>
                <div className="cost-tag">_RK ~8 Tokens</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="consumption-card card">
        <div className="consumption-info">
          <div className="consumption-icon-box">
            <TrendingDown size={24} />
          </div>
          <div className="consumption-text">
            <h4>Estimated Consumption</h4>
            <p>Your current balance: 1,240 tokens</p>
          </div>
        </div>
        <div className="consumption-stats">
          <div className="stat">
            <span className="val">-15</span>
            <span className="lab">TOKENS</span>
          </div>
          <div className="stat highlighted">
            <span className="val">1,225</span>
            <span className="lab">PROJECTED</span>
          </div>
        </div>
      </div>

      <div className="generator-footer">
        <button className="generate-btn">
          <Sparkles size={20} />
          <span>Generate Lesson Material</span>
        </button>
        <p className="generation-time">Estimated generation time: 12 seconds</p>
      </div>

      <div className="tips-grid">
        <div className="tip-card card">
          <div className="tip-icon yellow">
            <Lightbulb size={20} />
          </div>
          <div className="tip-content">
            <h4>Pro Tip</h4>
            <p>Include target learning outcomes in the topic description for more accurate quiz generation.</p>
          </div>
        </div>

        <div className="tip-card card">
          <div className="tip-icon blue">
            <History size={20} />
          </div>
          <div className="tip-content">
            <h4>Recent Activity</h4>
            <p>You generated "Intro to Quantum Mechanics" quiz 2 hours ago.</p>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .lesson-generator-page {
          max-width: 900px;
          margin: 0 auto;
        }

        .back-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--primary);
          font-weight: 700;
          font-size: 14px;
          margin-bottom: 40px;
        }

        .creation-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #9a3412;
          font-size: 11px;
          font-weight: 800;
          margin-bottom: 12px;
        }

        .generator-header h1 { font-size: 32px; margin-bottom: 12px; }
        .generator-header p { color: var(--text-muted); line-height: 1.6; max-width: 600px; margin-bottom: 48px; }

        .generator-steps {
          display: flex;
          flex-direction: column;
          gap: 48px;
          margin-bottom: 48px;
        }

        .step-item {
          display: flex;
          gap: 24px;
        }

        .step-number {
          width: 32px;
          height: 32px;
          background: var(--primary);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          flex-shrink: 0;
        }

        .step-content h2 { font-size: 20px; margin-bottom: 20px; }

        .topic-input-container { padding: 32px; }
        .topic-input-container label { font-size: 11px; font-weight: 700; color: var(--text-muted); display: block; margin-bottom: 16px; }
        .topic-input-container textarea {
          width: 100%;
          height: 120px;
          border: none;
          outline: none;
          font-size: 24px;
          font-weight: 700;
          color: var(--text-main);
          resize: none;
        }

        .topic-input-container textarea::placeholder { color: #e2e8f0; }

        .format-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .format-card {
          padding: 24px;
          cursor: pointer;
        }

        .format-card.active { border-color: var(--primary); background: #f0f7ff; }

        .format-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
          color: var(--primary);
        }

        .format-card h3 { font-size: 15px; margin-bottom: 8px; }
        .format-card p { font-size: 13px; color: var(--text-muted); line-height: 1.5; margin-bottom: 24px; }
        .cost-tag { font-size: 10px; font-weight: 800; color: var(--primary); opacity: 0.8; }

        .consumption-card {
          background: #eff6ff;
          border: 1px solid #bfdbfe;
          padding: 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 40px;
        }

        .consumption-info { display: flex; align-items: center; gap: 20px; }
        .consumption-icon-box {
          width: 48px;
          height: 48px;
          background: white;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary);
        }

        .consumption-text h4 { font-size: 15px; margin-bottom: 4px; }
        .consumption-text p { font-size: 13px; color: var(--text-muted); }

        .consumption-stats { display: flex; gap: 32px; padding-right: 20px; }
        .consumption-stats .stat { display: flex; flex-direction: column; align-items: flex-end; }
        .consumption-stats .val { font-size: 24px; font-weight: 800; }
        .consumption-stats .lab { font-size: 9px; font-weight: 700; color: var(--text-muted); }
        .consumption-stats .stat.highlighted .val { color: var(--primary); }

        .generator-footer { text-align: center; margin-bottom: 64px; }
        .generate-btn {
          background: var(--primary);
          color: white;
          padding: 16px 48px;
          border-radius: 9999px;
          font-size: 16px;
          font-weight: 700;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          box-shadow: 0 10px 25px rgba(26, 69, 153, 0.3);
          margin-bottom: 16px;
        }

        .generation-time { font-size: 12px; color: var(--text-muted); font-weight: 500; }

        .tips-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        .tip-card { display: flex; gap: 20px; padding: 24px; }
        .tip-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .tip-icon.yellow { background: #fffbeb; color: #d97706; }
        .tip-icon.blue { background: #eff6ff; color: #2563eb; }

        .tip-content h4 { font-size: 15px; margin-bottom: 8px; }
        .tip-content p { font-size: 13px; color: var(--text-muted); line-height: 1.5; }
      `}} />
    </div>
  );
};

export default AILessonGenerator;
