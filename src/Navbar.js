import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImage from './images/elephant.png';

function Navbar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [activePage, setActivePage] = useState('');

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        if (window.innerWidth <= 768) {
            toggleSidebar();
        }
    };

    const location = useLocation();

    // Set the active page based on the current location
    React.useEffect(() => {
        setActivePage(location.pathname);
    }, [location]);

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
                        <Link
                            to="/courses"
                            onClick={() => {
                                closeSidebar();
                                setActivePage('/courses');
                            }}
                            className={activePage === '/courses' ? 'active' : ''}
                        >
                            COURSES
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/profile"
                            onClick={() => {
                                closeSidebar();
                                setActivePage('/profile');
                            }}
                            className={activePage === '/profile' ? 'active' : ''}
                        >
                            PROFILE
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/settings"
                            onClick={() => {
                                closeSidebar();
                                setActivePage('/settings');
                            }}
                            className={activePage === '/settings' ? 'active' : ''}
                        >
                            SETTINGS
                        </Link>
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