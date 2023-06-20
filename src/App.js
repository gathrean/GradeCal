// Main app components
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// Components
import Navbar from './Navbar';

// Pages
import CoursesPage from './pages/CoursesPage';
import ProfilePage from './pages/ProfilePage';
import SettingsPage from './pages/SettingsPage';
import SplashPage from './pages/SplashPage';

// Styles
import './styles/App.css';
import './styles/Navbar.css';


function App() {
  // State for whether the sidebar is open or not
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to close the sidebar
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <Router>
      <div className={`App ${isSidebarOpen ? 'sidebar-open' : ''}`}>
        <Helmet>
          <title>GradeSage</title> 
          {/* Set the default title */}
        </Helmet>


        <Navbar closeSidebar={closeSidebar} />

        <div className="content">
          <Routes>
            <Route path="/" element={<SplashPage />} />
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