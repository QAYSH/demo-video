import React from 'react';
import { 
   
  ChevronDown, 
  Search, 
  Bell, 
  Mail, 
  Send, 
  BrainCircuit,  
  CheckCircle2, 
  Activity,
  TrendingUp
} from 'lucide-react';

const AdvancedAnalytics: React.FC = () => {
  const days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
 
  
  const heatmapData = [
    [2, 4, 1, 3, 5, 2, 1],
    [3, 2, 4, 6, 4, 1, 0],
    [5, 4, 5, 6, 5, 2, 1],
    [4, 3, 4, 5, 4, 1, 1],
  ];

  return (
    <div className="analytics-page">
      <div className="analytics-header">
        <div className="breadcrumb">
          <span>Analytics</span> / <span>Student Engagement</span>
        </div>
        <div className="header-actions">
          <div className="search-box">
            <Search size={16} />
            <input type="text" placeholder="Search student metrics..." />
          </div>
          <Bell size={20} className="header-icon" />
          <div className="profile-mini">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Prof" alt="Prof" />
          </div>
        </div>
      </div>

      <div className="top-section-grid">
        <div className="heatmap-card card">
          <div className="card-header-flex">
            <div className="header-info">
              <h3>Engagement Heatmap</h3>
              <p>Daily platform activity levels for June 2024</p>
            </div>
            <button className="dropdown-btn">MONTHLY VIEW <ChevronDown size={14} /></button>
          </div>

          <div className="heatmap-container">
            <div className="day-labels">
              {days.map(d => <span key={d}>{d}</span>)}
            </div>
            <div className="heatmap-grid">
              {heatmapData.map((week, wi) => (
                <div key={wi} className="heatmap-week">
                  {week.map((val, di) => (
                    <div 
                      key={di} 
                      className="heatmap-cell" 
                      style={{ opacity: 0.2 + (val * 0.15), background: 'var(--primary)' }}
                      title={`Activity Level: ${val}`}
                    ></div>
                  ))}
                </div>
              ))}
            </div>
            <div className="heatmap-legend">
              <span>LESS</span>
              <div className="legend-cells">
                <div className="l-cell" style={{ opacity: 0.2 }}></div>
                <div className="l-cell" style={{ opacity: 0.4 }}></div>
                <div className="l-cell" style={{ opacity: 0.6 }}></div>
                <div className="l-cell" style={{ opacity: 0.8 }}></div>
                <div className="l-cell" style={{ opacity: 1.0 }}></div>
              </div>
              <span>MORE ACTIVITY</span>
            </div>
          </div>
        </div>

        <div className="at-risk-sidebar card">
          <div className="sidebar-header">
            <h3>At-Risk Students</h3>
            <p>Attendance below 50% threshold</p>
          </div>
          <div className="risk-list">
            {[
              { name: 'Julian V.', att: '38% ATTENDANCE' },
              { name: 'Elena K.', att: '42% ATTENDANCE' },
              { name: 'Sarah M.', att: '47% ATTENDANCE' },
            ].map((s, i) => (
              <div key={i} className="risk-item">
                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${s.name}`} alt="Student" />
                <div className="risk-info">
                  <h4>{s.name}</h4>
                  <span className="att-val">{s.att}</span>
                </div>
                <button className="mail-btn"><Mail size={16} /></button>
              </div>
            ))}
          </div>
          <button className="bulk-btn"><Send size={16} /> Send Bulk Reminder</button>
        </div>
      </div>

      <div className="student-detail-section card">
        <div className="detail-header">
          <div className="student-main-info">
            <div className="student-avatar-box">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus" alt="Marcus" />
              <div className="badge-overlay"><CheckCircle2 size={12} color="white" /></div>
            </div>
            <div className="info-text">
              <div className="name-row">
                <h2>Marcus Chen</h2>
                <span className="top-badge">TOP 5%</span>
              </div>
              <p>ID: 2024-MC8812 • Senior Researcher Track</p>
              <span className="active-tag"><Activity size={12} /> ACTIVE FOR 124 DAYS</span>
            </div>
          </div>

          <div className="ai-insight-box">
            <div className="ai-insight-header">
              <BrainCircuit size={18} color="var(--primary)" />
              <span>AI INTELLIGENCE INSIGHT</span>
            </div>
            <p>"Marcus exhibits high night-time platform engagement. Predicted Grade: <strong>A+</strong>. Suggest advanced research modules for next semester."</p>
          </div>
        </div>

        <div className="detail-grid">
          <div className="progress-timeline">
            <h3><Activity size={16} /> PROGRESS TIMELINE</h3>
            <div className="timeline-list">
              <div className="timeline-item">
                <div className="dot blue"></div>
                <div className="tl-content">
                  <span className="tl-date">TODAY, 09:12 AM</span>
                  <h4>Completed Advanced Macroeconomics Quiz</h4>
                  <span className="tl-score">Score: 95/100</span>
                </div>
              </div>
              <div className="timeline-item">
                <div className="dot light"></div>
                <div className="tl-content">
                  <span className="tl-date">YESTERDAY</span>
                  <h4>Watched "Game Theory Foundations"</h4>
                  <span className="tl-sub">Duration: 42 mins</span>
                </div>
              </div>
              <div className="timeline-item">
                <div className="dot light"></div>
                <div className="tl-content">
                  <span className="tl-date">JUNE 12, 2024</span>
                  <h4>Submitted Case Study #4</h4>
                  <span className="tl-sub">Grade Pending Review</span>
                </div>
              </div>
            </div>
          </div>

          <div className="stats-column">
            <div className="mini-stats-row">
              <div className="mini-stat card">
                <span>AVG. QUIZ SCORE</span>
                <div className="stat-val-flex">
                  <strong>92%</strong>
                  <span className="trend-up"><TrendingUp size={14} /> 4%</span>
                </div>
                <div className="bar-chart-mini">
                  <div className="m-bar" style={{ height: '40%' }}></div>
                  <div className="m-bar" style={{ height: '60%' }}></div>
                  <div className="m-bar" style={{ height: '50%' }}></div>
                  <div className="m-bar active" style={{ height: '90%' }}></div>
                  <div className="m-bar" style={{ height: '70%' }}></div>
                  <div className="m-bar" style={{ height: '85%' }}></div>
                </div>
              </div>

              <div className="mini-stat card">
                <span>AI INTERACTIONS</span>
                <div className="stat-val-flex">
                  <strong>142</strong>
                  <span className="unit">PER MONTH</span>
                </div>
                <div className="interaction-badges">
                  <span className="i-badge">Q</span>
                  <span className="i-badge">A</span>
                  <span className="i-badge">S</span>
                  <span className="i-rate">84% Resolution Rate</span>
                </div>
              </div>
            </div>

            <div className="learning-velocity-card">
              <div className="v-header">
                <TrendingUp size={18} />
                <span>LEARNING VELOCITY</span>
                <span className="real-time">REAL-TIME METRICS</span>
              </div>
              <div className="v-chart">
                <div className="v-peak">PEAK</div>
                <svg viewBox="0 0 400 100" className="v-svg">
                  <path d="M0,80 Q50,70 100,85 T200,40 T300,70 T400,20 L400,100 L0,100 Z" fill="rgba(255,255,255,0.1)" />
                  <path d="M0,80 Q50,70 100,85 T200,40 T300,70 T400,20" fill="none" stroke="white" strokeWidth="3" />
                  <circle cx="200" cy="40" r="4" fill="white" />
                </svg>
                <div className="v-grid">
                  <div className="v-metric">
                    <span>WEEKLY PACE</span>
                    <strong>12 hrs/week</strong>
                  </div>
                  <div className="v-metric">
                    <span>CONSISTENCY</span>
                    <strong>High (9.4)</strong>
                  </div>
                  <div className="v-metric">
                    <span>MODULE CAP</span>
                    <strong>85%</strong>
                  </div>
                  <div className="v-metric">
                    <span>TARGET</span>
                    <strong>On Track</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .analytics-page { max-width: 1300px; margin: 0 auto; }
        .analytics-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 32px; }
        .analytics-header .breadcrumb { font-size: 13px; color: var(--text-muted); font-weight: 600; }
        .analytics-header .breadcrumb span:last-child { color: var(--text-main); }
        
        .analytics-header .header-actions { display: flex; align-items: center; gap: 24px; }
        .search-box { background: white; border: 1px solid var(--border); border-radius: 8px; padding: 0 12px; display: flex; align-items: center; gap: 10px; }
        .search-box input { border: none; outline: none; padding: 10px 0; font-size: 13px; width: 200px; }
        .header-icon { color: var(--text-muted); cursor: pointer; }
        .profile-mini img { width: 32px; height: 32px; border-radius: 50%; }

        .top-section-grid { display: grid; grid-template-columns: 1fr 340px; gap: 32px; margin-bottom: 32px; }
        .heatmap-card { padding: 24px; }
        .card-header-flex { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 32px; }
        .card-header-flex h3 { font-size: 18px; margin-bottom: 4px; }
        .card-header-flex p { font-size: 12px; color: var(--text-muted); }
        .dropdown-btn { background: #f1f5f9; padding: 6px 12px; border-radius: 6px; font-size: 10px; font-weight: 800; color: var(--primary); display: flex; align-items: center; gap: 8px; }

        .heatmap-container { display: flex; flex-direction: column; align-items: center; }
        .day-labels { display: flex; width: 100%; justify-content: space-around; margin-bottom: 12px; font-size: 10px; font-weight: 700; color: #cbd5e1; }
        .heatmap-grid { display: flex; flex-direction: column; gap: 8px; width: 100%; }
        .heatmap-week { display: flex; gap: 8px; justify-content: space-around; }
        .heatmap-cell { flex: 1; aspect-ratio: 1; border-radius: 4px; }
        .heatmap-legend { display: flex; align-items: center; gap: 12px; margin-top: 32px; font-size: 10px; font-weight: 700; color: #94a3b8; }
        .legend-cells { display: flex; gap: 4px; }
        .l-cell { width: 12px; height: 12px; background: var(--primary); border-radius: 2px; }

        .at-risk-sidebar { padding: 24px; border-top: 4px solid var(--danger); }
        .at-risk-sidebar h3 { font-size: 16px; margin-bottom: 4px; }
        .at-risk-sidebar p { font-size: 12px; color: var(--text-muted); margin-bottom: 24px; }
        .risk-list { display: flex; flex-direction: column; gap: 20px; margin-bottom: 24px; }
        .risk-item { display: flex; align-items: center; gap: 12px; }
        .risk-item img { width: 36px; height: 36px; border-radius: 50%; }
        .risk-info { flex: 1; }
        .risk-info h4 { font-size: 14px; margin-bottom: 2px; }
        .att-val { font-size: 10px; font-weight: 800; color: var(--danger); }
        .mail-btn { width: 32px; height: 32px; border: 1px solid var(--border); border-radius: 6px; display: flex; align-items: center; justify-content: center; color: var(--primary); }
        .bulk-btn { width: 100%; background: #0f172a; color: white; padding: 12px; border-radius: var(--radius-sm); font-size: 12px; font-weight: 700; display: flex; align-items: center; justify-content: center; gap: 10px; }

        .student-detail-section { padding: 32px; }
        .detail-header { display: flex; justify-content: space-between; margin-bottom: 40px; }
        .student-main-info { display: flex; gap: 24px; }
        .student-avatar-box { position: relative; }
        .student-avatar-box img { width: 80px; height: 80px; border-radius: 50%; border: 4px solid var(--primary-light); }
        .badge-overlay { position: absolute; bottom: 0; right: 0; width: 24px; height: 24px; background: var(--primary); border: 3px solid white; border-radius: 50%; display: flex; align-items: center; justify-content: center; }
        .info-text .name-row { display: flex; align-items: center; gap: 12px; margin-bottom: 4px; }
        .info-text h2 { font-size: 24px; font-weight: 800; }
        .top-badge { background: #dbeafe; color: var(--primary); font-size: 9px; font-weight: 800; padding: 2px 8px; border-radius: 4px; }
        .info-text p { font-size: 13px; color: var(--text-muted); margin-bottom: 12px; }
        .active-tag { background: #f1f5f9; padding: 4px 12px; border-radius: 9999px; font-size: 10px; font-weight: 800; color: var(--text-muted); display: flex; align-items: center; gap: 6px; }

        .ai-insight-box { max-width: 400px; padding: 20px; background: #f5f3ff; border: 1.5px solid #ddd6fe; border-radius: var(--radius-md); border-left: 6px solid var(--primary); }
        .ai-insight-header { display: flex; align-items: center; gap: 8px; font-size: 11px; font-weight: 800; color: var(--primary); margin-bottom: 12px; }
        .ai-insight-box p { font-size: 13px; font-style: italic; line-height: 1.5; color: var(--text-main); }

        .detail-grid { display: grid; grid-template-columns: 300px 1fr; gap: 40px; }
        .progress-timeline h3 { font-size: 12px; font-weight: 700; color: var(--text-muted); letter-spacing: 0.5px; margin-bottom: 24px; display: flex; align-items: center; gap: 8px; }
        .timeline-list { display: flex; flex-direction: column; gap: 0; position: relative; }
        .timeline-list::after { content: ''; position: absolute; left: 6px; top: 0; bottom: 0; width: 2px; background: #f1f5f9; }
        .timeline-item { display: flex; gap: 20px; padding-bottom: 32px; position: relative; z-index: 1; }
        .timeline-item .dot { width: 14px; height: 14px; border-radius: 50%; border: 3px solid white; flex-shrink: 0; margin-top: 4px; }
        .timeline-item .dot.blue { background: var(--primary); }
        .timeline-item .dot.light { background: #cbd5e1; }
        .tl-date { font-size: 10px; font-weight: 700; color: var(--text-muted); }
        .tl-content h4 { font-size: 14px; margin-bottom: 4px; }
        .tl-score { font-size: 12px; font-weight: 800; color: var(--primary); }
        .tl-sub { font-size: 12px; color: var(--text-muted); }

        .stats-column { display: flex; flex-direction: column; gap: 24px; }
        .mini-stats-row { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
        .mini-stat { padding: 24px; }
        .mini-stat span { font-size: 11px; font-weight: 700; color: var(--text-muted); }
        .stat-val-flex { display: flex; align-items: baseline; gap: 12px; margin-top: 12px; }
        .stat-val-flex strong { font-size: 32px; font-weight: 800; }
        .trend-up { color: var(--success); font-size: 12px; font-weight: 800; display: flex; align-items: center; gap: 4px; }
        .mini-stat .unit { font-size: 10px; color: var(--text-muted); font-weight: 700; }

        .bar-chart-mini { display: flex; align-items: flex-end; gap: 8px; height: 60px; margin-top: 20px; }
        .m-bar { flex: 1; background: #e2e8f0; border-radius: 4px; }
        .m-bar.active { background: var(--primary); }

        .interaction-badges { display: flex; align-items: center; gap: 6px; margin-top: 24px; }
        .i-badge { width: 24px; height: 24px; background: #eff6ff; color: var(--primary); border-radius: 4px; display: flex; align-items: center; justify-content: center; font-size: 10px; font-weight: 800; }
        .i-rate { font-size: 12px; font-weight: 600; color: var(--text-muted); margin-left: 12px; }

        .learning-velocity-card { background: #1e293b; border-radius: var(--radius-md); padding: 32px; color: white; }
        .v-header { display: flex; align-items: center; gap: 12px; font-size: 12px; font-weight: 700; margin-bottom: 32px; }
        .real-time { margin-left: auto; color: rgba(255,255,255,0.4); font-size: 10px; }
        .v-chart { position: relative; height: 120px; margin-bottom: 32px; }
        .v-peak { position: absolute; top: 10px; left: 180px; background: #4f46e5; padding: 4px 12px; border-radius: 9999px; font-size: 10px; font-weight: 800; }
        .v-svg { width: 100%; height: 100%; }
        .v-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 24px; }
        .v-metric span { display: block; font-size: 10px; font-weight: 700; opacity: 0.5; margin-bottom: 4px; }
        .v-metric strong { font-size: 14px; font-weight: 700; }
      `}} />
    </div>
  );
};

export default AdvancedAnalytics;
