import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImage from './images/elephant.png';

function Navbar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <nav className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                <div className="logo">
                    <img className="logoImage" src={logoImage} alt="Logo" />
                    Grade<br></br>
                    Sage
                </div>
                <br></br>
                <ul>
                    <li>
                        <Link to="/courses">COURSES</Link>
                    </li>
                    <li>
                        <Link to="/profile">PROFILE</Link>
                    </li>
                    <li>
                        <Link to="/settings">SETTINGS</Link>
                    </li>
                </ul>
            </nav>
            <div className={`hamburger ${isSidebarOpen ? 'open' : ''}`} onClick={toggleSidebar}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </>
    );
}

export default Navbar;
