import React from 'react';
import { 
  PlayCircle, 
  Clock, 
  CheckCircle2, 
  BookMarked, 
  TrendingUp,
  CalendarDays,
  Plus,
  FileText,
  BrainCircuit
} from 'lucide-react';

const Dashboard: React.FC = () => {
  const courses = [
    { id: 1, title: 'CS101: Intro to...', prof: 'Prof. Sarah Jenkins', progress: 65, type: 'CORE', color: '#1a4599' },
    { id: 2, title: 'DS302: Advanced...', prof: 'Dr. Robert Chen', progress: 32, type: 'STEM', color: '#f97316' },
    { id: 3, title: 'ART210: Digital Art...', prof: 'Elena Rodriguez', progress: 88, type: 'HUMANITIES', color: '#ef4444' },
  ];

  const deadlines = [
    { id: 1, title: 'Midterm Project', course: 'CS101: Software Engineering', date: 'MAY 12', time: '11:59 PM', urgency: 'HIGH URGENCY' },
    { id: 2, title: 'Quiz 3: Modernism', course: 'ART210: Digital Art History', date: 'MAY 15', time: 'Due in 3 days', urgency: 'MEDIUM' },
  ];

  const activities = [
    { id: 1, type: 'completed', title: 'Completed: Memory Allocation', course: 'CS101 Intro to Software Eng.', time: '2 hours ago', xp: '+50 XP' },
    { id: 2, type: 'read', title: 'Read: Bayesian Foundations', course: 'DS302 Advanced Analytics', time: '4 hours ago', xp: '+30 XP' },
    { id: 3, type: 'submitted', title: 'Submitted: Weekly Quiz', course: 'ART210 Digital Art History', time: '9 hours ago', xp: '+70 XP' },
  ];

  return (
    <div className="dashboard-page">
      <div className="welcome-banner">
        <div className="welcome-content">
          <h1>Welcome back, Alex!</h1>
          <p>You've completed 12 lessons this week. Keep up the momentum!</p>
        </div>
        <div className="token-balance">
          <div className="token-info">
            <span className="token-label">AI TOKEN BALANCE</span>
            <span className="token-value">1,240 tokens</span>
          </div>
          <div className="token-icon-box">_RK</div>
        </div>
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-main">
          <div className="section-header">
            <h2>Enrolled Courses</h2>
            <button className="view-all">View All</button>
          </div>
          
          <div className="courses-grid">
            {courses.map(course => (
              <div key={course.id} className="course-card card">
                <div className="course-card-top">
                  <div className="course-image" style={{ background: `linear-gradient(45deg, ${course.color}dd, ${course.color})` }}>
                    <div className="course-overlay-icon"></div>
                  </div>
                  <span className={`badge badge-type`}>{course.type}</span>
                </div>
                <div className="course-card-info">
                  <h3>{course.title}</h3>
                  <p>{course.prof}</p>
                </div>
                <div className="course-progress-section">
                  <div className="progress-ring-container">
                    <svg width="60" height="60">
                      <circle cx="30" cy="30" r="25" fill="none" stroke="#e2e8f0" strokeWidth="5" />
                      <circle 
                        cx="30" cy="30" r="25" fill="none" stroke={course.color} 
                        strokeWidth="5" strokeDasharray={`${2 * Math.PI * 25}`}
                        strokeDashoffset={`${2 * Math.PI * 25 * (1 - course.progress / 100)}`}
                        strokeLinecap="round"
                        style={{ transition: 'stroke-dashoffset 1s ease' }}
                      />
                    </svg>
                    <span className="progress-percent">{course.progress}%</span>
                  </div>
                  <div className="progress-label">
                    <span>CURRENT MODULE</span>
                    <strong>Systems...</strong>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="section-header" style={{ marginTop: '40px' }}>
            <h2>Continue Learning</h2>
          </div>

          <div className="continue-card card">
            <div className="continue-play">
              <PlayCircle size={40} color="white" fill="var(--primary)" />
            </div>
            <div className="continue-info">
              <span className="subtitle">NEXT UP IN CS101</span>
              <h3>Lesson 4: Memory Management</h3>
              <p>Estimated time: 15 mins</p>
            </div>
            <button className="continue-btn">
              <TrendingUp size={20} />
            </button>
          </div>
        </div>

        <div className="dashboard-sidebar">
          <div className="sidebar-section card">
            <div className="section-header">
              <h2>Upcoming Deadlines</h2>
              <span className="badge badge-red">2 LATE</span>
            </div>
            <div className="deadlines-list">
              {deadlines.map(d => (
                <div key={d.id} className="deadline-item">
                  <div className="deadline-date">
                    <span className="month">{d.date.split(' ')[0]}</span>
                    <span className="day">{d.date.split(' ')[1]}</span>
                  </div>
                  <div className="deadline-content">
                    <h4>{d.title}</h4>
                    <p>{d.course}</p>
                    <div className="deadline-footer">
                      <Clock size={12} />
                      <span>{d.time}</span>
                      <span className={`badge ${d.urgency.includes('HIGH') ? 'badge-red' : 'badge-orange'}`} style={{ fontSize: '10px' }}>
                        {d.urgency}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="secondary-btn">View Calendar</button>
          </div>

          <div className="sidebar-section card" style={{ marginTop: '24px' }}>
            <div className="section-header">
              <h2>Recent Activity</h2>
              <span className="xp-today">+150 XP today</span>
            </div>
            <div className="activity-list">
              {activities.map(a => (
                <div key={a.id} className="activity-item">
                  <div className={`activity-icon ${a.type}`}>
                    {a.type === 'completed' && <CheckCircle2 size={16} />}
                    {a.type === 'read' && <BookMarked size={16} />}
                    {a.type === 'submitted' && <FileText size={16} />}
                  </div>
                  <div className="activity-content">
                    <h4>{a.title}</h4>
                    <p>{a.course}</p>
                    <div className="activity-footer">
                      <span>{a.time}</span>
                      <span className="xp-tag">{a.xp}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="fab-add"><Plus /></button>
          </div>

          <div className="prediction-card card" style={{ marginTop: '24px' }}>
            <div className="prediction-header">
              <BrainCircuit size={20} color="var(--primary)" />
              <h3>Smart Grade Prediction</h3>
            </div>
            <p>Based on your current progress, your estimated final grade for CS101 is <strong>A-</strong>. Dedicate 2 more hours to Systems Architecture to boost it.</p>
            <button className="predict-btn">Generate Study Plan <TrendingUp size={14} /></button>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .dashboard-page {
          max-width: 1200px;
          margin: 0 auto;
        }

        .welcome-banner {
          background: linear-gradient(90deg, var(--primary) 0%, #2563eb 100%);
          border-radius: var(--radius-lg);
          padding: 40px;
          color: white;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 32px;
          position: relative;
          overflow: hidden;
        }

        .welcome-banner::after {
          content: '';
          position: absolute;
          right: -50px;
          top: -50px;
          width: 200px;
          height: 200px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
        }

        .welcome-content h1 {
          font-size: 32px;
          margin-bottom: 8px;
        }

        .welcome-content p {
          opacity: 0.9;
          font-size: 16px;
        }

        .token-balance {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          padding: 12px 24px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          gap: 20px;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .token-info {
          display: flex;
          flex-direction: column;
        }

        .token-label {
          font-size: 10px;
          font-weight: 700;
          opacity: 0.8;
          letter-spacing: 0.5px;
        }

        .token-value {
          font-size: 20px;
          font-weight: 700;
        }

        .token-icon-box {
          font-weight: 900;
          font-size: 24px;
          color: #fbbf24;
        }

        .dashboard-grid {
          display: grid;
          grid-template-columns: 1fr 340px;
          gap: 32px;
        }

        .section-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .section-header h2 {
          font-size: 20px;
          font-weight: 700;
        }

        .view-all {
          color: var(--primary);
          font-weight: 600;
          font-size: 14px;
        }

        .courses-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 20px;
        }

        .course-card {
          padding: 16px;
        }

        .course-card-top {
          display: flex;
          justify-content: space-between;
          margin-bottom: 16px;
        }

        .course-image {
          width: 100%;
          height: 100px;
          border-radius: var(--radius-md);
          position: relative;
          margin-bottom: 12px;
        }

        .badge-type {
          position: absolute;
          top: 8px;
          right: 8px;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(4px);
          font-size: 9px;
          padding: 2px 6px;
        }

        .course-card h3 {
          font-size: 15px;
          margin-bottom: 4px;
        }

        .course-card p {
          font-size: 13px;
          color: var(--text-muted);
          margin-bottom: 16px;
        }

        .course-progress-section {
          display: flex;
          align-items: center;
          gap: 12px;
          padding-top: 16px;
          border-top: 1px solid var(--border);
        }

        .progress-ring-container {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .progress-percent {
          position: absolute;
          font-size: 11px;
          font-weight: 700;
        }

        .progress-label {
          display: flex;
          flex-direction: column;
        }

        .progress-label span {
          font-size: 9px;
          color: var(--text-muted);
          font-weight: 600;
        }

        .progress-label strong {
          font-size: 12px;
        }

        .continue-card {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 20px;
        }

        .continue-info {
          flex: 1;
        }

        .continue-info .subtitle {
          font-size: 10px;
          font-weight: 700;
          color: var(--primary);
          letter-spacing: 0.5px;
        }

        .continue-info h3 {
          font-size: 18px;
          margin: 4px 0;
        }

        .continue-info p {
          font-size: 14px;
          color: var(--text-muted);
        }

        .continue-btn {
          width: 48px;
          height: 48px;
          background: #f1f5f9;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-muted);
        }

        .deadlines-list, .activity-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .deadline-item {
          display: flex;
          gap: 16px;
        }

        .deadline-date {
          background: #fee2e2;
          color: #ef4444;
          width: 50px;
          height: 50px;
          border-radius: var(--radius-md);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .deadline-date .month { font-size: 9px; font-weight: 700; }
        .deadline-date .day { font-size: 18px; font-weight: 800; }

        .deadline-content h4 { font-size: 14px; }
        .deadline-content p { font-size: 12px; color: var(--text-muted); margin-bottom: 4px; }
        .deadline-footer { display: flex; align-items: center; gap: 6px; font-size: 11px; color: var(--text-muted); }

        .activity-item {
          display: flex;
          gap: 16px;
        }

        .activity-icon {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .activity-icon.completed { background: #dcfce7; color: #166534; }
        .activity-icon.read { background: #dbeafe; color: #1e40af; }
        .activity-icon.submitted { background: #f3e8ff; color: #6b21a8; }

        .activity-content h4 { font-size: 14px; }
        .activity-content p { font-size: 12px; color: var(--text-muted); }
        .activity-footer { display: flex; justify-content: space-between; margin-top: 4px; font-size: 11px; color: var(--text-muted); }
        .xp-tag { color: var(--success); font-weight: 700; }

        .secondary-btn {
          width: 100%;
          padding: 12px;
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          font-weight: 600;
          font-size: 13px;
          margin-top: 20px;
        }

        .fab-add {
          width: 44px;
          height: 44px;
          background: var(--primary);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          bottom: 24px;
          right: 24px;
          box-shadow: 0 4px 12px rgba(26, 69, 153, 0.4);
        }

        .prediction-card {
          background: #eff6ff;
          border: 1px solid #bfdbfe;
        }

        .prediction-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 12px;
        }

        .prediction-card p {
          font-size: 13px;
          line-height: 1.5;
          margin-bottom: 16px;
        }

        .predict-btn {
          width: 100%;
          padding: 10px;
          border: 1px solid var(--primary);
          border-radius: var(--radius-sm);
          color: var(--primary);
          font-weight: 600;
          font-size: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
      `}} />
    </div>
  );
};

export default Dashboard;
