import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { isMobile } from "react-device-detect";
import Dock from "./Dock";

// Views
import HomeView from "./views/Home";
import AboutView from "./views/About";
import ProjectsView from "./views/Projects";
import BlogView from "./views/Blog";
import ContactView from "./views/Contact";

export default function Main() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <MainContent />
        </BrowserRouter>
    );
}

function MainContent() {
    const [windowState, setWindowState] = useState("normal"); // normal, maximized, minimized, closed

    useEffect(() => {
        if (windowState !== 'normal') {
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
        }
    }, [windowState]);

    return (
        <div id="initial-view">
            <div id="filter">
                <div id="window-wrapper" className={`${windowState === 'maximized' ? 'wrapper-maximized' : ''} ${isMobile ? 'wrapper-mobile' : ''}`}>
                    <div id="window" className={`window-state-${windowState}`}>
                        <div id="window-top">
                            <div id="window-buttons">
                                <div id="window-close" onClick={() => setWindowState('closed')} style={{cursor: 'pointer'}} title="Close"></div>
                                <div id="window-minimize" onClick={() => setWindowState('minimized')} style={{cursor: 'pointer'}} title="Minimize"></div>
                                <div id="window-maximize" onClick={() => setWindowState(prev => prev === 'maximized' ? 'normal' : 'maximized')} style={{cursor: 'pointer'}} title="Maximize"></div>
                            </div>
                        </div>
                        <div id="window-body">
                            <Routes>
                                <Route path="/" element={<Navigate to="/home" replace />} />
                                <Route path="/home" element={<HomeView />} />
                                <Route path="/about" element={<AboutView />} />
                                <Route path="/projects" element={<ProjectsView />} />
                                <Route path="/projects/:projectId" element={<ProjectsView />} />
                                <Route path="/blog" element={<BlogView />} />
                                <Route path="/blog/:blogId" element={<BlogView />} />
                                <Route path="/contact" element={<ContactView />} />
                                <Route path="*" element={<Navigate to="/home" replace />} />
                            </Routes>
                        </div>
                    </div>
                </div>
            </div>
            <Dock windowState={windowState} setWindowState={setWindowState} />
        </div>
    );
}