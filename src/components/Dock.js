import React from 'react';
import ThemeToggle from './ThemeToggle';

// Simple SVG Icons for the dock
const Icons = {
    home: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
    ),
    projects: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
        </svg>
    ),
    blog: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
    ),
    contact: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
    )
};

export default function Dock({ activePage, setActivePage }) {
    const items = [
        { id: 'home', label: 'Home', icon: Icons.home },
        { id: 'projects', label: 'Projects', icon: Icons.projects },
        { id: 'blog', label: 'Blog', icon: Icons.blog },
        { id: 'contact', label: 'Contact', icon: Icons.contact }
    ];

    return (
        <div className="dock-container">
            {items.map((item) => (
                <div 
                    key={item.id}
                    className={`dock-item ${activePage === item.id ? 'active' : ''}`}
                    onClick={() => setActivePage(item.id)}
                >
                    <div className="dock-icon">
                        {item.icon}
                    </div>
                    <span className="dock-label">{item.label}</span>
                    <div className="dock-indicator"></div>
                </div>
            ))}
            <div style={{ width: '1px', background: 'var(--dock-border)', margin: '0 0.5em' }}></div>
            <div className="dock-item" style={{ justifyContent: 'center' }}>
                <ThemeToggle />
            </div>
        </div>
    );
}
