import React from 'react';
import { 
  UserPlus, 
  Search, 
  ChevronDown, 
  Edit2, 
  Trash2, 
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Bot
} from 'lucide-react';

const UserManagement: React.FC = () => {
  const users = [
    { id: 'JD', name: 'Julianna Devis', email: 'j.devis@university.edu', role: 'LECTURER', dept: 'Liberal Arts', subDept: 'Philosophy & Ethics', status: true },
    { id: 'MK', name: 'Marcus Karter', email: 'm.karter@university.edu', role: 'STUDENT', dept: 'Engineering', subDept: 'Robotics & AI', status: true },
    { id: 'SL', name: 'Sarah Lousie', email: 's.lousie@university.edu', role: 'ADMIN', dept: 'Administration', subDept: 'Central IT', status: false },
  ];

  return (
    <div className="user-management-page">
      <div className="page-header-flex">
        <div className="header-info">
          <h1>User Management</h1>
          <p>Manage institutional access, roles, and administrative permissions.</p>
        </div>
        <button className="btn-primary">
          <UserPlus size={18} />
          <span>Invite New User</span>
        </button>
      </div>

      <div className="compliance-card card">
        <div className="compliance-icon-box">
          <Sparkles size={24} color="var(--primary)" />
        </div>
        <div className="compliance-content">
          <h4>AI Compliance Insights</h4>
          <p>Detected 4 pending departmental registrations. Faculty onboarding for Engineering is currently at 88%.</p>
        </div>
        <div className="compliance-stats">
          <div className="c-stat">
            <span className="label">ACTIVE STUDENTS</span>
            <span className="val">12,402</span>
          </div>
          <div className="c-stat">
            <span className="label">FACULTY RATIO</span>
            <span className="val">1:18</span>
          </div>
        </div>
      </div>

      <div className="filters-row card">
        <div className="filter-item search">
          <label>Search User</label>
          <div className="input-with-icon">
            <Search size={16} />
            <input type="text" placeholder="Name or email address" />
          </div>
        </div>
        <div className="filter-item">
          <label>Role</label>
          <div className="select-with-icon">
            <span>All Roles</span>
            <ChevronDown size={16} />
          </div>
        </div>
        <div className="filter-item">
          <label>College</label>
          <div className="select-with-icon">
            <span>All Colleges</span>
            <ChevronDown size={16} />
          </div>
        </div>
        <div className="filter-item">
          <label>Department</label>
          <div className="select-with-icon">
            <span>All Departments</span>
            <ChevronDown size={16} />
          </div>
        </div>
      </div>

      <div className="users-table-card card">
        <table className="users-table">
          <thead>
            <tr>
              <th>User Details</th>
              <th>Role</th>
              <th>College & Dept</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={i}>
                <td>
                  <div className="user-profile">
                    <div className="avatar-circle" style={{ background: i % 2 === 0 ? '#dbeafe' : (i === 1 ? '#dcfce7' : '#fef3c7') }}>
                      {user.id}
                    </div>
                    <div className="user-info">
                      <strong>{user.name}</strong>
                      <span>{user.email}</span>
                    </div>
                  </div>
                </td>
                <td>
                  <span className={`role-badge ${user.role.toLowerCase()}`}>{user.role}</span>
                </td>
                <td>
                  <div className="dept-info">
                    <strong>{user.dept}</strong>
                    <span>{user.subDept}</span>
                  </div>
                </td>
                <td>
                  <div className={`status-toggle ${user.status ? 'active' : ''}`}>
                    <div className="toggle-thumb"></div>
                    <span className="toggle-label">{user.status ? 'Active' : 'Inactive'}</span>
                  </div>
                </td>
                <td>
                  <div className="action-btns">
                    <button className="icon-btn-ghost"><Edit2 size={16} /></button>
                    <button className="icon-btn-ghost"><Trash2 size={16} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="table-footer">
          <p>Showing 1-20 of 842 users</p>
          <div className="pagination">
            <button className="page-btn"><ChevronLeft size={16} /></button>
            <button className="page-btn active">1</button>
            <button className="page-btn">2</button>
            <button className="page-btn">3</button>
            <span>...</span>
            <button className="page-btn">42</button>
            <button className="page-btn"><ChevronRight size={16} /></button>
          </div>
        </div>
      </div>

      <div className="ai-floating-bot">
        <Bot size={24} color="white" />
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .user-management-page { max-width: 1300px; margin: 0 auto; position: relative; }
        
        .page-header-flex { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 32px; }
        .page-header-flex h1 { font-size: 32px; font-weight: 700; margin-bottom: 8px; }
        .page-header-flex p { color: var(--text-muted); }

        .compliance-card { display: flex; align-items: center; gap: 24px; padding: 32px; margin-bottom: 32px; }
        .compliance-icon-box { width: 56px; height: 56px; background: #eff6ff; border-radius: 50%; display: flex; align-items: center; justify-content: center; }
        .compliance-content { flex: 1; }
        .compliance-content h4 { font-size: 16px; font-weight: 700; color: var(--primary); margin-bottom: 6px; }
        .compliance-content p { font-size: 14px; color: var(--text-muted); line-height: 1.5; max-width: 600px; }
        
        .compliance-stats { display: flex; gap: 24px; }
        .c-stat { border: 1px solid var(--border); padding: 12px 20px; border-radius: 8px; text-align: center; }
        .c-stat .label { display: block; font-size: 9px; font-weight: 800; color: var(--text-muted); margin-bottom: 4px; }
        .c-stat .val { font-size: 18px; font-weight: 800; color: var(--primary); }

        .filters-row { padding: 24px 32px; display: grid; grid-template-columns: 1.5fr 1fr 1fr 1fr; gap: 24px; margin-bottom: 32px; }
        .filter-item { display: flex; flex-direction: column; gap: 8px; }
        .filter-item label { font-size: 12px; font-weight: 700; color: var(--text-main); }
        
        .input-with-icon, .select-with-icon { border: 1px solid var(--border); border-radius: 8px; padding: 10px 16px; display: flex; align-items: center; gap: 12px; background: white; font-size: 14px; color: var(--text-muted); }
        .input-with-icon input { border: none; outline: none; flex: 1; }
        .select-with-icon { justify-content: space-between; cursor: pointer; }

        .users-table-card { padding: 0; overflow: hidden; }
        .users-table { width: 100%; border-collapse: collapse; }
        .users-table th { text-align: left; padding: 16px 32px; font-size: 11px; font-weight: 700; color: var(--text-muted); background: #f8fafc; border-bottom: 1px solid var(--border); text-transform: uppercase; letter-spacing: 0.5px; }
        .users-table td { padding: 20px 32px; border-bottom: 1px solid var(--border); }
        
        .user-profile { display: flex; align-items: center; gap: 16px; }
        .avatar-circle { width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 700; color: var(--primary); }
        .user-info { display: flex; flex-direction: column; }
        .user-info strong { font-size: 15px; }
        .user-info span { font-size: 12px; color: var(--text-muted); }

        .role-badge { padding: 4px 10px; border-radius: 9999px; font-size: 10px; font-weight: 800; border: 1px solid transparent; }
        .role-badge.lecturer { background: #f5f3ff; color: #7c3aed; border-color: #ddd6fe; }
        .role-badge.student { background: #eff6ff; color: #2563eb; border-color: #bfdbfe; }
        .role-badge.admin { background: #f1f5f9; color: #475569; border-color: #cbd5e1; }

        .dept-info strong { font-size: 14px; display: block; margin-bottom: 2px; }
        .dept-info span { font-size: 12px; color: var(--text-muted); }

        .status-toggle { display: flex; align-items: center; gap: 12px; }
        .toggle-thumb { width: 36px; height: 20px; background: #e2e8f0; border-radius: 10px; position: relative; cursor: pointer; transition: 0.3s; }
        .toggle-thumb::after { content: ''; position: absolute; left: 2px; top: 2px; width: 16px; height: 16px; background: white; border-radius: 50%; box-shadow: 0 1px 2px rgba(0,0,0,0.1); transition: 0.3s; }
        .status-toggle.active .toggle-thumb { background: var(--primary); }
        .status-toggle.active .toggle-thumb::after { transform: translateX(16px); }
        .toggle-label { font-size: 13px; font-weight: 600; color: var(--text-muted); }

        .action-btns { display: flex; gap: 12px; }
        .table-footer { padding: 24px 32px; display: flex; justify-content: space-between; align-items: center; }
        .table-footer p { font-size: 13px; color: var(--text-muted); }
        .pagination { display: flex; align-items: center; gap: 8px; }
        .page-btn { width: 32px; height: 32px; border-radius: 6px; border: 1px solid var(--border); display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 600; color: var(--text-muted); }
        .page-btn.active { background: var(--primary-light); color: var(--primary); border-color: var(--primary); }

        .ai-floating-bot { position: fixed; bottom: 40px; right: 40px; width: 60px; height: 60px; background: #7c2d12; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 10px 25px rgba(124, 45, 18, 0.3); cursor: pointer; }
      `}} />
    </div>
  );
};

export default UserManagement;
