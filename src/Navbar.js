import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    
    return (
        <>
            <nav className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                <ul>
                    <li>
                        <Link to="/courses">Courses</Link>
                    </li>
                    <li>
                        <Link to="/profile">Profile</Link>
                    </li>
                    <li>
                        <Link to="/settings">Settings</Link>
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