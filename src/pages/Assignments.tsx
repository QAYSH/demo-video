import React from 'react';
import { 
  FileText, 
  Calendar, 
  AlertCircle, 
  CheckCircle2, 
  MoreVertical,
  MessageSquare,
  BarChart2
} from 'lucide-react';

const Assignments: React.FC = () => {
  const activeTasks = [
    { id: 1, course: 'CS101', title: 'Software Architecture Diagram', due: 'April 15', daysLeft: 3, color: '#1a4599' },
    { id: 2, course: 'ART210', title: 'Modernist Art Essay', due: 'April 18', daysLeft: 6, color: '#f97316' },
  ];

  const submissions = [
    { name: 'Git Lab Submission', date: 'April 10, 2024', status: 'SUBMITTED', icon: FileText },
    { name: 'Data Analysis Report', date: 'April 8, 2024', status: 'SUBMITTED', icon: BarChart2 },
  ];

  const grades = [
    { id: 1, course: 'CS101', title: 'Unit 1 Quiz', score: 92, total: 100, feedback: '"Great work on the memory management section. Your understanding of heap vs stack allocation is excellent."', color: '#1a4599' },
    { id: 2, course: 'ART210', title: 'Art Analysis 1', score: 85, total: 100, feedback: '"Insightful analysis of color theory in the provided plates. Consider expanding on the social context next time."', color: '#f97316' },
  ];

  return (
    <div className="assignments-page">
      <div className="page-header">
        <h1>Assignments</h1>
        <p>Manage your tasks, track submissions, and review graded work.</p>
      </div>

      <div className="assignment-tabs">
        <button className="tab active">Active <span className="tab-count">2</span></button>
        <button className="tab">Submitted <span className="tab-count">2</span></button>
        <button className="tab">Graded <span className="tab-count">2</span></button>
      </div>

      <div className="section-title">
        <FileText size={20} color="var(--primary)" />
        <h2>Active Tasks</h2>
      </div>

      <div className="active-tasks-layout">
        <div className="tasks-grid">
          {activeTasks.map(task => (
            <div key={task.id} className="task-card card">
              <div className="task-card-header">
                <span className="badge badge-blue">{task.course}</span>
                <button className="icon-btn-small"><MoreVertical size={16} /></button>
              </div>
              <h3>{task.title}</h3>
              <div className="task-meta">
                <Calendar size={14} />
                <span>Due {task.due}</span>
              </div>
              <div className="task-footer">
                <span className="deadline-warning"><AlertCircle size={14} /> {task.daysLeft} days left</span>
                <button className="btn-primary-small">Submit</button>
              </div>
            </div>
          ))}
        </div>

        <div className="ai-schedule-card card">
          <div className="ai-schedule-header">
            <div className="rk-logo">_RK</div>
            <h3>AI Smart Schedule</h3>
          </div>
          <p>Based on your study habits, the <strong>Software Architecture</strong> task will take approximately 4 hours.</p>
          <div className="schedule-progress">
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '60%' }}></div>
            </div>
            <span className="progress-label">60% Planned</span>
          </div>
        </div>
      </div>

      <div className="section-title" style={{ marginTop: '48px' }}>
        <CheckCircle2 size={20} color="var(--success)" />
        <h2>Recently Submitted</h2>
      </div>

      <div className="submissions-table card">
        <div className="table-header">
          <span className="col-name">Assignment Name</span>
          <span className="col-date">Submitted Date</span>
          <span className="col-status">Status</span>
        </div>
        <div className="table-body">
          {submissions.map((sub, i) => (
            <div key={i} className="table-row">
              <div className="row-name">
                <sub.icon size={18} color="#94a3b8" />
                <span>{sub.name}</span>
              </div>
              <div className="row-date">{sub.date}</div>
              <div className="row-status">
                <span className="badge badge-green">{sub.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="section-title" style={{ marginTop: '48px' }}>
        <BarChart2 size={20} color="var(--warning)" />
        <h2>Feedback & Grades</h2>
      </div>

      <div className="grades-grid">
        {grades.map(grade => (
          <div key={grade.id} className="grade-card card">
            <div className="grade-header">
              <span className="badge badge-blue">{grade.course}</span>
              <div className="grade-score">
                <strong>{grade.score}</strong>
                <span>/{grade.total}</span>
              </div>
            </div>
            <h3>{grade.title}</h3>
            <div className="feedback-box">
              <p>{grade.feedback}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="floating-chat-btn"><MessageSquare color="white" /></button>

      <style dangerouslySetInnerHTML={{ __html: `
        .assignments-page {
          max-width: 1000px;
          margin: 0 auto;
        }

        .page-header h1 {
          font-size: 32px;
          margin-bottom: 8px;
        }

        .page-header p {
          color: var(--text-muted);
          margin-bottom: 32px;
        }

        .assignment-tabs {
          display: flex;
          gap: 32px;
          border-bottom: 1px solid var(--border);
          margin-bottom: 40px;
        }

        .tab {
          padding: 12px 0;
          font-weight: 600;
          color: var(--text-muted);
          display: flex;
          align-items: center;
          gap: 8px;
          position: relative;
        }

        .tab.active { color: var(--primary); }
        .tab.active::after {
          content: '';
          position: absolute;
          bottom: -1px;
          left: 0;
          right: 0;
          height: 3px;
          background: var(--primary);
        }

        .tab-count {
          background: #f1f5f9;
          padding: 2px 8px;
          border-radius: 9999px;
          font-size: 11px;
        }

        .tab.active .tab-count {
          background: var(--primary-light);
          color: var(--primary);
        }

        .section-title {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
        }

        .section-title h2 { font-size: 20px; font-weight: 700; }

        .active-tasks-layout {
          display: grid;
          grid-template-columns: 1fr 280px;
          gap: 24px;
        }

        .tasks-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .task-card {
          border-top: 4px solid var(--primary);
        }

        .task-card:nth-child(2) { border-top-color: var(--warning); }

        .task-card-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 12px;
        }

        .task-card h3 { font-size: 16px; margin-bottom: 12px; }

        .task-meta {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: var(--text-muted);
          margin-bottom: 24px;
        }

        .task-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 16px;
          border-top: 1px solid var(--border);
        }

        .deadline-warning {
          color: var(--danger);
          font-size: 12px;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .btn-primary-small {
          background: var(--primary);
          color: white;
          padding: 6px 16px;
          border-radius: var(--radius-sm);
          font-size: 13px;
          font-weight: 600;
        }

        .ai-schedule-card {
          background: linear-gradient(135deg, #ffffff 0%, #f5f3ff 100%);
          border: 1px solid #ddd6fe;
        }

        .rk-logo {
          font-weight: 900;
          color: var(--primary);
          font-size: 20px;
          margin-bottom: 12px;
        }

        .ai-schedule-header h3 { font-size: 16px; color: var(--primary); margin-bottom: 16px; }

        .ai-schedule-card p { font-size: 13px; line-height: 1.5; margin-bottom: 24px; color: var(--text-muted); }

        .schedule-progress {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .schedule-progress .progress-bar {
          height: 6px;
          background: #e2e8f0;
          border-radius: 3px;
        }

        .schedule-progress .progress-fill {
          height: 100%;
          background: var(--primary);
          border-radius: 3px;
        }

        .schedule-progress .progress-label {
          font-size: 10px;
          font-weight: 700;
          align-self: flex-end;
          color: var(--primary);
        }

        .submissions-table {
          padding: 0;
          overflow: hidden;
        }

        .table-header {
          display: grid;
          grid-template-columns: 1fr 200px 150px;
          padding: 16px 24px;
          background: #f8fafc;
          border-bottom: 1px solid var(--border);
          font-size: 12px;
          font-weight: 600;
          color: var(--text-muted);
        }

        .table-row {
          display: grid;
          grid-template-columns: 1fr 200px 150px;
          padding: 16px 24px;
          border-bottom: 1px solid var(--border);
          align-items: center;
        }

        .table-row:last-child { border-bottom: none; }

        .row-name { display: flex; align-items: center; gap: 12px; font-weight: 600; }
        .row-date { font-size: 14px; color: var(--text-muted); }

        .grades-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .grade-card {
          padding: 24px;
        }

        .grade-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }

        .grade-score { display: flex; align-items: baseline; gap: 2px; }
        .grade-score strong { font-size: 24px; color: var(--primary); }
        .grade-score span { color: var(--text-muted); font-size: 14px; }

        .feedback-box {
          margin-top: 20px;
          padding: 16px;
          background: #f8fafc;
          border-left: 4px solid var(--border);
          border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
        }

        .feedback-box p {
          font-size: 13px;
          font-style: italic;
          color: var(--text-muted);
          line-height: 1.5;
        }

        .floating-chat-btn {
          position: fixed;
          bottom: 32px;
          right: 32px;
          width: 56px;
          height: 56px;
          background: var(--primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 20px rgba(26, 69, 153, 0.4);
          z-index: 100;
        }
      `}} />
    </div>
  );
};

export default Assignments;
