import React from "react";
import { useNavigate } from "react-router-dom";
import mainPortrait from "../../assets/images/main-portrait.jpeg";
import Social from "../Social";
import instagramLogo from "../../assets/images/svgs/instagram.svg";
import githubLogo from "../../assets/images/svgs/github.svg";
import linkedinLogo from "../../assets/images/svgs/linkedin.svg";

import { blogPosts } from "../../data/blog";
import { personalProjects, professionalProjects } from "../../data/projectsData";
import { toolkitSkills, professionalConcepts, personalConcepts, professionalDescription, personalDescription } from "../../data/homeData";

export default function Home() {
    const navigate = useNavigate();
    const allProjectsCount = personalProjects.length + professionalProjects.length;

    return (
        <div className="view-container fade-in">
            {/* ─── Hero Section (Redesigned) ─── */}
            <div className="home-hero-grid">
                <div className="hero-content">
                    <h1 className="hero-greeting">Joshua Lees</h1>
                    <h2 className="hero-subtitle" style={{ fontWeight: 'lighter', fontSize: '1.4em', marginBottom: '1.2em', lineHeight: '1.8' }}>
                        <span className="highlight-text">Modeling and Simulation Engineer</span> by day.<br/>
                        <span className="highlight-text">Web Developer</span> by passion.
                    </h2>
                    <p className="hero-description" style={{ fontSize: '1.1em', lineHeight: '1.7', color: 'var(--text-secondary)', fontWeight: '300' }}>
                        Modeling & Simulation Engineer specializing in advanced DoD <span className="highlight-text">simulation frameworks</span>. I work with complex <span className="highlight-text">LVC</span> environments and <span className="highlight-text">SIL</span> dataflows to extract and translate critical data into <span className="highlight-text">high-performance</span> databases and intuitive, live analysis UIs. Off-duty, I bring that same passion for hardware-accelerated design to <span className="highlight-text">creative web development</span>.
                    </p>
                    <div id="socials" className="hero-socials">
                        <Social image={githubLogo} url={"https://github.com/jleesCY"} size={2.5}></Social>
                        <Social image={linkedinLogo} url={"https://www.linkedin.com/in/joshuamlees/"} size={3.15}></Social>
                        <Social image={instagramLogo} url={"https://www.instagram.com/jleescy/"} size={2.8}></Social>
                    </div>
                </div>
                <div className="hero-image-wrapper">
                    <img src={mainPortrait} alt="Joshua Lees" className="hero-portrait" />
                    {/* <div className="hero-status-badge">
                        <div className="status-dot"></div>
                        <span>Building Things</span>
                    </div> */}
                </div>
            </div>

            {/* ─── Un-Carded Content (Redesigned for Contrast) ─── */}
            <div className="home-widgets" style={{ display: 'flex', flexDirection: 'column', gap: '5em', marginTop: '3em' }}>
              {/* My Toolkit - Icon Marquee (Full Bleed) */}
                <div className="full-bleed" style={{ animation: '0.4s ease-out 0.1s 1 both slowFadeUp', marginTop: '1em', marginBottom: '1em' }}>
                    <div className="marquee-container">
                        <div className="marquee-content">
                            {/* First set of icons */}
                            {toolkitSkills.map((skill, i) => (
                                <div key={`skill-1-${i}`} className="toolkit-icon-item" title={skill.name}>
                                    <img src={skill.icon} alt={skill.name} />
                                </div>
                            ))}
                            {/* Duplicated set for infinite loop illusion */}
                            {toolkitSkills.map((skill, i) => (
                                <div key={`skill-2-${i}`} className="toolkit-icon-item" title={skill.name}>
                                    <img src={skill.icon} alt={skill.name} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Active Concepts Section */}
                <div style={{ animation: '0.4s ease-out 0.2s 1 both slowFadeUp', margin: '0 auto', maxWidth: '1000px', width: '100%', paddingTop: '2em', paddingBottom: '2em' }}>
                    <h3 style={{ fontSize: '1em', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--text-muted)', marginBottom: '2.5em', textAlign: 'center' }}>Active Focus Highlights</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4em' }}>
                        
                        {/* Professional Column */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5em' }}>
                            <h4 style={{ textAlign: 'center', color: 'var(--text-secondary)', margin: '0', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '1em' }}>Professional Focus</h4>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8em', justifyContent: 'center' }}>
                                {professionalConcepts.map(concept => (
                                    <span key={concept} style={{
                                        padding: '0.6em 1.2em',
                                        borderRadius: '2em',
                                        backgroundColor: 'var(--window-bg)',
                                        border: '1px solid var(--window-barrier)',
                                        fontSize: '0.95em',
                                        color: 'var(--text-primary)',
                                        fontWeight: '500',
                                        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                                        cursor: 'default',
                                        boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
                                    }} onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)' }}
                                       onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)' }}>
                                        {concept}
                                    </span>
                                ))}
                            </div>
                            <p style={{ textAlign: 'center', color: 'var(--text-secondary)', fontSize: '1.05em', lineHeight: '1.7', fontWeight: '300', margin: '0' }}>
                                {professionalDescription}
                            </p>
                        </div>

                        {/* Personal Column */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5em' }}>
                            <h4 style={{ textAlign: 'center', color: 'var(--text-secondary)', margin: '0', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '1em' }}>Personal Focus</h4>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8em', justifyContent: 'center' }}>
                                {personalConcepts.map(concept => (
                                    <span key={concept} style={{
                                        padding: '0.6em 1.2em',
                                        borderRadius: '2em',
                                        backgroundColor: 'var(--window-bg)',
                                        border: '1px solid var(--window-barrier)',
                                        fontSize: '0.95em',
                                        color: 'var(--text-primary)',
                                        fontWeight: '500',
                                        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                                        cursor: 'default',
                                        boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
                                    }} onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)' }}
                                       onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)' }}>
                                        {concept}
                                    </span>
                                ))}
                            </div>
                            <p style={{ textAlign: 'center', color: 'var(--text-secondary)', fontSize: '1.05em', lineHeight: '1.7', fontWeight: '300', margin: '0' }}>
                                {personalDescription}
                            </p>
                        </div>

                    </div>
                </div>
                
                {/* Explore Directory Section */}
                <div style={{ animation: '0.6s ease-out 0.3s 1 both slowFadeUp', marginTop: '2em', paddingBottom: '2em' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2em', maxWidth: '800px', margin: '0 auto' }}>
                        <div 
                            className="widget-card" 
                            onClick={() => navigate('/projects')} 
                            style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
                        >
                            <div style={{ background: 'var(--window-bg)', border: '1px solid var(--window-barrier)', padding: '1.2em', borderRadius: '50%', marginBottom: '1.5em', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--text-primary)' }}>
                                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                                </svg>
                            </div>
                            <h3 style={{ margin: '0 0 0.5em 0', color: 'var(--text-primary)', fontSize: '1.4em' }}>Projects</h3>
                            <p style={{ margin: '0 0 1.5em 0', color: 'var(--text-secondary)', fontSize: '1em', lineHeight: '1.5' }}>Explore my portfolio of web apps, tools, and technical experiments.</p>
                            <span style={{ color: 'var(--text-primary)', fontWeight: '600', fontSize: '0.95em', padding: '0.5em 1em', borderRadius: '2em', background: 'var(--window-bg)', border: '1px solid var(--window-barrier)' }}>View {allProjectsCount} Projects &rarr;</span>
                        </div>
                        
                        <div 
                            className="widget-card" 
                            onClick={() => navigate('/blog')} 
                            style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
                        >
                            <div style={{ background: 'var(--window-bg)', border: '1px solid var(--window-barrier)', padding: '1.2em', borderRadius: '50%', marginBottom: '1.5em', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--text-primary)' }}>
                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                    <polyline points="14 2 14 8 20 8"></polyline>
                                    <line x1="16" y1="13" x2="8" y2="13"></line>
                                    <line x1="16" y1="17" x2="8" y2="17"></line>
                                    <polyline points="10 9 9 9 8 9"></polyline>
                                </svg>
                            </div>
                            <h3 style={{ margin: '0 0 0.5em 0', color: 'var(--text-primary)', fontSize: '1.4em' }}>Notes & Thoughts</h3>
                            <p style={{ margin: '0 0 1.5em 0', color: 'var(--text-secondary)', fontSize: '1em', lineHeight: '1.5' }}>Read my latest articles, technical deep-dives, and design thoughts.</p>
                            <span style={{ color: 'var(--text-primary)', fontWeight: '600', fontSize: '0.95em', padding: '0.5em 1em', borderRadius: '2em', background: 'var(--window-bg)', border: '1px solid var(--window-barrier)' }}>Read {blogPosts.length} Notes &rarr;</span>
                        </div>
                    </div>
                </div>

                {/* Footer Verse */}
                <div style={{ animation: '0.8s ease-out 0.6s 1 both slowFadeUp', textAlign: 'center', marginTop: '2em', paddingBottom: '4em' }}>
                    <p style={{ color: 'var(--text-muted)', fontStyle: 'italic', fontSize: '0.95em', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
                        "Whatever you do, work heartily, as for the Lord and not for men, knowing that from the Lord you will receive the inheritance as your reward. You are serving the Lord Christ."
                    </p>
                    <a 
                        href="https://www.biblegateway.com/passage/?search=Colossians%203:23-24&version=ESV" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ display: 'block', marginTop: '0.8em', color: 'var(--text-muted)', fontSize: '0.85em', fontWeight: '600', letterSpacing: '0.05em', textDecoration: 'none' }}
                        onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
                        onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
                    >
                        Colossians 3:23-24 (ESV)
                    </a>
                </div>

            </div>
        </div>
    );
}
