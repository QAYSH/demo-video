import React from 'react';
import { 
  PlayCircle, 
  CheckCircle2, 
  Lock, 
  FileText, 
  Layers,
  ChevronRight,
  Download,
  Calendar,
  Sparkles,
  Clock
} from 'lucide-react';

const MyCourses: React.FC = () => {
  const lessons = [
    { id: 1, title: 'Introduction to SDLC', type: 'VIDEO', duration: '15m', status: 'completed' },
    { id: 2, title: 'Agile vs Waterfall', type: 'ARTICLE', duration: '10m', status: 'completed' },
    { id: 3, title: 'Git Fundamentals', type: 'INTERACTIVE', duration: '25m', status: 'completed' },
    { id: 4, title: 'Memory Management', type: 'VIDEO', duration: '20m', status: 'in-progress' },
    { id: 5, title: 'Data Structures Intro', type: 'AI CLASSROOM', duration: '30m', status: 'locked' },
  ];

  return (
    <div className="courses-page">
      <div className="course-header-banner">
        <div className="course-banner-content">
          <span className="course-code-badge">COURSE CS101 • Core Curriculum</span>
          <h1>Intro to Software Engineering</h1>
          <div className="prof-info">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Prof" alt="Prof" className="prof-mini-img" />
            <span>Prof. Miller</span>
            <span className="separator">|</span>
            <span>Spring 2024</span>
          </div>
        </div>
        <div className="course-overall-progress card">
          <div className="progress-text">
            <span>Overall Progress</span>
            <strong>65%</strong>
          </div>
          <div className="progress-bar-container">
            <div className="progress-bar-fill" style={{ width: '65%' }}></div>
          </div>
          <p><CheckCircle2 size={12} /> 3 of 5 Modules Completed</p>
        </div>
      </div>

      <div className="course-tabs">
        <button className="tab active">Lessons</button>
        <button className="tab">Overview</button>
        <button className="tab">Flashcards</button>
      </div>

      <div className="course-layout">
        <div className="course-main">
          <div className="curriculum-header">
            <h2>Course Curriculum</h2>
            <div className="filter-dropdown">
              <span>Filter by:</span>
              <select>
                <option>All Modules</option>
              </select>
            </div>
          </div>

          <div className="lessons-list">
            {lessons.map((lesson, index) => (
              <div key={lesson.id} className={`lesson-card card ${lesson.status}`}>
                <div className="lesson-status-icon">
                  {lesson.status === 'completed' && <CheckCircle2 size={24} color="var(--success)" />}
                  {lesson.status === 'in-progress' && <div className="pulse-icon"><PlayCircle size={24} color="var(--primary)" /></div>}
                  {lesson.status === 'locked' && <Lock size={20} color="#cbd5e1" />}
                </div>
                <div className="lesson-info">
                  <span className="lesson-meta">LESSON {index + 1} • <span className="lesson-type">{lesson.type}</span></span>
                  <h3>{lesson.title}</h3>
                  <div className="lesson-footer">
                    <span><Clock size={14} /> {lesson.duration}</span>
                    <span className={`status-text ${lesson.status}`}>{lesson.status === 'in-progress' ? 'In Progress' : lesson.status.charAt(0).toUpperCase() + lesson.status.slice(1)}</span>
                  </div>
                </div>
                <div className="lesson-action">
                  {lesson.status === 'in-progress' ? (
                    <button className="btn-primary">Continue</button>
                  ) : (
                    <button className="icon-btn">
                      {lesson.type === 'VIDEO' && <PlayCircle size={20} />}
                      {lesson.type === 'ARTICLE' && <FileText size={20} />}
                      {lesson.type === 'INTERACTIVE' && <Layers size={20} />}
                      {lesson.status === 'locked' && <Lock size={20} />}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="course-sidebar">
          <div className="ai-insights card">
            <div className="ai-header">
              <Sparkles size={20} color="var(--purple)" />
              <h3>AI Insights</h3>
            </div>
            <p>Based on your progress in <strong>Lesson 3</strong>, you're ready for the <strong>Data Structures</strong> challenge. Would you like to practice key concepts now?</p>
            <button className="ai-btn">Generate Flashcards</button>
          </div>

          <div className="course-overview-card card">
            <h3>Course Overview</h3>
            <p>This course provides a comprehensive introduction to software engineering principles, covering the complete lifecycle from requirements analysis to maintenance and testing.</p>
            <div className="overview-links">
              <button className="overview-link">
                <FileText size={18} />
                <span>Full Syllabus (PDF)</span>
                <Download size={14} />
              </button>
              <button className="overview-link">
                <Calendar size={18} />
                <span>Exam Schedule</span>
                <ChevronRight size={14} />
              </button>
            </div>
          </div>

          <div className="upcoming-tasks card">
            <h3>Upcoming Tasks</h3>
            <div className="task-mini">
              <div className="task-dot red"></div>
              <div className="task-mini-info">
                <h4>Project Proposal Due</h4>
                <span>Tomorrow at 11:59 PM</span>
              </div>
            </div>
            <div className="task-mini">
              <div className="task-dot orange"></div>
              <div className="task-mini-info">
                <h4>Weekly Quiz #4</h4>
                <span>Friday, April 12</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .courses-page {
          max-width: 1200px;
          margin: 0 auto;
        }

        .course-header-banner {
          background: #1e40af;
          border-radius: var(--radius-lg);
          padding: 40px;
          color: white;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
        }

        .course-code-badge {
          background: rgba(255, 255, 255, 0.2);
          padding: 4px 12px;
          border-radius: 4px;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
        }

        .course-banner-content h1 {
          font-size: 36px;
          margin: 12px 0;
        }

        .prof-info {
          display: flex;
          align-items: center;
          gap: 12px;
          opacity: 0.9;
          font-size: 15px;
        }

        .prof-mini-img {
          width: 32px;
          height: 32px;
          border-radius: 50%;
        }

        .separator { opacity: 0.3; }

        .course-overall-progress {
          width: 300px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: white;
        }

        .progress-text {
          display: flex;
          justify-content: space-between;
          margin-bottom: 12px;
        }

        .progress-bar-container {
          height: 8px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 4px;
          margin-bottom: 12px;
        }

        .progress-bar-fill {
          height: 100%;
          background: white;
          border-radius: 4px;
        }

        .course-overall-progress p {
          font-size: 12px;
          display: flex;
          align-items: center;
          gap: 6px;
          opacity: 0.8;
        }

        .course-tabs {
          display: flex;
          gap: 40px;
          border-bottom: 1px solid var(--border);
          margin-bottom: 32px;
          padding: 0 10px;
        }

        .tab {
          padding: 12px 0;
          font-weight: 600;
          color: var(--text-muted);
          position: relative;
        }

        .tab.active {
          color: var(--primary);
        }

        .tab.active::after {
          content: '';
          position: absolute;
          bottom: -1px;
          left: 0;
          right: 0;
          height: 3px;
          background: var(--primary);
          border-radius: 3px 3px 0 0;
        }

        .course-layout {
          display: grid;
          grid-template-columns: 1fr 340px;
          gap: 32px;
        }

        .curriculum-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
        }

        .filter-dropdown {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 14px;
        }

        .filter-dropdown select {
          padding: 8px 16px;
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          background: white;
        }

        .lessons-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .lesson-card {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 20px;
        }

        .lesson-card.in-progress {
          border: 2px solid var(--primary);
          background: #eff6ff;
        }

        .lesson-card.locked {
          opacity: 0.6;
          background: #f8fafc;
        }

        .lesson-info {
          flex: 1;
        }

        .lesson-meta {
          font-size: 11px;
          font-weight: 700;
          color: var(--text-muted);
        }

        .lesson-type { color: var(--primary); }

        .lesson-info h3 {
          font-size: 18px;
          margin: 4px 0;
        }

        .lesson-footer {
          display: flex;
          align-items: center;
          gap: 16px;
          font-size: 13px;
          color: var(--text-muted);
        }

        .status-text.completed { color: var(--success); font-weight: 600; }
        .status-text.in-progress { color: var(--primary); font-weight: 600; }

        .icon-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-muted);
        }

        .ai-insights {
          background: #fdf4ff;
          border: 1px solid #f5d0fe;
          margin-bottom: 24px;
        }

        .ai-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 12px;
        }

        .ai-insights p {
          font-size: 13px;
          line-height: 1.5;
          margin-bottom: 16px;
        }

        .ai-btn {
          width: 100%;
          padding: 10px;
          border: 1px solid var(--purple);
          border-radius: var(--radius-sm);
          color: var(--purple);
          font-weight: 600;
          font-size: 12px;
        }

        .course-overview-card h3, .upcoming-tasks h3 {
          font-size: 18px;
          margin-bottom: 16px;
        }

        .course-overview-card p {
          font-size: 14px;
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .overview-links {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .overview-link {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px;
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          font-size: 14px;
          font-weight: 500;
          color: var(--primary);
        }

        .overview-link span { flex: 1; text-align: left; }

        .task-mini {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 16px;
        }

        .task-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .task-dot.red { background: var(--danger); }
        .task-dot.orange { background: var(--warning); }

        .task-mini-info h4 { font-size: 14px; }
        .task-mini-info span { font-size: 12px; color: var(--text-muted); }
      `}} />
    </div>
  );
};

export default MyCourses;
