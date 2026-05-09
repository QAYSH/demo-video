import React from 'react';
import { 
  ShieldAlert, 
 
  BrainCircuit, 
  Filter, 
  FileDown, 
  Eye, 
  CheckCircle2, 
  XCircle,
  Plus,
  Sparkles,
  FileText,
  Video,
  TrendingUp,
  TrendingDown
} from 'lucide-react';

const ContentModeration: React.FC = () => {
  const pendingItems = [
    { title: 'Advanced Neural Networks', flag: 'FLAGGED: COPYRIGHT VIOLATION', course: 'CS-402: Deep Learning', lecturer: 'Dr. Alan Turing', date: 'Oct 24, 2023', topic: 'COMPUTER SCIENCE', icon: <ShieldAlert size={18} color="#dc2626" /> },
    { title: 'Macroeconomic Policy 101', flag: 'Clean - AI Verified', course: 'EC-101: Economics', lecturer: 'Prof. Janet Yellen', date: 'Oct 25, 2023', topic: 'FINANCE', icon: <FileText size={18} color="#2563eb" />, clean: true },
    { title: 'Cell Division & Mitosis', flag: 'Reviewing high-res assets', course: 'BIO-205: Biology', lecturer: 'Dr. Rosalind Franklin', date: 'Oct 26, 2023', topic: 'LIFE SCIENCES', icon: <Video size={18} color="#2563eb" /> },
  ];

  return (
    <div className="moderation-page">
      <div className="page-header-flex">
        <div className="header-info">
          <span className="breadcrumb">EduAdmin OS / <span className="active">Moderation Queue</span></span>
          <h1>Content Moderation</h1>
          <p>Audit and verify educational materials against institutional standards.</p>
        </div>
        <div className="header-actions">
          <button className="secondary-btn"><Filter size={18} /> Filter</button>
          <button className="secondary-btn"><FileDown size={18} /> Export</button>
        </div>
      </div>

      <div className="stats-row">
        <div className="stat-card card">
          <span className="label">AWAITING ACTION</span>
          <div className="val-row">
            <span className="val">124</span>
            <span className="trend-label green">
              <TrendingUp size={12} /> +12% from yesterday
            </span>
          </div>
        </div>

        <div className="stat-card card">
          <span className="label">AVG. REVIEW TIME</span>
          <div className="val-row">
            <span className="val">14m</span>
            <span className="trend-label green">
              <TrendingDown size={12} /> -4m efficiency gain
            </span>
          </div>
        </div>

        <div className="stat-card card ai-card">
          <div className="ai-header">
            <span className="label">AI INTELLIGENCE</span>
            <h3>Flagging Algorithm v4.2</h3>
          </div>
          <p>Automated sentiment analysis detected 18 high-risk items in the last hour. Manual review recommended.</p>
          <Sparkles size={40} className="ai-pattern-icon" />
        </div>
      </div>

      <div className="table-section card">
        <div className="tabs-header">
          <div className="tab active">Pending <span className="count">124</span></div>
          <div className="tab">Approved</div>
          <div className="tab">Rejected</div>
        </div>

        <table className="moderation-table">
          <thead>
            <tr>
              <th>LESSON TITLE</th>
              <th>COURSE</th>
              <th>LECTURER</th>
              <th>DATE</th>
              <th>TOPIC</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {pendingItems.map((item, i) => (
              <tr key={i}>
                <td>
                  <div className="lesson-info">
                    <div className="lesson-icon-box">{item.icon}</div>
                    <div className="title-stack">
                      <strong>{item.title}</strong>
                      <span className={`flag-status ${item.clean ? 'clean' : 'warning'}`}>{item.flag}</span>
                    </div>
                  </div>
                </td>
                <td>{item.course}</td>
                <td>
                  <div className="lecturer-cell">
                    <div className="avatar-mini"></div>
                    <span>{item.lecturer}</span>
                  </div>
                </td>
                <td>{item.date}</td>
                <td>
                  <span className={`topic-badge ${item.topic.replace(' ', '-').toLowerCase()}`}>{item.topic}</span>
                </td>
                <td>
                  <div className="action-icons">
                    <Eye size={18} className="blue" />
                    <CheckCircle2 size={18} className="green" />
                    <XCircle size={18} className="red" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="table-footer">
          <p>Showing 1 to 10 of 124 entries</p>
          <div className="pagination">
            <button className="page-btn-text">Previous</button>
            <button className="page-btn active">1</button>
            <button className="page-btn">2</button>
            <button className="page-btn">3</button>
            <button className="page-btn-text">Next</button>
          </div>
        </div>
      </div>

      <div className="predictive-insight-card card">
        <div className="insight-content">
          <div className="insight-icon-box">
            <BrainCircuit size={24} color="var(--primary)" />
          </div>
          <div className="insight-text">
            <h4>Moderation Predictive Insight</h4>
            <p>Based on historical data, items from the "Life Sciences" topic are 40% more likely to require manual verification due to complex diagram licensing.</p>
          </div>
        </div>
        <button className="optimize-btn">Optimize Workflow</button>
      </div>

      <div className="floating-plus-btn">
        <Plus size={24} color="white" />
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .moderation-page { max-width: 1300px; margin: 0 auto; position: relative; padding-bottom: 40px; }
        
        .page-header-flex { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 32px; }
        .breadcrumb { font-size: 13px; font-weight: 600; color: var(--text-muted); margin-bottom: 8px; display: block; }
        .breadcrumb .active { color: var(--text-main); }
        .page-header-flex h1 { font-size: 32px; font-weight: 700; margin-bottom: 8px; }
        .page-header-flex p { color: var(--text-muted); }

        .stats-row { display: grid; grid-template-columns: 1fr 1fr 1.5fr; gap: 24px; margin-bottom: 32px; }
        .stats-row .stat-card { padding: 24px; }
        .stats-row .label { font-size: 10px; font-weight: 800; color: var(--text-muted); letter-spacing: 0.5px; margin-bottom: 16px; display: block; }
        .val-row { display: flex; flex-direction: column; gap: 8px; }
        .val-row .val { font-size: 32px; font-weight: 800; }
        .trend-label { font-size: 11px; font-weight: 700; display: flex; align-items: center; gap: 4px; }
        .trend-label.green { color: #166534; }

        .ai-card { background: #1e3a8a; color: white; position: relative; overflow: hidden; }
        .ai-card .label { color: rgba(255,255,255,0.6); }
        .ai-card h3 { font-size: 20px; margin-bottom: 12px; }
        .ai-card p { font-size: 13px; line-height: 1.5; color: rgba(255,255,255,0.8); position: relative; z-index: 1; }
        .ai-pattern-icon { position: absolute; right: -10px; top: -10px; opacity: 0.1; transform: rotate(15deg); }

        .table-section { padding: 0; overflow: hidden; }
        .tabs-header { display: flex; padding: 0 32px; border-bottom: 1px solid var(--border); background: #f8fafc; }
        .tab { padding: 20px 24px; font-size: 13px; font-weight: 700; color: var(--text-muted); cursor: pointer; position: relative; }
        .tab.active { color: var(--primary); }
        .tab.active::after { content: ''; position: absolute; bottom: -1px; left: 0; right: 0; height: 3px; background: var(--primary); }
        .tab .count { font-size: 10px; padding: 2px 6px; background: #eff6ff; color: var(--primary); border-radius: 9999px; margin-left: 8px; }

        .moderation-table { width: 100%; border-collapse: collapse; }
        .moderation-table th { text-align: left; padding: 16px 32px; font-size: 11px; font-weight: 700; color: var(--text-muted); border-bottom: 1px solid var(--border); }
        .moderation-table td { padding: 16px 32px; border-bottom: 1px solid var(--border); font-size: 13px; }

        .lesson-info { display: flex; gap: 16px; align-items: center; }
        .lesson-icon-box { width: 36px; height: 36px; background: #f1f5f9; border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .title-stack strong { font-size: 14px; display: block; margin-bottom: 2px; }
        .flag-status { font-size: 10px; font-weight: 800; text-transform: uppercase; }
        .flag-status.warning { color: #dc2626; }
        .flag-status.clean { color: #166534; }

        .lecturer-cell { display: flex; align-items: center; gap: 10px; }
        .avatar-mini { width: 24px; height: 24px; background: #e2e8f0; border-radius: 50%; }

        .topic-badge { padding: 4px 8px; border-radius: 4px; font-size: 9px; font-weight: 800; }
        .topic-badge.computer-science { background: #dbeafe; color: #1e40af; }
        .topic-badge.finance { background: #ffedd5; color: #9a3412; }
        .topic-badge.life-sciences { background: #dcfce7; color: #166534; }

        .action-icons { display: flex; gap: 16px; }
        .action-icons svg { cursor: pointer; }
        .action-icons .blue { color: #2563eb; }
        .action-icons .green { color: #22c55e; }
        .action-icons .red { color: #ef4444; }

        .table-footer { padding: 20px 32px; display: flex; justify-content: space-between; align-items: center; }
        .table-footer p { font-size: 13px; color: var(--text-muted); }
        .pagination { display: flex; align-items: center; gap: 8px; }
        .page-btn { width: 32px; height: 32px; border-radius: 6px; border: 1px solid var(--border); display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 600; color: var(--text-muted); }
        .page-btn.active { background: #1e3a8a; color: white; border-color: #1e3a8a; }
        .page-btn-text { border: 1px solid var(--border); padding: 6px 12px; border-radius: 6px; font-size: 13px; font-weight: 600; color: var(--text-muted); }

        .predictive-insight-card { padding: 32px; display: flex; justify-content: space-between; align-items: center; margin-top: 32px; border: 1.5px solid var(--border); }
        .insight-content { display: flex; gap: 24px; }
        .insight-icon-box { width: 48px; height: 48px; background: #eff6ff; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .insight-text h4 { font-size: 18px; margin-bottom: 8px; }
        .insight-text p { font-size: 14px; color: var(--text-muted); max-width: 500px; line-height: 1.5; }
        .optimize-btn { background: #1e3a8a; color: white; padding: 12px 24px; border-radius: 8px; font-weight: 700; font-size: 14px; }

        .floating-plus-btn { position: fixed; bottom: 40px; right: 40px; width: 56px; height: 56px; background: #1e3a8a; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 10px 25px rgba(30, 58, 138, 0.3); cursor: pointer; }
        .floating-plus-btn::after { content: ''; position: absolute; bottom: -5px; right: -5px; width: 24px; height: 24px; background: #0f172a; border-radius: 50%; border: 3px solid white; }
      `}} />
    </div>
  );
};

export default ContentModeration;
