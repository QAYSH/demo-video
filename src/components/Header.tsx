import React from 'react';
import { Search, Bell, ChevronDown } from 'lucide-react';

interface HeaderProps {
  title?: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="main-header">
      <div className="header-left">
        {title ? (
          <h1>{title}</h1>
        ) : (
          <div className="search-bar">
            <Search size={18} color="#94a3b8" />
            <input type="text" placeholder="Search courses, assignments, or help..." />
          </div>
        )}
      </div>

      <div className="header-right">
        <div className="notification-btn">
          <Bell size={20} />
          <span className="notif-badge"></span>
        </div>
        
        <div className="logo-placeholder">
          <img src="https://api.dicebear.com/7.x/shapes/svg?seed=LMS" alt="Org Logo" />
          <span className="org-name">_RK</span>
        </div>

        <div className="profile-section">
          <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" alt="Profile" className="profile-img" />
          <ChevronDown size={16} />
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .main-header {
          height: var(--header-height);
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 32px;
          position: fixed;
          top: 0;
          right: 0;
          left: var(--sidebar-width);
          z-index: 90;
        }

        .header-left h1 {
          font-size: 20px;
          font-weight: 700;
        }

        .search-bar {
          background: #f1f5f9;
          border-radius: 9999px;
          padding: 8px 20px;
          display: flex;
          align-items: center;
          gap: 10px;
          width: 320px;
        }

        .search-bar input {
          border: none;
          background: transparent;
          outline: none;
          width: 100%;
          font-size: 14px;
        }

        .header-right {
          display: flex;
          align-items: center;
          gap: 24px;
        }

        .notification-btn {
          position: relative;
          color: var(--text-muted);
          cursor: pointer;
        }

        .notif-badge {
          position: absolute;
          top: -2px;
          right: -2px;
          width: 8px;
          height: 8px;
          background: var(--danger);
          border-radius: 50%;
          border: 2px solid white;
        }

        .logo-placeholder {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .logo-placeholder img {
          width: 24px;
          height: 24px;
        }

        .org-name {
          font-weight: 700;
          font-size: 18px;
          color: #334155;
          letter-spacing: -0.5px;
        }

        .profile-section {
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
        }

        .profile-img {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 2px solid var(--primary-light);
        }
      `}} />
    </header>
  );
};

export default Header;
