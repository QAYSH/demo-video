import React from 'react';
import { 
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  TrendingDown,
  Settings,
  BrainCircuit,
  Search
} from 'lucide-react';

const Gradebook: React.FC = () => {
  const students = [
    { name: 'Alex Morgan', email: 'a.morgan@uni.edu', assignments: 92.5, midterm: 88, final: 'Pending', overall: '90.2% A', trend: 'up' },
    { name: 'Sarah Rivera', email: 's.rivera@uni.edu', assignments: 78.0, midterm: 82, final: 'Pending', overall: '80.0% B-', trend: 'down' },
    { name: 'Jordan Kim', email: 'j.kim@uni.edu', assignments: 64.5, midterm: 61, final: 'Pending', overall: '62.8% D', trend: 'down' },
    { name: 'Lydia White', email: 'l.white@uni.edu', assignments: 98.0, midterm: 95, final: 'Pending', overall: '96.5% A+', trend: 'up' },
    { name: 'Thomas Hayes', email: 't.hayes@uni.edu', assignments: 84.5, midterm: 79, final: 'Pending', overall: '81.8% B', trend: 'neutral' },
  ];

  return (
    <div className="gradebook-page">
      <div className="page-header-flex">
        <div className="header-info">
          <div className="breadcrumb">
            <span className="folder-icon">📂</span>
            <span>CS101: Intro to Computer Science</span>
            <ChevronLeft size={14} className="rotate-270" />
          </div>
          <h1>Gradebook</h1>
          <p>Managing 124 students for Fall Semester 2024</p>
        </div>
        <div className="header-actions">
          <div className="search-students">
            <Search size={16} />
            <input type="text" placeholder="Search students..." />
          </div>
          <button className="secondary-btn"><Settings size={18} /> Weights</button>
        </div>
      </div>

      <div className="summary-cards">
        <div className="summary-card card ai-highlight">
          <div className="card-header">
            <BrainCircuit size={18} color="var(--primary)" />
            <span>AI INSIGHT</span>
          </div>
          <div className="card-content">
            <span className="val">84.2%</span>
            <span className="sub">Class Average <TrendingUp size={14} color="var(--success)" /> <span className="green">2.4%</span></span>
          </div>
        </div>

        <div className="summary-card card">
          <div className="card-header">
            <span>FAILING RISK</span>
          </div>
          <div className="card-content">
            <span className="val">5 <span className="unit">students</span></span>
            <div className="risk-bar">
              <div className="risk-fill" style={{ width: '15%' }}></div>
            </div>
          </div>
        </div>

        <div className="summary-card card">
          <div className="card-header">
            <span>SUBMISSION RATE</span>
          </div>
          <div className="card-content">
            <span className="val">98%</span>
            <div className="rate-bar">
              <div className="rate-fill" style={{ width: '98%' }}></div>
            </div>
          </div>
        </div>

        <div className="summary-card card">
          <div className="card-header">
            <span>NEXT MILESTONE</span>
          </div>
          <div className="card-content">
            <span className="val-title">Final Exam</span>
            <span className="sub">in 12 days</span>
            <p className="milestone-detail">PREPARATION: 45% COMPLETE</p>
          </div>
        </div>
      </div>

      <div className="table-container card">
        <table className="gradebook-table">
          <thead>
            <tr>
              <th>STUDENT NAME</th>
              <th>ASSIGNMENTS (40%)</th>
              <th>MIDTERM (25%)</th>
              <th>FINAL (35%)</th>
              <th>OVERALL</th>
              <th>TREND</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s, i) => (
              <tr key={i}>
                <td>
                  <div className="student-profile">
                    <div className="avatar-mini" style={{ background: i % 2 === 0 ? '#dbeafe' : '#fef3c7' }}>
                      {s.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="profile-info">
                      <strong>{s.name}</strong>
                      <span>{s.email}</span>
                    </div>
                  </div>
                </td>
                <td>{s.assignments}</td>
                <td>{s.midterm}</td>
                <td className="pending-cell">{s.final}</td>
                <td>
                  <span className={`grade-badge ${s.overall.split(' ')[1][0]}`}>
                    {s.overall}
                  </span>
                </td>
                <td>
                  {s.trend === 'up' && <TrendingUp size={18} color="var(--success)" />}
                  {s.trend === 'down' && <TrendingDown size={18} color="var(--danger)" />}
                  {s.trend === 'neutral' && <span className="neutral-dash">—</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="table-footer">
          <p>Showing 5 of 124 students</p>
          <div className="pagination">
            <button className="page-btn"><ChevronLeft size={16} /></button>
            <button className="page-btn active">1</button>
            <button className="page-btn">2</button>
            <button className="page-btn">3</button>
            <span>...</span>
            <button className="page-btn">25</button>
            <button className="page-btn"><ChevronRight size={16} /></button>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .gradebook-page { max-width: 1300px; margin: 0 auto; }

        .page-header-flex { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 32px; }
        .breadcrumb { display: flex; align-items: center; gap: 8px; font-size: 13px; font-weight: 600; background: #f1f5f9; padding: 6px 12px; border-radius: 8px; width: fit-content; margin-bottom: 12px; }
        .rotate-270 { transform: rotate(-90deg); }

        .header-info h1 { font-size: 32px; font-weight: 700; margin-bottom: 8px; }
        .header-info p { color: var(--text-muted); }

        .header-actions { display: flex; gap: 16px; }
        .search-students { background: white; border: 1px solid var(--border); border-radius: 9999px; padding: 0 16px; display: flex; align-items: center; gap: 10px; width: 280px; }
        .search-students input { border: none; outline: none; padding: 10px 0; font-size: 14px; width: 100%; }

        .summary-cards { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-bottom: 32px; }
        .summary-card { padding: 24px; }
        .summary-card.ai-highlight { border: 1.5px solid var(--primary); background: #f0f7ff; }
        
        .card-header { font-size: 11px; font-weight: 700; color: var(--text-muted); letter-spacing: 0.5px; display: flex; align-items: center; gap: 8px; margin-bottom: 16px; }
        .summary-card .val { font-size: 32px; font-weight: 800; display: block; }
        .summary-card .val-title { font-size: 20px; font-weight: 800; display: block; }
        .summary-card .sub { font-size: 12px; font-weight: 600; color: var(--text-muted); display: flex; align-items: center; gap: 6px; }
        .summary-card .green { color: var(--success); }
        .summary-card .unit { font-size: 14px; font-weight: 600; }

        .risk-bar, .rate-bar { height: 6px; background: #f1f5f9; border-radius: 3px; margin-top: 12px; }
        .risk-fill { height: 100%; background: var(--danger); border-radius: 3px; }
        .rate-fill { height: 100%; background: var(--success); border-radius: 3px; }
        .milestone-detail { font-size: 10px; font-weight: 700; color: var(--text-muted); margin-top: 12px; }

        .table-container { padding: 0; overflow: hidden; }
        .gradebook-table { width: 100%; border-collapse: collapse; }
        .gradebook-table th { text-align: left; padding: 20px 24px; font-size: 12px; font-weight: 700; color: var(--text-muted); background: #f8fafc; border-bottom: 1px solid var(--border); }
        .gradebook-table td { padding: 16px 24px; border-bottom: 1px solid var(--border); font-size: 14px; }
        .gradebook-table tr:last-child td { border-bottom: none; }

        .student-profile { display: flex; align-items: center; gap: 16px; }
        .avatar-mini { width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 700; color: var(--primary); }
        .profile-info { display: flex; flex-direction: column; }
        .profile-info strong { font-size: 15px; }
        .profile-info span { font-size: 12px; color: var(--text-muted); }

        .pending-cell { font-style: italic; color: #94a3b8; }
        .grade-badge { padding: 6px 12px; border-radius: 9999px; font-weight: 700; font-size: 12px; }
        .grade-badge.A { background: #dcfce7; color: #166534; }
        .grade-badge.B { background: #eff6ff; color: #1d4ed8; }
        .grade-badge.D { background: #fee2e2; color: #991b1b; }

        .table-footer { padding: 16px 24px; display: flex; justify-content: space-between; align-items: center; }
        .table-footer p { font-size: 13px; color: var(--text-muted); }
        .pagination { display: flex; align-items: center; gap: 8px; }
        .page-btn { width: 32px; height: 32px; border-radius: 6px; border: 1px solid var(--border); display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 600; color: var(--text-muted); }
        .page-btn.active { background: var(--primary-light); color: var(--primary); border-color: var(--primary); }
      `}} />
    </div>
  );
};

export default Gradebook;
