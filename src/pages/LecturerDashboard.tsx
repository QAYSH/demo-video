import React from 'react';
import { 
  Users, 
  BookOpen, 
  CheckCircle2, 
  BrainCircuit, 
  Calendar, 
  Zap, 
  Clock, 
  Mail, 
  AlertTriangle
} from 'lucide-react';

const LecturerDashboard: React.FC = () => {
  const stats = [
    { label: 'TOTAL COURSES', value: '12', sub: '+2 this semester', icon: BookOpen, color: '#dbeafe', iconColor: '#1e40af' },
    { label: 'TOTAL STUDENTS', value: '458', sub: 'Across all active batches', icon: Users, color: '#f1f5f9', iconColor: '#64748b' },
    { label: "TODAY'S ATTENDANCE", value: '92.4%', sub: '', icon: CheckCircle2, color: '#dcfce7', iconColor: '#166534', progress: 92.4 },
    { label: 'AI TOKENS (DAILY)', value: '420', sub: '/ 1000 left', icon: BrainCircuit, color: '#f5f3ff', iconColor: '#6b21a8', progress: 42 },
  ];

  const courses = [
    { id: 1, title: 'Intro to Software Engineering', students: 124, hours: '2h / week', completion: 65, code: 'CS101', img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&q=80' },
    { id: 2, title: 'Advanced Data Analytics', students: 86, hours: '4h / week', completion: 32, code: 'DS302', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80' },
  ];

  const atRisk = [
    { name: 'Marcus Chen', course: 'CS101', score: 28, status: 'Critical' },
    { name: 'Elena Rodriguez', course: 'DS302', score: 45, status: 'Warning' },
    { name: 'Sarah Jenkins', course: 'CS101', score: 48, status: 'Warning' },
  ];

  const schedule = [
    { time: '09:00 AM - 11:00 AM', title: 'Software Architecture Workshop', location: 'Lecture Hall 4A • 84 Students', active: true },
    { time: '01:30 PM - 03:00 PM', title: 'Data Analytics Seminar', location: 'Lab 12 • 42 Students', active: false },
    { time: '04:00 PM - 05:30 PM', title: 'Faculty Meeting', location: 'Conference Room B', active: false },
  ];

  return (
    <div className="lecturer-dashboard">
      <div className="dashboard-header-flex">
        <div className="welcome-text">
          <h1>Welcome back, Prof. Miller</h1>
          <p>Here is your teaching summary for today, Monday Oct 23rd.</p>
        </div>
        <div className="header-actions">
          <button className="secondary-btn"><Calendar size={18} /> Calendar</button>
          <button className="btn-primary"><Zap size={18} /> Quick Actions</button>
        </div>
      </div>

      <div className="stats-grid">
        {stats.map((stat, i) => (
          <div key={i} className="stat-card card">
            <div className="stat-card-main">
              <div className="stat-info">
                <span className="stat-label">{stat.label}</span>
                <span className="stat-value">{stat.value}</span>
                {stat.sub && <span className="stat-sub">{stat.sub}</span>}
              </div>
              <div className="stat-icon-box" style={{ background: stat.color }}>
                <stat.icon size={24} color={stat.iconColor} />
              </div>
            </div>
            {stat.progress !== undefined && (
              <div className="stat-progress-bar">
                <div className="progress-fill" style={{ width: `${stat.progress}%`, background: stat.iconColor }}></div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="dashboard-main-grid">
        <div className="dashboard-left-col">
          <div className="section-header">
            <h2>My Courses</h2>
            <button className="view-all">View All</button>
          </div>

          <div className="courses-list-row">
            {courses.map(course => (
              <div key={course.id} className="lecturer-course-card card">
                <div className="course-thumb" style={{ backgroundImage: `url(${course.img})` }}>
                  <span className="course-code-tag">{course.code}</span>
                </div>
                <div className="course-content">
                  <h3>{course.title}</h3>
                  <div className="course-meta">
                    <span><Users size={14} /> {course.students} Students</span>
                    <span><Clock size={14} /> {course.hours}</span>
                  </div>
                  <div className="course-completion">
                    <div className="completion-text">
                      <span>Syllabus Completion</span>
                      <span>{course.completion}%</span>
                    </div>
                    <div className="completion-bar">
                      <div className="bar-fill" style={{ width: `${course.completion}%` }}></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="section-header" style={{ marginTop: '40px' }}>
            <h2>At-Risk Students (Engagement)</h2>
          </div>

          <div className="at-risk-table card">
            <div className="table-header">
              <span>STUDENT NAME</span>
              <span>COURSE</span>
              <span>ENGAGEMENT SCORE</span>
              <span>STATUS</span>
              <span>ACTION</span>
            </div>
            <div className="table-body">
              {atRisk.map((student, i) => (
                <div key={i} className="table-row">
                  <div className="student-cell">
                    <div className="avatar-placeholder"></div>
                    <span>{student.name}</span>
                  </div>
                  <div className="course-cell">{student.course}</div>
                  <div className="score-cell">
                    <div className="score-bar-container">
                      <div className={`score-bar-fill ${student.status.toLowerCase()}`} style={{ width: `${student.score}%` }}></div>
                    </div>
                    <span>{student.score}%</span>
                  </div>
                  <div className="status-cell">
                    <span className={`status-badge-outline ${student.status.toLowerCase()}`}>
                      <AlertTriangle size={12} /> {student.status}
                    </span>
                  </div>
                  <div className="action-cell">
                    <button className="icon-btn-ghost"><Mail size={18} /></button>
                  </div>
                </div>
              ))}
            </div>
            <button className="view-all-table">View All Engagement Data</button>
          </div>
        </div>

        <div className="dashboard-right-col">
          <div className="schedule-card card">
            <div className="section-header">
              <h2>Today's Schedule</h2>
              <span className="live-now-tag">Live Now</span>
            </div>
            <div className="schedule-timeline">
              {schedule.map((item, i) => (
                <div key={i} className={`schedule-item ${item.active ? 'active' : ''}`}>
                  <div className="time-col">
                    <span>{item.time.split(' - ')[0]}</span>
                  </div>
                  <div className="content-col">
                    <h4>{item.title}</h4>
                    <p>{item.location}</p>
                    {item.active && (
                      <button className="attendance-btn"><CheckCircle2 size={16} /> Start Attendance</button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="ai-assistant-card card" style={{ marginTop: '24px' }}>
            <div className="ai-header">
              <BrainCircuit size={20} color="var(--primary)" />
              <h3>AI Teaching Assistant</h3>
            </div>
            <p>Based on recent assignment submissions, students in <strong>CS101</strong> are struggling with <strong>Memory Management</strong>.</p>
            <div className="ai-quote">
              <p>"I recommend adding a practical coding drill to next Thursday's lecture."</p>
            </div>
            <button className="ai-action-btn">Generate Lesson Plan</button>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .lecturer-dashboard {
          max-width: 1300px;
          margin: 0 auto;
        }

        .dashboard-header-flex {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 32px;
        }

        .welcome-text h1 { font-size: 28px; margin-bottom: 8px; }
        .welcome-text p { color: var(--text-muted); }

        .header-actions { display: flex; gap: 12px; }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-bottom: 32px;
        }

        .stat-card {
          padding: 20px;
        }

        .stat-card-main {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 12px;
        }

        .stat-label { font-size: 10px; font-weight: 700; color: var(--text-muted); letter-spacing: 0.5px; }
        .stat-value { font-size: 28px; font-weight: 800; display: block; margin: 4px 0; }
        .stat-sub { font-size: 11px; font-weight: 600; color: var(--success); }

        .stat-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .stat-progress-bar {
          height: 4px;
          background: #e2e8f0;
          border-radius: 2px;
          overflow: hidden;
        }

        .progress-fill { height: 100%; }

        .dashboard-main-grid {
          display: grid;
          grid-template-columns: 1fr 360px;
          gap: 32px;
        }

        .courses-list-row {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .lecturer-course-card {
          padding: 0;
          overflow: hidden;
        }

        .course-thumb {
          height: 120px;
          background-size: cover;
          background-position: center;
          position: relative;
          padding: 12px;
        }

        .course-code-tag {
          background: rgba(255, 255, 255, 0.9);
          padding: 2px 8px;
          border-radius: 4px;
          font-size: 10px;
          font-weight: 700;
        }

        .course-content {
          padding: 16px;
        }

        .course-content h3 { font-size: 16px; margin-bottom: 8px; }

        .course-meta {
          display: flex;
          gap: 16px;
          color: var(--text-muted);
          font-size: 12px;
          margin-bottom: 16px;
        }

        .course-meta span { display: flex; align-items: center; gap: 6px; }

        .course-completion .completion-text {
          display: flex;
          justify-content: space-between;
          font-size: 11px;
          font-weight: 600;
          margin-bottom: 8px;
          color: var(--text-muted);
        }

        .completion-bar {
          height: 6px;
          background: #f1f5f9;
          border-radius: 3px;
        }

        .bar-fill {
          height: 100%;
          background: var(--primary);
          border-radius: 3px;
        }

        .at-risk-table {
          padding: 0;
          overflow: hidden;
        }

        .at-risk-table .table-header {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1.5fr 1fr 0.5fr;
          padding: 16px 24px;
          background: #f8fafc;
          font-size: 11px;
          font-weight: 700;
          color: var(--text-muted);
          border-bottom: 1px solid var(--border);
        }

        .at-risk-table .table-row {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1.5fr 1fr 0.5fr;
          padding: 16px 24px;
          align-items: center;
          border-bottom: 1px solid var(--border);
        }

        .student-cell { display: flex; align-items: center; gap: 12px; font-weight: 600; }
        .avatar-placeholder { width: 32px; height: 32px; background: #e2e8f0; border-radius: 50%; }

        .score-cell { display: flex; align-items: center; gap: 12px; font-size: 12px; font-weight: 700; }
        .score-bar-container { flex: 1; height: 6px; background: #f1f5f9; border-radius: 3px; }
        .score-bar-fill { height: 100%; border-radius: 3px; }
        .score-bar-fill.critical { background: var(--danger); }
        .score-bar-fill.warning { background: var(--warning); }

        .status-badge-outline {
          padding: 4px 8px;
          border-radius: 6px;
          font-size: 11px;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 6px;
          width: fit-content;
        }

        .status-badge-outline.critical { color: var(--danger); border: 1px solid #fee2e2; background: #fff5f5; }
        .status-badge-outline.warning { color: var(--warning); border: 1px solid #ffedd5; background: #fffbeb; }

        .view-all-table {
          width: 100%;
          padding: 14px;
          color: var(--primary);
          font-weight: 600;
          font-size: 13px;
        }

        .schedule-card { padding: 24px; }
        .live-now-tag { font-size: 10px; font-weight: 700; color: var(--danger); text-transform: uppercase; display: flex; align-items: center; gap: 6px; }
        .live-now-tag::before { content: ''; width: 6px; height: 6px; background: var(--danger); border-radius: 50%; animation: pulse 2s infinite; }

        .schedule-timeline {
          margin-top: 24px;
          display: flex;
          flex-direction: column;
          gap: 0;
          position: relative;
        }

        .schedule-timeline::after {
          content: '';
          position: absolute;
          left: 70px;
          top: 0;
          bottom: 0;
          width: 1px;
          background: #e2e8f0;
        }

        .schedule-item {
          display: flex;
          gap: 24px;
          padding: 20px 0;
          position: relative;
        }

        .schedule-item::before {
          content: '';
          position: absolute;
          left: 67px;
          top: 24px;
          width: 7px;
          height: 7px;
          background: white;
          border: 2px solid #cbd5e1;
          border-radius: 50%;
          z-index: 1;
        }

        .schedule-item.active::before {
          border-color: var(--primary);
          background: var(--primary);
        }

        .time-col { width: 70px; font-size: 12px; font-weight: 700; color: var(--text-muted); }
        .content-col h4 { font-size: 14px; margin-bottom: 4px; }
        .content-col p { font-size: 12px; color: var(--text-muted); margin-bottom: 12px; }

        .attendance-btn {
          background: var(--primary);
          color: white;
          padding: 8px 16px;
          border-radius: var(--radius-sm);
          font-size: 12px;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .ai-assistant-card { background: #f5f3ff; border: 1px solid #ddd6fe; }
        .ai-assistant-card h3 { color: var(--primary); }
        .ai-assistant-card p { font-size: 13px; line-height: 1.5; margin: 12px 0; }
        .ai-quote {
          background: white;
          padding: 12px;
          border-radius: var(--radius-sm);
          border-left: 4px solid var(--primary);
          margin-bottom: 16px;
        }
        .ai-quote p { font-style: italic; color: var(--text-main); margin: 0; font-size: 13px; }

        .ai-action-btn {
          width: 100%;
          padding: 10px;
          background: var(--primary);
          color: white;
          border-radius: var(--radius-sm);
          font-weight: 700;
          font-size: 13px;
        }
      `}} />
    </div>
  );
};

export default LecturerDashboard;
