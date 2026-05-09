import React from 'react';
import { 
  Users, 
  GraduationCap, 
  Zap, 
  BookOpen, 
  TrendingUp, 
  AlertTriangle, 
  Key, 
  Bell, 
  ChevronDown,
  UserPlus,
  ShieldAlert,
  ArrowRight
} from 'lucide-react';

const AdminDashboard: React.FC = () => {
  const stats = [
    { label: 'Total Students', value: '24,592', sub: '+12%', icon: Users, color: '#eff6ff', iconColor: '#2563eb', trend: 'up' },
    { label: 'Total Lecturers', value: '1,204', sub: 'Stable', icon: GraduationCap, color: '#f8fafc', iconColor: '#64748b' },
    { label: 'AI Tokens Used Today', value: '$412.80', sub: 'AI Active', icon: Zap, color: '#fff7ed', iconColor: '#ea580c', badge: 'AI Active' },
    { label: 'Active Courses', value: '3,410', sub: '', icon: BookOpen, color: '#f1f5f9', iconColor: '#1e293b' },
  ];

  const alerts = [
    { type: 'Infrastructure Budget Warning', desc: 'AI token consumption has reached 85% of the $15k monthly threshold. Automated scaling limits will apply soon.', time: '2 mins ago', severity: 'CRITICAL', icon: AlertTriangle, iconBg: '#fee2e2', iconColor: '#dc2626' },
    { type: 'API Key Expiration', desc: "The primary OpenAI Production key 'EDU-PRO-01' is set to expire in 48 hours. Renewal required.", time: '1 hour ago', severity: 'HIGH', icon: Key, iconBg: '#fff7ed', iconColor: '#ea580c' },
    { type: 'Suspicious Access Pattern', desc: 'Failed login attempts detected from unrecognized IP 192.168.1.45 targeting Administrative Portal.', time: '3 hours ago', severity: 'REVIEW', icon: ShieldAlert, iconBg: '#eff6ff', iconColor: '#2563eb' },
  ];

  return (
    <div className="admin-dashboard">
      <div className="dashboard-header">
        <div className="header-left">
          <span className="system-label">SYSTEM OVERVIEW</span>
          <h1>Institutional Dashboard</h1>
        </div>
        <div className="system-status-badge">
          <span className="status-dot"></span>
          All systems operational
        </div>
      </div>

      <div className="stats-grid">
        {stats.map((stat, i) => (
          <div key={i} className="stat-card card">
            <div className="stat-main">
              <div className="stat-icon-box" style={{ background: stat.color }}>
                <stat.icon size={20} color={stat.iconColor} />
              </div>
              {stat.trend && <span className="trend-label green">{stat.sub}</span>}
              {stat.badge && <span className="trend-label orange">{stat.badge}</span>}
              {!stat.trend && !stat.badge && <span className="trend-label gray">{stat.sub}</span>}
            </div>
            <div className="stat-info">
              <span className="label">{stat.label}</span>
              <span className="value">{stat.value}</span>
            </div>
            <div className="stat-footer-bar" style={{ background: i === 0 ? 'var(--primary)' : 'transparent' }}></div>
          </div>
        ))}
      </div>

      <div className="dashboard-main-row">
        <div className="trends-card card">
          <div className="card-header">
            <div className="header-text">
              <h3>Token Consumption Trends</h3>
              <p>Last 7 days of daily infrastructure cost</p>
            </div>
            <button className="dropdown-btn">Last 7 Days <ChevronDown size={14} /></button>
          </div>
          <div className="chart-placeholder">
            {/* Visual representation of a line chart */}
            <svg viewBox="0 0 600 200" className="chart-svg">
              <path d="M0,150 Q50,140 100,160 T200,100 T300,120 T400,60 T500,80 T600,40" fill="none" stroke="var(--primary)" strokeWidth="3" />
              <path d="M0,150 Q50,140 100,160 T200,100 T300,120 T400,60 T500,80 T600,40 L600,200 L0,200 Z" fill="url(#grad)" opacity="0.1" />
              <defs>
                <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{ stopColor: 'var(--primary)', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: 'var(--primary)', stopOpacity: 0 }} />
                </linearGradient>
              </defs>
            </svg>
            <div className="chart-days">
              <span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span><span>SUN</span>
            </div>
          </div>
        </div>

        <div className="budget-col">
          <div className="budget-card card">
            <h3>Monthly Budget</h3>
            <p>Total infrastructure allocation</p>
            <div className="budget-stats">
              <span>Spent</span>
              <strong>$12,450.00 / $15,000</strong>
            </div>
            <div className="budget-progress">
              <div className="progress-fill" style={{ width: '83%' }}></div>
            </div>
            <div className="budget-warning">
              <AlertTriangle size={14} />
              <span>83% of monthly limit reached</span>
            </div>

            <div className="quick-actions">
              <span className="qa-label">QUICK ACTIONS</span>
              <button className="qa-item">
                <UserPlus size={18} />
                <span>Invite User</span>
              </button>
              <button className="qa-item">
                <Key size={18} />
                <span>Add API Key</span>
              </button>
              <button className="qa-item">
                <Bell size={18} />
                <span>View Token Alerts</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="alerts-section card">
        <div className="section-header">
          <h3>Recent System Alerts</h3>
          <button className="view-all">View All Activity</button>
        </div>
        <div className="alerts-list">
          {alerts.map((alert, i) => (
            <div key={i} className="alert-item">
              <div className="alert-icon-box" style={{ background: alert.iconBg }}>
                <alert.icon size={20} color={alert.iconColor} />
              </div>
              <div className="alert-content">
                <div className="alert-top">
                  <h4>{alert.type}</h4>
                  <span className="alert-time">{alert.time}</span>
                </div>
                <p>{alert.desc}</p>
              </div>
              <div className="alert-severity">
                <span className={`severity-badge ${alert.severity.toLowerCase()}`}>{alert.severity}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="admin-footer">
        <p>© 2024 EduAdmin OS - University Management Systems. All rights reserved.</p>
        <div className="footer-links">
          <span>Terms of Service</span>
          <span>Data Privacy Policy</span>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .admin-dashboard { max-width: 1300px; margin: 0 auto; padding-bottom: 40px; }
        
        .dashboard-header { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 32px; }
        .system-label { font-size: 10px; font-weight: 700; color: var(--text-muted); letter-spacing: 1px; }
        .dashboard-header h1 { font-size: 32px; font-weight: 700; margin-top: 4px; }
        
        .system-status-badge { background: white; padding: 8px 16px; border-radius: 8px; border: 1px solid var(--border); display: flex; align-items: center; gap: 10px; font-size: 13px; font-weight: 600; color: var(--text-main); }
        .status-dot { width: 8px; height: 8px; background: #22c55e; border-radius: 50%; box-shadow: 0 0 8px rgba(34, 197, 94, 0.4); }

        .stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-bottom: 32px; }
        .stat-card { padding: 24px; position: relative; }
        .stat-main { display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; }
        .stat-icon-box { width: 40px; height: 40px; border-radius: 10px; display: flex; align-items: center; justify-content: center; }
        
        .trend-label { font-size: 11px; font-weight: 700; padding: 4px 8px; border-radius: 6px; }
        .trend-label.green { background: #dcfce7; color: #166534; }
        .trend-label.orange { background: #ffedd5; color: #9a3412; }
        .trend-label.gray { background: #f1f5f9; color: #64748b; }

        .stat-info .label { font-size: 13px; color: var(--text-muted); display: block; margin-bottom: 4px; font-weight: 500; }
        .stat-info .value { font-size: 32px; font-weight: 800; color: var(--text-main); }
        .stat-footer-bar { position: absolute; bottom: 0; left: 0; right: 0; height: 4px; border-radius: 0 0 12px 12px; }

        .dashboard-main-row { display: grid; grid-template-columns: 1fr 340px; gap: 24px; margin-bottom: 32px; }
        .trends-card { padding: 32px; }
        .trends-card .card-header { display: flex; justify-content: space-between; margin-bottom: 40px; }
        .trends-card h3 { font-size: 20px; margin-bottom: 4px; }
        .trends-card p { font-size: 13px; color: var(--text-muted); }

        .chart-placeholder { height: 240px; display: flex; flex-direction: column; }
        .chart-svg { flex: 1; width: 100%; }
        .chart-days { display: flex; justify-content: space-between; padding-top: 20px; font-size: 10px; font-weight: 700; color: #cbd5e1; }

        .budget-card { padding: 24px; }
        .budget-card h3 { font-size: 18px; margin-bottom: 4px; }
        .budget-card p { font-size: 13px; color: var(--text-muted); margin-bottom: 24px; }
        .budget-stats { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 12px; }
        .budget-stats span { font-size: 13px; font-weight: 600; color: var(--text-muted); }
        .budget-stats strong { font-size: 15px; font-weight: 800; }

        .budget-progress { height: 10px; background: #f1f5f9; border-radius: 5px; overflow: hidden; margin-bottom: 12px; }
        .progress-fill { height: 100%; background: #1e293b; border-radius: 5px; }
        .budget-warning { display: flex; align-items: center; gap: 8px; color: #dc2626; font-size: 11px; font-weight: 700; }

        .quick-actions { margin-top: 32px; display: flex; flex-direction: column; gap: 10px; }
        .qa-label { font-size: 10px; font-weight: 800; color: var(--text-muted); margin-bottom: 4px; }
        .qa-item { display: flex; align-items: center; gap: 12px; padding: 12px 16px; background: #f8fafc; border: 1px solid var(--border); border-radius: 8px; font-size: 13px; font-weight: 600; color: var(--text-main); }
        .qa-item:hover { background: #f1f5f9; }

        .alerts-section { padding: 0; overflow: hidden; }
        .alerts-section .section-header { padding: 24px 32px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border); }
        .alerts-section h3 { font-size: 18px; }
        .view-all { color: var(--primary); font-size: 13px; font-weight: 700; }

        .alerts-list { display: flex; flex-direction: column; }
        .alert-item { padding: 20px 32px; display: flex; gap: 24px; align-items: center; border-bottom: 1px solid var(--border); }
        .alert-item:last-child { border-bottom: none; }
        .alert-icon-box { width: 44px; height: 44px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        
        .alert-content { flex: 1; }
        .alert-top { display: flex; justify-content: space-between; margin-bottom: 4px; }
        .alert-top h4 { font-size: 15px; font-weight: 700; }
        .alert-time { font-size: 12px; color: var(--text-muted); font-weight: 500; }
        .alert-content p { font-size: 13px; color: var(--text-muted); line-height: 1.5; }

        .severity-badge { padding: 4px 8px; border-radius: 4px; font-size: 10px; font-weight: 800; }
        .severity-badge.critical { background: #fee2e2; color: #dc2626; }
        .severity-badge.high { background: #ffedd5; color: #ea580c; }
        .severity-badge.review { background: #dbeafe; color: #2563eb; }

        .admin-footer { margin-top: 48px; padding-top: 24px; border-top: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center; }
        .admin-footer p { font-size: 12px; color: var(--text-muted); }
        .admin-footer .footer-links { display: flex; gap: 24px; font-size: 12px; color: var(--text-muted); font-weight: 500; }
      `}} />
    </div>
  );
};

export default AdminDashboard;
