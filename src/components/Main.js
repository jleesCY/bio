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
    const [windowState, setWindowState] = useState(isMobile ? "maximized" : "normal"); // normal, maximized, minimized, closed
    const [osMode, setOsMode] = useState("macos"); // macos, windows

    useEffect(() => {
        if (isMobile) {
            setWindowState("maximized");
        }
    }, []);

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
                        {!isMobile && (
                            <div id="window-top" style={{ justifyContent: osMode === 'windows' ? 'flex-end' : 'space-between' }}>
                                {osMode === 'macos' ? (
                                    <div className="macos-buttons">
                                        <div className="macos-btn macos-close" onClick={() => setWindowState('closed')} title="Close"></div>
                                        <div className="macos-btn macos-minimize" onClick={() => setWindowState('minimized')} title="Minimize"></div>
                                        <div className="macos-btn macos-maximize" onClick={() => setWindowState(prev => prev === 'maximized' ? 'normal' : 'maximized')} title="Maximize"></div>
                                    </div>
                                ) : (
                                    <div className="windows-buttons">
                                        <div className="windows-btn windows-minimize" onClick={() => setWindowState('minimized')} title="Minimize">
                                            <svg viewBox="0 0 10 10"><line x1="1" y1="5" x2="9" y2="5" stroke="currentColor" strokeWidth="1"/></svg>
                                        </div>
                                        <div className="windows-btn windows-maximize" onClick={() => setWindowState(prev => prev === 'maximized' ? 'normal' : 'maximized')} title="Maximize">
                                            {windowState === 'maximized' ? (
                                                <svg viewBox="0 0 10 10"><path d="M2,2 h5 v5 h-5 z M4,2 v-1 h5 v5 h-1" fill="none" stroke="currentColor" strokeWidth="1"/></svg>
                                            ) : (
                                                <svg viewBox="0 0 10 10"><rect x="1" y="1" width="8" height="8" fill="none" stroke="currentColor" strokeWidth="1"/></svg>
                                            )}
                                        </div>
                                        <div className="windows-btn windows-close" onClick={() => setWindowState('closed')} title="Close">
                                            <svg viewBox="0 0 10 10"><path d="M1,1 L9,9 M9,1 L1,9" stroke="currentColor" strokeWidth="1"/></svg>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                        <div id="window-body" style={{ height: isMobile ? '100%' : 'calc(100% - var(--window-top-height, 2.5em))' }}>
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
            <Dock windowState={windowState} setWindowState={setWindowState} osMode={osMode} setOsMode={setOsMode} />
        </div>
    );
}