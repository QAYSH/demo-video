import React, { useState } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import MyCourses from './pages/MyCourses';
import Assignments from './pages/Assignments';
import AIClassroom from './pages/AIClassroom';
import LecturerDashboard from './pages/LecturerDashboard';
import AILessonGenerator from './pages/AILessonGenerator';
import Gradebook from './pages/Gradebook';
import AttendanceManagement from './pages/AttendanceManagement';
import AdvancedAnalytics from './pages/AdvancedAnalytics';
import AdminDashboard from './pages/AdminDashboard';
import UserManagement from './pages/UserManagement';
import APIVault from './pages/APIVault';
import ContentModeration from './pages/ContentModeration';

const App: React.FC = () => {
  const [role, setRole] = useState<'student' | 'lecturer' | 'admin'>('student');
  const location = useLocation();

  const getPageTitle = () => {
    if (role !== 'student') return undefined;
    if (location.pathname.includes('assignments')) return 'Assignments';
    return undefined;
  };

  return (
    <div className="app-container">
      <Sidebar 
        role={role}
        setRole={setRole}
      />
      
      <main className="main-content">
        <Header title={getPageTitle()} />
        
        <div className="page-wrapper">
          <Routes>
            {/* Student Routes */}
            <Route path="/student/dashboard" element={<Dashboard />} />
            <Route path="/student/courses" element={<MyCourses />} />
            <Route path="/student/assignments" element={<Assignments />} />
            <Route path="/student/ai-classroom" element={<AIClassroom />} />
            <Route path="/student/grades" element={<div className="p-8">Grades (Not implemented)</div>} />

            {/* Lecturer Routes */}
            <Route path="/lecturer/dashboard" element={<LecturerDashboard />} />
            <Route path="/lecturer/courses" element={<AILessonGenerator />} />
            <Route path="/lecturer/attendance" element={<AttendanceManagement />} />
            <Route path="/lecturer/gradebook" element={<Gradebook />} />
            <Route path="/lecturer/analytics" element={<AdvancedAnalytics />} />

            {/* Admin Routes */}
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/users" element={<UserManagement />} />
            <Route path="/admin/api-vault" element={<APIVault />} />
            <Route path="/admin/moderation" element={<ContentModeration />} />

            {/* Default Redirects */}
            <Route path="/student" element={<Navigate to="/student/dashboard" replace />} />
            <Route path="/lecturer" element={<Navigate to="/lecturer/dashboard" replace />} />
            <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />
            <Route path="/" element={<Navigate to="/student/dashboard" replace />} />
          </Routes>
        </div>
      </main>

      <style dangerouslySetInnerHTML={{ __html: `
        .page-wrapper {
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </div>
  );
};

export default App;
