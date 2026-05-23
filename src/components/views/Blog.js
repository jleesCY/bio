import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ReactMarkdown from 'react-markdown';
import { blogPosts } from "../../data/blog";

export default function Blog() {
    const { blogId } = useParams();
    const navigate = useNavigate();
    const [markdownContent, setMarkdownContent] = useState("");

    const selectedPost = blogId ? blogPosts.find(p => p.id === blogId) : null;

    useEffect(() => {
        if (selectedPost) {
            import(`../../data/blog/${selectedPost.file}`)
                .then(res => fetch(res.default))
                .then(res => res.text())
                .then(text => setMarkdownContent(text))
                .catch(err => console.error("Error loading markdown:", err));
        }
    }, [selectedPost]);

    if (selectedPost) {
        return (
            <div className="view-container fade-in">
                <button 
                    onClick={() => navigate('/blog')}
                    style={{
                        marginBottom: '1em',
                        padding: '0.5em 1em',
                        borderRadius: '0.5em',
                        border: '1px solid var(--window-barrier)',
                        background: 'var(--window-bg)',
                        color: 'var(--text-primary)',
                        cursor: 'pointer',
                        fontFamily: 'var(--main-font)'
                    }}
                >
                    &larr; Back to Posts
                </button>
                <div className="markdown-container">
                    <ReactMarkdown>{markdownContent}</ReactMarkdown>
                </div>
            </div>
        );
    }

    return (
        <div className="view-container fade-in">
            <div className="page-hero" style={{ background: 'linear-gradient(135deg, rgba(52,199,89,0.1), transparent)' }}>
                <h2 className="page-hero-title">My Notes</h2>
                <p className="page-hero-subtitle">Thoughts, experiments, and technical deep-dives.</p>
            </div>
            {blogPosts.length === 0 ? (
                <div className="blog-content" style={{ textAlign: "center" }}>
                    <p style={{ color: "var(--text-secondary)", fontStyle: 'italic' }}>No posts yet. Check back soon for updates!</p>
                </div>
            ) : (
                <div className="blog-master-card" style={{ background: 'var(--card-bg)', borderRadius: 'var(--window-curve)', border: '1px solid var(--window-barrier)', boxShadow: '0 4px 20px var(--card-shadow)', overflow: 'hidden', animation: '0.4s ease-out 0s 1 both slowFadeUp' }}>
                    <div className="editorial-list">
                        {[...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date)).map((post) => (
                            <div 
                                key={post.id} 
                                className="blog-card"
                                onClick={() => navigate(`/blog/${post.id}`)}
                            >
                                <span style={{ fontSize: '0.9em', color: 'var(--text-muted)', marginBottom: '0.5em', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{post.date}</span>
                                <h3 style={{ margin: '0 0 0.2em 0', color: 'var(--text-primary)', fontSize: '1.8em', fontWeight: '700' }}>{post.title}</h3>
                                <p style={{ margin: '0', color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '1.1em', maxWidth: '800px' }}>{post.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
