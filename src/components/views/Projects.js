import React, { useState, useEffect } from "react";
import ProjectCard from "../ProjectCard";
import ReactMarkdown from 'react-markdown';

// Assets
import browserIcon from "../../assets/images/svgs/browser.svg";
import logicIcon from "../../assets/images/svgs/logic-gate.svg";
import boxIcon from "../../assets/images/svgs/box.svg";
import githubLogo from "../../assets/images/svgs/github.svg";

export default function Projects() {
    const [activeTab, setActiveTab] = useState("all");
    const [selectedProject, setSelectedProject] = useState(null);
    const [markdownContent, setMarkdownContent] = useState("");

    const personalProjects = [
        {
            id: "mi-browser",
            title: "mi-browser",
            description: "A hyper-lightweight, distraction-free mobile browser designed for the modern web, featuring unique 3D visual effects.",
            link: "https://github.com/jleesCY/mi-browser",
            image: browserIcon,
            tags: ["React Native", "Expo", "3D UI"],
            file: "mi-browser.md"
        },
        {
            id: "nandbox",
            title: "NANDbox",
            description: "A powerful web-based digital logic simulation tool that allows users to design, build, and test boolean circuits interactively.",
            link: "https://github.com/jleesCY/NANDbox",
            image: logicIcon,
            tags: ["React", "Digital Logic", "Simulation"],
            file: "nandbox.md"
        },
        {
            id: "letter-boxed",
            title: "Letter Boxed",
            description: "An algorithmic solver and clean interactive interface for the popular NYT word puzzle game, Letter Boxed.",
            link: "https://github.com/jleesCY/letter-boxed",
            image: boxIcon,
            tags: ["React", "Algorithms", "Game Dev"],
            file: "letter-boxed.md"
        },
    ];

    const professionalProjects = [
        {
            id: "professional-work",
            title: "Professional Work",
            description: "Details about my professional projects and contributions.",
            link: "#",
            tags: ["Enterprise", "Collaboration"],
            file: null
        }
    ];

    useEffect(() => {
        if (selectedProject && selectedProject.file) {
            import(`../../data/projects/${selectedProject.file}`)
                .then(res => fetch(res.default))
                .then(res => res.text())
                .then(text => setMarkdownContent(text))
                .catch(err => console.error("Error loading project markdown:", err));
        }
    }, [selectedProject]);

    const displayProjects = activeTab === "all" 
        ? [...professionalProjects, ...personalProjects]
        : activeTab === "professional" 
            ? professionalProjects 
            : personalProjects;

    if (selectedProject && selectedProject.file) {
        return (
            <div className="view-container fade-in">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1em' }}>
                    <button 
                        onClick={() => setSelectedProject(null)}
                        style={{
                            padding: '0.5em 1em',
                            borderRadius: '0.5em',
                            border: '1px solid var(--window-barrier)',
                            background: 'var(--window-bg)',
                            color: 'var(--text-primary)',
                            cursor: 'pointer',
                            fontFamily: 'var(--main-font)'
                        }}
                    >
                        &larr; Back to Projects
                    </button>
                    <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)' }} title="View Source on GitHub">
                        <img src={githubLogo} alt="GitHub" style={{ width: '24px', height: '24px', filter: 'brightness(var(--dock-icon-color-filter, 1))' }} />
                    </a>
                </div>
                <div className="markdown-container">
                    <ReactMarkdown>{markdownContent}</ReactMarkdown>
                </div>
            </div>
        );
    }

    return (
        <div className="view-container fade-in">
            <h2 className="view-title">Projects</h2>
            
            <div className="projects-tabs">
                <button 
                    className={`tab-button ${activeTab === 'all' ? 'active' : ''}`}
                    onClick={() => setActiveTab('all')}
                >
                    All
                </button>
                <button 
                    className={`tab-button ${activeTab === 'professional' ? 'active' : ''}`}
                    onClick={() => setActiveTab('professional')}
                >
                    Professional
                </button>
                <button 
                    className={`tab-button ${activeTab === 'personal' ? 'active' : ''}`}
                    onClick={() => setActiveTab('personal')}
                >
                    Personal
                </button>
            </div>

            <div className="projects-grid">
                {displayProjects.map((project, idx) => (
                    <ProjectCard
                        key={idx}
                        title={project.title}
                        description={project.description}
                        link={project.link}
                        image={project.image}
                        tags={project.tags}
                        onClick={() => project.file && setSelectedProject(project)}
                    />
                ))}
            </div>
        </div>
    );
}
