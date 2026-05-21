import React, { useState, useEffect } from "react";
import { isMobile } from "react-device-detect";
import Dock from "./Dock";

// Views
import HomeView from "./views/Home";
import ProjectsView from "./views/Projects";
import BlogView from "./views/Blog";
import ContactView from "./views/Contact";

export default function Main() {
    const [activePage, setActivePage] = useState("home");
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

    const renderActiveView = () => {
        switch (activePage) {
            case "projects":
                return <ProjectsView />;
            case "blog":
                return <BlogView />;
            case "contact":
                return <ContactView />;
            case "home":
            default:
                return <HomeView />;
        }
    };

    const handlePageChange = (page) => {
        setActivePage(page);
        if (windowState === "minimized" || windowState === "closed") {
            setWindowState("normal");
        }
    };

    return (
        <div id="initial-view">
            <div id="filter">
                <div id="window-wrapper" style={{ 
                    marginTop: windowState === 'maximized' ? "0" : (isMobile ? "0.5em" : "10em"),
                    marginLeft: windowState === 'maximized' ? "0" : (isMobile ? "0.5em" : "1.5em"),
                    marginRight: windowState === 'maximized' ? "0" : (isMobile ? "0.5em" : "1.5em"),
                    transition: "all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)"
                }}>
                    <div id="window" className={`window-state-${windowState}`}>
                        <div id="window-top">
                            <div id="window-buttons">
                                <div id="window-close" onClick={() => setWindowState('closed')} style={{cursor: 'pointer'}} title="Close"></div>
                                <div id="window-minimize" onClick={() => setWindowState('minimized')} style={{cursor: 'pointer'}} title="Minimize"></div>
                                <div id="window-maximize" onClick={() => setWindowState(prev => prev === 'maximized' ? 'normal' : 'maximized')} style={{cursor: 'pointer'}} title="Maximize"></div>
                            </div>
                        </div>
                        <div id="window-body">
                            {renderActiveView()}
                        </div>
                    </div>
                </div>
            </div>
            <Dock activePage={activePage} setActivePage={handlePageChange} />
        </div>
    );
}