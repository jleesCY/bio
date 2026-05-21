import React from 'react';
import Hover from 'react-3d-hover';
import githubLogo from '../assets/images/svgs/github.svg';

export default function ProjectCard({ title, description, link, image, tags, onClick }) {
    const handleGithubClick = (e) => {
        e.stopPropagation();
        window.open(link, '_blank');
    };

    return (
        <Hover max={5} perspective={1000} speed={400} scale={1.03}>
            <div className="project-card" onClick={onClick}>
                {image && <img src={image} className="project-image" alt={title} />}
                <div className="project-info">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <h3>{title}</h3>
                        <div className="card-github-link" onClick={handleGithubClick} title="View Source on GitHub">
                            <img src={githubLogo} alt="GitHub" style={{ width: '20px', height: '20px', filter: 'brightness(var(--dock-icon-color-filter, 1))' }} />
                        </div>
                    </div>
                    <p>{description}</p>
                    {tags && (
                        <div className="project-tags">
                            {tags.map((tag, index) => (
                                <span key={index} className="project-tag">{tag}</span>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </Hover>
    );
}
