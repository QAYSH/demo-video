import React from 'react';
import { 
  QrCode, 
  RefreshCw,  
  FileDown, 
  Plus, 
  ChevronDown, 
  Clock,
  Wifi,
  MapPin,
  ShieldAlert
} from 'lucide-react';

const AttendanceManagement: React.FC = () => {
  const currentFeed = [
    { name: 'Alex Abernathy', status: 'PRESENT', time: '09:30:12 AM', method: 'QR Scan' },
    { name: 'Bella Jenkins', status: 'LATE', sub: '(5M)', time: '09:35:45 AM', method: 'Beacons' },
    { name: 'Caleb Knight', status: 'PRESENT', time: '09:31:05 AM', method: 'QR Scan' },
    { name: 'Diana Lee', status: 'FLAGGED', time: '09:38:22 AM', method: 'Web Proxy' },
  ];

  const pastHistory = [
    { date: 'Oct 24, 2023 - Lecture 08', topics: 'Sorting Algorithms & Big O Notation', percentage: 94, count: '145 / 154' },
    { date: 'Oct 22, 2023 - Lecture 07', topics: 'Linear Data Structures, Linked Lists', percentage: 91, count: '140 / 154' },
    { date: 'Oct 17, 2023 - Lecture 06', topics: 'Complexity Analysis (Midterm Prep)', percentage: 82, count: '126 / 154' },
  ];

  return (
    <div className="attendance-page">
      <div className="page-header-flex">
        <div className="header-info">
          <div className="breadcrumb">
            <span>CS101: Intro to Computer Science</span>
            <ChevronDown size={14} />
          </div>
          <h1>Attendance Management</h1>
          <p>Real-time session tracking for CS101 • Section A</p>
        </div>
        <div className="header-actions">
          <button className="secondary-btn"><FileDown size={18} /> Export Report</button>
          <button className="btn-primary"><Plus size={18} /> New Manual Session</button>
        </div>
      </div>

      <div className="attendance-layout">
        <div className="active-session-col">
          <div className="session-card card">
            <div className="card-top">
              <span className="live-badge">● Live</span>
              <h3>ACTIVE SESSION</h3>
            </div>
            
            <div className="qr-container">
              <div className="qr-box">
                <QrCode size={120} color="#0f172a" />
                <span className="qr-overlay-text">SESSSIAN</span>
              </div>
              <div className="qr-info">
                <h2>Dynamic Code</h2>
                <p>Refreshes every 30 seconds</p>
              </div>
            </div>

            <div className="session-stats">
              <div className="stat-box">
                <span className="val">0:24</span>
                <span className="lab">REMAINING</span>
              </div>
              <div className="stat-box">
                <span className="val">142</span>
                <span className="lab">STUDENTS</span>
              </div>
            </div>

            <button className="refresh-btn">
              <RefreshCw size={18} /> <span>Force Refresh</span>
            </button>
          </div>

          <div className="flagged-card card">
            <div className="card-header">
              <ShieldAlert size={18} color="var(--danger)" />
              <h3>Flagged Identities</h3>
              <span className="badge badge-red">2 DETECTED</span>
            </div>

            <div className="flagged-list">
              <div className="flagged-item">
                <div className="flagged-info">
                  <strong>Marcus Thorne</strong>
                  <span className="flag-reason">Duplicate IP: 192.168.1.45</span>
                  <span className="flag-time">09:42:01</span>
                </div>
                <div className="flagged-actions">
                  <button className="btn-reject">Reject</button>
                  <button className="btn-approve">Approve</button>
                </div>
              </div>

              <div className="flagged-item">
                <div className="flagged-info">
                  <strong>Elena Rodriguez</strong>
                  <span className="flag-reason">Geo-mismatch: +4.2km</span>
                  <span className="flag-time">09:44:15</span>
                </div>
                <div className="flagged-actions">
                  <button className="btn-reject">Reject</button>
                  <button className="btn-approve">Approve</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="feed-col">
          <div className="current-feed-card card">
            <div className="feed-header">
              <h3>Current Session Feed</h3>
              <div className="feed-legend">
                <span className="legend-item"><span className="dot green"></span> 128 Present</span>
                <span className="legend-item"><span className="dot orange"></span> 12 Late</span>
                <span className="legend-item"><span className="dot red"></span> 2 Suspicious</span>
              </div>
            </div>

            <table className="feed-table">
              <thead>
                <tr>
                  <th>Student Name</th>
                  <th>Status</th>
                  <th>Timestamp</th>
                  <th>Method</th>
                </tr>
              </thead>
              <tbody>
                {currentFeed.map((f, i) => (
                  <tr key={i}>
                    <td className="name-cell">
                      <div className="avatar-mini">{f.name[0]}</div>
                      <span>{f.name}</span>
                    </td>
                    <td>
                      <span className={`status-tag ${f.status.toLowerCase()}`}>
                        {f.status} {f.sub && <span className="sub">{f.sub}</span>}
                      </span>
                    </td>
                    <td>{f.time}</td>
                    <td className="method-cell">
                      {f.method === 'QR Scan' && <QrCode size={14} />}
                      {f.method === 'Beacons' && <Wifi size={14} />}
                      {f.method === 'Web Proxy' && <MapPin size={14} />}
                      <span>{f.method}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button className="view-all-btn">View All 154 Entries</button>
          </div>

          <div className="history-section">
            <h3>Past Sessions History</h3>
            <div className="history-list">
              {pastHistory.map((h, i) => (
                <div key={i} className="history-card card">
                  <div className="history-main">
                    <div className="history-icon">
                      <Clock size={20} color="var(--primary)" />
                    </div>
                    <div className="history-info">
                      <h4>{h.date}</h4>
                      <p>Topics: {h.topics}</p>
                    </div>
                  </div>
                  <div className="history-stats">
                    <div className="percent-info">
                      <span className="percent">{h.percentage}% Attendance</span>
                      <span className="count">{h.count} Students</span>
                    </div>
                    <ChevronDown size={20} color="#94a3b8" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .attendance-page { max-width: 1300px; margin: 0 auto; }
        .page-header-flex { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 32px; }
        .header-info h1 { font-size: 32px; font-weight: 700; margin-bottom: 8px; }
        .header-info p { color: var(--text-muted); }

        .attendance-layout { display: grid; grid-template-columns: 360px 1fr; gap: 32px; }

        .active-session-col { display: flex; flex-direction: column; gap: 24px; }
        .session-card { background: #f8fafc; text-align: center; padding: 32px; border: 1.5px solid var(--primary); }
        .session-card .card-top { display: flex; align-items: center; justify-content: center; gap: 10px; margin-bottom: 32px; }
        .live-badge { background: #dcfce7; color: #166534; font-size: 10px; font-weight: 700; padding: 2px 8px; border-radius: 9999px; }
        .session-card h3 { font-size: 13px; font-weight: 700; color: var(--text-muted); letter-spacing: 0.5px; }

        .qr-container { margin-bottom: 40px; }
        .qr-box { background: white; padding: 24px; border-radius: var(--radius-md); display: inline-block; position: relative; box-shadow: var(--card-shadow); margin-bottom: 24px; }
        .qr-overlay-text { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); background: white; padding: 2px 8px; font-size: 10px; font-weight: 900; letter-spacing: 2px; }
        .qr-info h2 { font-size: 24px; margin-bottom: 4px; }
        .qr-info p { font-size: 13px; color: var(--text-muted); }

        .session-stats { display: flex; background: white; border-radius: var(--radius-md); border: 1px solid var(--border); overflow: hidden; margin-bottom: 24px; }
        .stat-box { flex: 1; padding: 16px; display: flex; flex-direction: column; }
        .stat-box:first-child { border-right: 1px solid var(--border); }
        .stat-box .val { font-size: 24px; font-weight: 800; }
        .stat-box .lab { font-size: 9px; font-weight: 700; color: var(--text-muted); }

        .refresh-btn { width: 100%; padding: 14px; background: white; border: 1px solid var(--border); border-radius: var(--radius-md); display: flex; align-items: center; justify-content: center; gap: 10px; font-weight: 600; color: var(--text-main); }

        .flagged-card { padding: 24px; }
        .flagged-card .card-header { display: flex; align-items: center; gap: 12px; margin-bottom: 24px; }
        .flagged-list { display: flex; flex-direction: column; gap: 20px; }
        .flagged-item { padding: 16px; background: #fff5f5; border: 1px solid #fee2e2; border-radius: var(--radius-sm); }
        .flagged-info { display: flex; flex-direction: column; position: relative; margin-bottom: 16px; }
        .flag-reason { font-size: 12px; color: var(--danger); font-weight: 600; margin-top: 4px; }
        .flag-time { position: absolute; right: 0; top: 0; font-size: 10px; color: var(--danger); font-weight: 700; background: #fee2e2; padding: 2px 6px; border-radius: 4px; }
        .flagged-actions { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        .flagged-actions button { padding: 8px; border-radius: 6px; font-size: 12px; font-weight: 700; }
        .btn-reject { background: white; border: 1px solid var(--danger); color: var(--danger); }
        .btn-approve { background: var(--primary); color: white; }

        .feed-col { display: flex; flex-direction: column; gap: 32px; }
        .current-feed-card { padding: 0; overflow: hidden; }
        .feed-header { padding: 24px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border); }
        .feed-legend { display: flex; gap: 16px; }
        .legend-item { display: flex; align-items: center; gap: 6px; font-size: 12px; font-weight: 600; }
        .dot { width: 8px; height: 8px; border-radius: 50%; }
        .dot.green { background: var(--success); }
        .dot.orange { background: var(--warning); }
        .dot.red { background: var(--danger); }

        .feed-table { width: 100%; border-collapse: collapse; }
        .feed-table th { text-align: left; padding: 16px 24px; font-size: 11px; font-weight: 700; color: var(--text-muted); background: #f8fafc; border-bottom: 1px solid var(--border); }
        .feed-table td { padding: 12px 24px; border-bottom: 1px solid var(--border); font-size: 14px; }
        .name-cell { display: flex; align-items: center; gap: 12px; font-weight: 600; }
        .avatar-mini { width: 28px; height: 28px; background: #e2e8f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 11px; }

        .status-tag { font-size: 10px; font-weight: 800; padding: 4px 10px; border-radius: 9999px; }
        .status-tag.present { background: #dcfce7; color: #166534; }
        .status-tag.late { background: #fffbeb; color: #d97706; }
        .status-tag.flagged { background: #fee2e2; color: #991b1b; }
        .status-tag .sub { opacity: 0.7; margin-left: 4px; }

        .method-cell { display: flex; align-items: center; gap: 8px; color: var(--text-muted); font-size: 13px; }
        .view-all-btn { width: 100%; padding: 14px; color: var(--primary); font-weight: 600; font-size: 13px; }

        .history-section h3 { font-size: 18px; margin-bottom: 20px; }
        .history-list { display: flex; flex-direction: column; gap: 16px; }
        .history-card { display: flex; justify-content: space-between; align-items: center; padding: 20px 24px; }
        .history-main { display: flex; align-items: center; gap: 20px; }
        .history-icon { width: 40px; height: 40px; background: #eff6ff; border-radius: 8px; display: flex; align-items: center; justify-content: center; }
        .history-info h4 { font-size: 15px; margin-bottom: 4px; }
        .history-info p { font-size: 12px; color: var(--text-muted); }
        .history-stats { display: flex; align-items: center; gap: 24px; }
        .percent-info { display: flex; flex-direction: column; align-items: flex-end; }
        .percent-info .percent { font-size: 14px; font-weight: 700; color: var(--success); }
        .percent-info .count { font-size: 11px; color: var(--text-muted); }
      `}} />
    </div>
  );
};

export default AttendanceManagement;
