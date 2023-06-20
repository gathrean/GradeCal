import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import CoursesPage from './pages/CoursesPage';
import ProfilePage from './pages/ProfilePage';
import SettingsPage from './pages/SettingsPage';
import './App.css';
import { Helmet } from 'react-helmet';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <Router>
      <div className={`App ${isSidebarOpen ? 'sidebar-open' : ''}`}>
        <Helmet>
          <title>Grade Sage</title> {/* Set the default title */}
        </Helmet>
        <Navbar closeSidebar={closeSidebar} />
        <div className="content">
          <Routes>
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </div>
        <div className={`overlay ${isSidebarOpen ? 'open' : ''}`} onClick={closeSidebar}></div>
      </div>
    </Router>
  );
}

export default App;