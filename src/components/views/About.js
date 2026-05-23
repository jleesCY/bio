import React from "react";
import { resumeData } from "../../data/resumeData";

// ── Inline sub-components ────────────────────────────────

function SectionDivider({ label }) {
    return (
        <div className="section-divider">
            <div className="divider-line" />
            <span className="divider-label">{label}</span>
            <div className="divider-line" />
        </div>
    );
}

function ExperienceSection({ items }) {
    if (!items || items.length === 0) return null;
    return (
        <div className="experience-timeline">
            {items.map((job, i) => (
                <div className="timeline-item" key={i}>
                    <div className="timeline-header">
                        <h3 className="timeline-role">{job.role}</h3>
                        <span className="timeline-period">{job.period}</span>
                    </div>
                    <p className="timeline-company">{job.company}</p>
                    {job.highlights && job.highlights.length > 0 && (
                        <ul className="timeline-highlights">
                            {job.highlights.map((h, j) => (
                                <li key={j}>{h}</li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}
        </div>
    );
}

function SkillsSection({ categories }) {
    if (!categories) return null;
    const entries = Object.entries(categories);
    if (entries.length === 0) return null;
    return (
        <div className="skills-grid">
            {entries.map(([category, skills], i) => (
                <div className="skill-category" key={i}>
                    <h4 className="skill-category-title">{category}</h4>
                    <div className="skill-badges">
                        {skills.map((skill, j) => (
                            <span className="skill-badge" key={j}>{skill}</span>
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
        <div className="education-list">
            {items.map((edu, i) => (
                <div className="education-card" key={i}>
                    <div className="education-header">
                        <h3 className="education-degree">{edu.degree}</h3>
                        <span className="education-period">{edu.period}</span>
                    </div>
                    <p className="education-school">{edu.school}</p>
                    {edu.highlights && edu.highlights.length > 0 && (
                        <ul className="education-highlights">
                            {edu.highlights.map((h, j) => (
                                <li key={j}>{h}</li>
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
            
            <blockquote className="about-philosophy stagger-2" style={{ margin: '3em auto', padding: '0 2em', borderLeft: '4px solid var(--text-primary)', maxWidth: '800px' }}>
                <p style={{ color: 'var(--text-primary)', lineHeight: '1.8', fontSize: '1.4em', fontStyle: 'italic', fontWeight: '300', margin: 0 }}>
                    "I believe that the best software is built at the intersection of deep technical rigor and uncompromising aesthetic design. Whether I'm building a complex data simulation pipeline or a lightweight mobile browser, my goal is always to create tools that feel intuitive, performant, and delightful to use. Good engineering should never come at the cost of the user experience."
                </p>
            </blockquote>

            <div className="resume-sections" style={{ marginTop: '0' }}>
                <div className="stagger-3">
                    <SectionDivider label="Experience" />
                    <ExperienceSection items={resumeData.experience} />
                </div>

                <div className="stagger-4">
                    <SectionDivider label="Skills" />
                    <SkillsSection categories={resumeData.skills} />
                </div>

                <div className="stagger-5">
                    <SectionDivider label="Education" />
                    <EducationSection items={resumeData.education} />
                </div>
            </div>
        </div>
    );
}
