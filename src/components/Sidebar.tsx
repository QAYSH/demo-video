import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  BookOpen, 
  FileText, 
  BrainCircuit, 
  BarChart3, 
  Video, 
  HelpCircle, 
  LogOut,
  GraduationCap,
  CheckCircle2,
  Users,
  Key,
  ShieldCheck
} from 'lucide-react';

interface SidebarProps {
  role: 'student' | 'lecturer' | 'admin';
  setRole: (role: 'student' | 'lecturer' | 'admin') => void;
}

const Sidebar: React.FC<SidebarProps> = ({ role, setRole }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const studentItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, path: '/student/dashboard' },
    { id: 'courses', label: 'My Courses', icon: BookOpen, path: '/student/courses' },
    { id: 'assignments', label: 'Assignments', icon: FileText, path: '/student/assignments' },
    { id: 'ai-classroom', label: 'AI Classroom', icon: BrainCircuit, path: '/student/ai-classroom' },
    { id: 'grades', label: 'Grades', icon: BarChart3, path: '/student/grades' },
  ];

  const lecturerItems = [
    { id: 'lecturer-dashboard', label: 'Dashboard', icon: LayoutDashboard, path: '/lecturer/dashboard' },
    { id: 'lecturer-courses', label: 'Courses', icon: BookOpen, path: '/lecturer/courses' },
    { id: 'lecturer-attendance', label: 'Attendance', icon: CheckCircle2, path: '/lecturer/attendance' },
    { id: 'lecturer-gradebook', label: 'Gradebook', icon: GraduationCap, path: '/lecturer/gradebook' },
    { id: 'lecturer-analytics', label: 'Analytics', icon: BarChart3, path: '/lecturer/analytics' },
  ];

  const adminItems = [
    { id: 'admin-dashboard', label: 'Dashboard', icon: LayoutDashboard, path: '/admin/dashboard' },
    { id: 'admin-users', label: 'Users', icon: Users, path: '/admin/users' },
    { id: 'admin-api-vault', label: 'API Vault', icon: Key, path: '/admin/api-vault' },
    { id: 'admin-moderation', label: 'Moderation', icon: ShieldCheck, path: '/admin/moderation' },
  ];

  const menuItems = role === 'student' ? studentItems : (role === 'lecturer' ? lecturerItems : adminItems);

  const handleRoleChange = (newRole: 'student' | 'lecturer' | 'admin') => {
    setRole(newRole);
    if (newRole === 'student') navigate('/student/dashboard');
    else if (newRole === 'lecturer') navigate('/lecturer/dashboard');
    else navigate('/admin/dashboard');
  };

  return (
    <aside className="sidebar">
      <div className="logo-container">
        <div className="logo-icon">
          <GraduationCap size={24} color="white" />
        </div>
        <div className="logo-text">
          <h2>{role === 'admin' ? 'Admin Portal' : (role === 'student' ? 'Academic Portal' : 'UniLMS')}</h2>
          <span>{role === 'admin' ? 'INSTITUTIONAL CONTROL' : (role === 'student' ? 'SPRING 2024 SEMESTER' : 'LECTURER PORTAL')}</span>
        </div>
      </div>

      <div className="role-switcher">
        <button 
          className={`role-btn ${role === 'student' ? 'active' : ''}`}
          onClick={() => handleRoleChange('student')}
        >
          Student
        </button>
        <button 
          className={`role-btn ${role === 'lecturer' ? 'active' : ''}`}
          onClick={() => handleRoleChange('lecturer')}
        >
          Lecturer
        </button>
        <button 
          className={`role-btn ${role === 'admin' ? 'active' : ''}`}
          onClick={() => handleRoleChange('admin')}
        >
          Admin
        </button>
      </div>

      <nav className="sidebar-nav">
        <ul>
          {menuItems.map((item) => (
            <li key={item.id}>
              <NavLink 
                to={item.path}
                className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
              >
                <item.icon size={20} />
                <span>{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="sidebar-footer">
        <button className="join-live-btn">
          {role === 'admin' ? <FileText size={18} /> : <Video size={18} />}
          <span>{role === 'admin' ? 'Generate Report' : 'Join Live Session'}</span>
        </button>

        <div className="footer-links">
          <button className="footer-link">
            <HelpCircle size={20} />
            <span>Help Center</span>
          </button>
          {role === 'admin' && (
            <button className="footer-link">
              <FileText size={20} />
              <span>Documentation</span>
            </button>
          )}
          <button className="footer-link">
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .sidebar {
          width: var(--sidebar-width);
          height: 100vh;
          background: var(--white);
          border-right: 1px solid var(--border);
          display: flex;
          flex-direction: column;
          position: fixed;
          left: 0;
          top: 0;
          z-index: 100;
        }

        .logo-container {
          padding: 24px;
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
        }

        .logo-icon {
          width: 40px;
          height: 40px;
          background: var(--primary);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .logo-text h2 {
          font-size: 16px;
          font-weight: 700;
          color: var(--primary);
          line-height: 1.2;
        }

        .logo-text span {
          font-size: 10px;
          font-weight: 600;
          color: var(--text-muted);
          letter-spacing: 0.5px;
        }

        .role-switcher {
          margin: 0 16px 20px 16px;
          background: #f1f5f9;
          padding: 4px;
          border-radius: var(--radius-sm);
          display: flex;
          gap: 4px;
        }

        .role-btn {
          flex: 1;
          padding: 8px;
          border-radius: 6px;
          font-size: 12px;
          font-weight: 600;
          color: var(--text-muted);
        }

        .role-btn.active {
          background: white;
          color: var(--primary);
          box-shadow: 0 2px 4px rgba(0,0,0,0.05);
        }

        .sidebar-nav {
          flex: 1;
          padding: 0 16px;
        }

        .nav-item {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          border-radius: var(--radius-md);
          color: var(--text-muted);
          font-weight: 500;
          margin-bottom: 4px;
        }

        .nav-item:hover {
          background: var(--primary-light);
          color: var(--primary);
        }

        .nav-item.active {
          background: var(--primary-light);
          color: var(--primary);
          position: relative;
        }

        .nav-item.active::after {
          content: '';
          position: absolute;
          right: -16px;
          top: 50%;
          transform: translateY(-50%);
          width: 4px;
          height: 32px;
          background: var(--primary);
          border-radius: 4px 0 0 4px;
        }

        .sidebar-footer {
          padding: 24px 16px;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .join-live-btn {
          width: 100%;
          background: var(--primary);
          color: white;
          padding: 14px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          font-weight: 600;
          box-shadow: 0 4px 12px rgba(26, 69, 153, 0.2);
        }

        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .footer-link {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 16px;
          color: var(--text-muted);
          font-weight: 500;
          font-size: 14px;
        }

        .footer-link:hover {
          color: var(--text-main);
        }
      `}} />
    </aside>
  );
};

export default Sidebar;
