import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus, oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import ProjectCard from "../ProjectCard";
import { personalProjects, professionalProjects } from "../../data/projectsData";
import githubLogo from "../../assets/images/svgs/github.svg";

export default function Projects() {
    const { projectId } = useParams();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("all");
    const [isDark, setIsDark] = useState(document.body.classList.contains('dark-theme'));

    useEffect(() => {
        const observer = new MutationObserver(() => {
            setIsDark(document.body.classList.contains('dark-theme'));
        });
        observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
        return () => observer.disconnect();
    }, []);

    const allProjects = [...professionalProjects, ...personalProjects];
    const selectedProject = projectId ? allProjects.find(p => p.id === projectId) : null;

    const displayProjects = activeTab === "all" 
        ? [...professionalProjects, ...personalProjects]
        : activeTab === "professional" 
            ? professionalProjects 
            : personalProjects;

    const [markdownContent, setMarkdownContent] = useState("");

    useEffect(() => {
        if (selectedProject && selectedProject.file) {
            import(`../../data/projects/${selectedProject.file}`)
                .then(res => fetch(res.default))
                .then(res => res.text())
                .then(text => setMarkdownContent(text))
                .catch(err => console.error("Error loading markdown:", err));
        }
    }, [selectedProject]);

    // Project Details View
    if (selectedProject && selectedProject.file) {
        return (
            <div className="view-container fade-in">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3em' }}>
                    <button 
                        onClick={() => navigate('/projects')}
                        style={{
                            padding: '0.6em 1.2em',
                            borderRadius: '0.5em',
                            border: '1px solid var(--window-barrier)',
                            background: 'var(--window-bg)',
                            color: 'var(--text-primary)',
                            cursor: 'pointer',
                            fontFamily: 'var(--main-font)',
                            fontWeight: '600',
                            transition: 'background 0.2s ease'
                        }}
                        onMouseEnter={e => e.currentTarget.style.background = 'var(--card-bg)'}
                        onMouseLeave={e => e.currentTarget.style.background = 'var(--window-bg)'}
                    >
                        &larr; Back to Projects
                    </button>
                </div>

                <div className="project-details-container">
                    <div className="project-details-hero">
                        <img src={selectedProject.image} alt={selectedProject.title} className="project-details-cover" />
                        <div className="project-details-hero-content">
                            <h2 className="project-details-title">{selectedProject.title}</h2>
                        </div>
                    </div>

                    <p className="project-details-summary">
                        {selectedProject.description}
                    </p>

                    <div className="project-tech-row">
                        {selectedProject.tags.map(tech => (
                            <span key={tech} className="project-tech-pill">{tech}</span>
                        ))}
                    </div>

                    <div className="markdown-container" style={{ marginTop: '3em' }}>
                        <ReactMarkdown
                            components={{
                                code({node, inline, className, children, ...props}) {
                                    const match = /language-(\w+)/.exec(className || '')
                                    return !inline && match ? (
                                        <SyntaxHighlighter
                                            {...props}
                                            children={String(children).replace(/\n$/, '')}
                                            style={isDark ? vscDarkPlus : oneLight}
                                            language={match[1]}
                                            codeTagProps={{
                                                style: {
                                                    fontFamily: "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace"
                                                }
                                            }}
                                            customStyle={{
                                                backgroundColor: 'transparent',
                                                padding: 0,
                                                margin: 0,
                                                fontSize: '0.95em',
                                                borderRadius: '0.5em',
                                                border: 'none',
                                                fontFamily: "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace"
                                            }}
                                        />
                                    ) : (
                                        <code {...props} className={className}>
                                            {children}
                                        </code>
                                    )
                                }
                            }}
                        >
                            {markdownContent}
                        </ReactMarkdown>
                    </div>

                    <div className="project-links">
                        <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                            <img src={githubLogo} alt="GitHub" style={{ width: '20px', height: '20px', filter: 'var(--github-filter)' }} />
                            View Source
                        </a>
                    </div>
                </div>

                {/* Footer Verse */}
                <div style={{ animation: '0.8s ease-out 0.6s 1 both slowFadeUp', textAlign: 'center', marginTop: '4em', paddingBottom: '4em' }}>
                    <p style={{ color: 'var(--text-muted)', fontStyle: 'italic', fontSize: '0.95em', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6', whiteSpace: 'pre-line' }}>
                        "Commit your work to the Lord,{"\n"}
                        and your plans will be established."
                    </p>
                    <a 
                        href="https://www.biblegateway.com/passage/?search=Proverbs+16:3&version=ESV" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ display: 'block', marginTop: '0.8em', color: 'var(--text-muted)', fontSize: '0.85em', fontWeight: '600', letterSpacing: '0.05em', textDecoration: 'none' }}
                        onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
                        onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
                    >
                        Proverbs 16:3 (ESV)
                    </a>
                </div>
            </div>
        );
    }

    return (
        <div className="view-container fade-in">
            <div className="page-hero" style={{ background: 'linear-gradient(135deg, rgba(161,85,185,0.1), transparent)' }}>
                <h2 className="page-hero-title">Projects</h2>
                <p className="page-hero-subtitle">A select showcase of things I've built both personally and professionally.</p>
            </div>
            
            <div className="projects-tabs">
                <button 
                    className={`tab-button ${activeTab === 'all' ? 'active' : ''}`}
                    onClick={() => setActiveTab('all')}
                >
                    All
                </button>
                <button
                    className={`tab-button ${activeTab === 'personal' ? 'active' : ''}`}
                    onClick={() => setActiveTab('personal')}
                >
                    Personal
                </button>
                <button 
                    className={`tab-button ${activeTab === 'professional' ? 'active' : ''}`}
                    onClick={() => setActiveTab('professional')}
                >
                    Professional
                </button>
            </div>

            {displayProjects.length === 0 ? (
                <div style={{ textAlign: "center", marginTop: "4em", flexGrow: 1 }}>
                    <p style={{ color: "var(--text-secondary)", fontStyle: 'italic', fontSize: '1.2em' }}>Nothing to show here...</p>
                </div>
            ) : (
                <div className="projects-grid">
                    {displayProjects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            link={project.link}
                            image={project.image}
                            tags={project.tags}
                            onClick={() => navigate(`/projects/${project.id}`)}
                        />
                    ))}
                </div>
            )}

            {/* Footer Verse */}
            <div style={{ animation: '0.8s ease-out 0.6s 1 both slowFadeUp', textAlign: 'center', marginTop: '4em', paddingBottom: '4em' }}>
                <p style={{ color: 'var(--text-muted)', fontStyle: 'italic', fontSize: '0.95em', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6', whiteSpace: 'pre-line' }}>
                    "Commit your work to the Lord,{"\n"}
                    and your plans will be established."
                </p>
                <a 
                    href="https://www.biblegateway.com/passage/?search=Proverbs+16:3&version=ESV" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ display: 'block', marginTop: '0.8em', color: 'var(--text-muted)', fontSize: '0.85em', fontWeight: '600', letterSpacing: '0.05em', textDecoration: 'none' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
                >
                    Proverbs 16:3 (ESV)
                </a>
            </div>
        </div>
    );
}
