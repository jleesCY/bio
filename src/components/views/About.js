import React from "react";
import { resumeData } from "../../data/resumeData";

// ── Inline sub-components ────────────────────────────────

function SectionTitle({ title, subtitle }) {
    return (
        <div style={{ margin: '3em 0 1.5em 0' }}>
            <h2 style={{ fontSize: '2em', fontWeight: '300', color: 'var(--text-primary)', margin: '0 0 0.2em 0', letterSpacing: '-0.02em' }}>{title}</h2>
            {subtitle && <p style={{ fontSize: '1.05em', color: 'var(--text-secondary)', margin: 0, fontWeight: '300' }}>{subtitle}</p>}
        </div>
    );
}

function ExperienceSection({ items }) {
    if (!items || items.length === 0) return null;
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {items.map((job, i) => (
                <div key={i} style={{ borderLeft: '3px solid var(--window-barrier)', paddingLeft: '1.5em', paddingBottom: i === items.length - 1 ? 0 : '3em', position: 'relative' }}>
                    <div style={{ position: 'absolute', left: '-8px', top: '0.4em', width: '13px', height: '13px', borderRadius: '50%', background: 'var(--window-bg)', border: '3px solid var(--text-muted)' }}></div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5em' }}>
                        <h3 style={{ fontSize: '1.4em', fontWeight: '300', color: 'var(--text-primary)', margin: '0' }}>{job.role}</h3>
                        <span style={{ fontSize: '0.9em', color: 'var(--text-muted)', fontWeight: '300', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{job.period}</span>
                    </div>
                    <p style={{ fontSize: '1.15em', color: 'var(--text-secondary)', margin: '0.2em 0 1em 0', fontWeight: '300' }}>{job.company}</p>
                    {job.highlights && job.highlights.length > 0 && (
                        <ul style={{ padding: '0 0 0 1.2em', margin: 0, color: 'var(--text-secondary)', fontSize: '1em', lineHeight: '1.6', fontWeight: '300' }}>
                            {job.highlights.map((h, j) => (
                                <li key={j} style={{ marginBottom: '0.5em' }}>{h}</li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}
        </div>
    );
}

function SkillsSection({ categories }) {
    if (!categories || categories.length === 0) return null;

    return (
        <div className="skills-bento-grid">
            {categories.map((cat, i) => (
                <div key={i} style={{ background: 'var(--card-bg)', border: '1px solid var(--window-barrier)', borderRadius: '1em', padding: '1.5em', display: 'flex', flexDirection: 'column' }}>
                    <h4 style={{ fontSize: '1.2em', fontWeight: '300', color: 'var(--text-primary)', margin: '0 0 0.3em 0' }}>{cat.category}</h4>
                    <p style={{ fontSize: '0.9em', color: 'var(--text-secondary)', margin: '0 0 1.5em 0', flexGrow: 1, fontWeight: '300' }}>{cat.description}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5em' }}>
                        {cat.items.map((skill, j) => (
                            <span key={j} style={{ padding: '0.3em 0.8em', borderRadius: '2em', fontSize: '0.85em', background: 'var(--window-bg)', color: 'var(--text-secondary)', border: '1px solid var(--window-barrier)', fontWeight: '300' }}>{skill}</span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

function EducationSection({ items }) {
    if (!items || items.length === 0) return null;
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {items.map((edu, i) => (
                <div key={i} style={{ borderLeft: '3px solid var(--window-barrier)', paddingLeft: '1.5em', paddingBottom: i === items.length - 1 ? 0 : '3em', position: 'relative' }}>
                    <div style={{ position: 'absolute', left: '-7px', top: '0.5em', width: '11px', height: '11px', borderRadius: '2px', background: 'var(--window-barrier)' }}></div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5em' }}>
                        <h3 style={{ fontSize: '1.4em', fontWeight: '300', color: 'var(--text-primary)', margin: '0' }}>{edu.degree}</h3>
                        <span style={{ fontSize: '0.85em', color: 'var(--text-primary)', background: 'var(--window-barrier)', padding: '0.3em 0.8em', borderRadius: '1em', fontWeight: '300', letterSpacing: '0.05em' }}>{edu.period}</span>
                    </div>
                    <p style={{ fontSize: '1.15em', color: 'var(--text-primary)', margin: '0.2em 0 1em 0', fontWeight: '300' }}>{edu.school}</p>
                    {edu.highlights && edu.highlights.length > 0 && (
                        <ul style={{ padding: '0 0 0 1.2em', margin: 0, color: 'var(--text-secondary)', fontSize: '1em', lineHeight: '1.6', fontWeight: '300' }}>
                            {edu.highlights.map((h, j) => (
                                <li key={j} style={{ marginBottom: '0.5em' }}>{h}</li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}
        </div>
    );
}

export default function About() {
    return (
        <div className="view-container fade-in">
            <div className="page-hero" style={{ background: 'linear-gradient(135deg, rgba(255,140,0,0.1), transparent)' }}>
                <h2 className="page-hero-title">About Me</h2>
                <p className="page-hero-subtitle">My journey, skills, and philosophy</p>
            </div>
            
            <blockquote className="about-philosophy stagger-2" style={{ margin: '3em auto', padding: '0', maxWidth: '800px', textAlign: 'center' }}>
                <span style={{ fontFamily: 'Georgia, serif', fontSize: '4em', color: 'var(--text-muted)', lineHeight: '0.1', verticalAlign: 'text-top', display: 'inline-block', marginBottom: '-0.3em' }}>&ldquo;</span>
                <p style={{ color: 'var(--text-primary)', lineHeight: '1.8', fontSize: '1.4em', fontWeight: '300', margin: '0 1em' }}>
                    {resumeData.philosophy}
                </p>
                <span style={{ fontFamily: 'Georgia, serif', fontSize: '4em', color: 'var(--text-muted)', lineHeight: '0.1', verticalAlign: 'text-bottom', display: 'inline-block', marginTop: '-0.1em' }}>&rdquo;</span>
            </blockquote>

            <div className="resume-sections" style={{ marginTop: '0', maxWidth: '800px', marginInline: 'auto' }}>
                <div className="stagger-3">
                    <SectionTitle title="Experience" subtitle={resumeData.experienceDescription} />
                    <ExperienceSection items={resumeData.experience} />
                </div>

                <div className="stagger-4">
                    <SectionTitle title="Skills" subtitle={resumeData.skillsDescription} />
                    <SkillsSection categories={resumeData.skills} />
                </div>

                <div className="stagger-5">
                    <SectionTitle title="Education" subtitle={resumeData.educationDescription} />
                    <EducationSection items={resumeData.education} />
                </div>

                {/* Footer Verse */}
                <div style={{ animation: '0.8s ease-out 0.6s 1 both slowFadeUp', textAlign: 'center', marginTop: '4em', paddingBottom: '4em' }}>
                    <p style={{ color: 'var(--text-muted)', fontStyle: 'italic', fontSize: '0.95em', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6', whiteSpace: 'pre-line' }}>
                        "Do you see a man skillful in his work?{"\n"}
                        He will stand before kings;{"\n"}
                        he will not stand before obscure men."
                    </p>
                    <a 
                        href="https://www.biblegateway.com/passage/?search=Proverbs%2022:29&version=ESV" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ display: 'block', marginTop: '0.8em', color: 'var(--text-muted)', fontSize: '0.85em', fontWeight: '600', letterSpacing: '0.05em', textDecoration: 'none' }}
                        onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
                        onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
                    >
                        Proverbs 22:29 (ESV)
                    </a>
                </div>
            </div>
        </div>
    );
}
