import logo from './logo.svg';
import './App.css';

import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import your page components
import CoursesPage from './pages/CoursesPage';
import ProfilePage from './pages/ProfilePage';
import SettingsPage from './pages/SettingsPage';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar />

          <Routes>
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;