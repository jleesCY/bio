import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import ThemeToggle from './ThemeToggle';

// Sleek, monochrome line-art SVGs that inherit text color
const Icons = {
    home: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
    ),
    about: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
        </svg>
    ),
    projects: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
        </svg>
    ),
    blog: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
    ),
    contact: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
    )
};

export default function Dock({ windowState, setWindowState, osMode, setOsMode }) {
    const navigate = useNavigate();
    const location = useLocation();

    const items = [
        { id: 'home', label: 'Home', icon: Icons.home },
        { id: 'about', label: 'About', icon: Icons.about },
        { id: 'projects', label: 'Projects', icon: Icons.projects },
        { id: 'blog', label: 'Notes', icon: Icons.blog },
        { id: 'contact', label: 'Contact', icon: Icons.contact }
    ];

    const toggleOs = () => setOsMode(prev => prev === 'macos' ? 'windows' : 'macos');

    return (
        <div className="dock-container">
            {!isMobile && (
                <>
                    <div className="dock-toggles">
                        <div className="static-dock-item" onClick={toggleOs} title={`Switch to ${osMode === 'macos' ? 'Windows' : 'macOS'} mode`}>
                            <div className="dock-icon">
                                {osMode === 'macos' ? (
                                    <svg width="28" height="28" viewBox="0 0 384 512" fill="currentColor" stroke="none">
                                        <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                                    </svg>
                                ) : (
                                    <svg width="28" height="28" viewBox="0 0 448 512" fill="currentColor" stroke="none">
                                        <path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"/>
                                    </svg>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="dock-separator"></div>
                </>
            )}
            
            {items.map((item) => {
                const isActive = location.pathname.startsWith(`/${item.id}`) && windowState !== 'closed';
                return (
                    <div 
                        key={item.id}
                        className={`dock-item ${isActive ? 'active' : ''}`}
                        onClick={() => {
                            navigate(`/${item.id}`);
                            if (windowState === 'closed' || windowState === 'minimized') {
                                setWindowState('normal');
                            }
                        }}
                    >
                        <div className="dock-icon">
                            {item.icon}
                        </div>
                        <span className="dock-label">{item.label}</span>
                        <div className="dock-indicator"></div>
                    </div>
                );
            })}
            <div className="dock-separator"></div>
            <div className="dock-toggles">
                <ThemeToggle />
            </div>
        </div>
    );
}
