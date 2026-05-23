import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus, oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { blogPosts } from "../../data/blog";

export default function Blog() {
    const { blogId } = useParams();
    const navigate = useNavigate();
    const [markdownContent, setMarkdownContent] = useState("");
    const [isDark, setIsDark] = useState(document.body.classList.contains('dark-theme'));

    useEffect(() => {
        const observer = new MutationObserver(() => {
            setIsDark(document.body.classList.contains('dark-theme'));
        });
        observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
        return () => observer.disconnect();
    }, []);

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
                <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '1em' }}>
                    <button 
                        onClick={() => navigate('/blog')}
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
                        &larr; Back to Posts
                    </button>
                </div>
                <div className="markdown-container">
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
                <div className="blog-content" style={{ textAlign: "center", marginTop: "4em" }}>
                    <p style={{ color: "var(--text-secondary)", fontStyle: 'italic', fontSize: '1.2em' }}>Nothing to show here...</p>
                </div>
            ) : (
                <div className="editorial-list" style={{ marginTop: '2em', animation: '0.4s ease-out 0s 1 both slowFadeUp' }}>
                    {[...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date)).map((post) => (
                        <div 
                            key={post.id} 
                            className="editorial-item"
                            onClick={() => navigate(`/blog/${post.id}`)}
                        >
                            <span className="editorial-date">{post.date}</span>
                            <h3 className="editorial-title">{post.title}</h3>
                            <p className="editorial-desc">{post.description}</p>
                        </div>
                    ))}
                </div>
            )}

            {/* Footer Verse */}
            <div style={{ animation: '0.8s ease-out 0.6s 1 both slowFadeUp', textAlign: 'center', marginTop: '4em', paddingBottom: '4em' }}>
                <p style={{ color: 'var(--text-muted)', fontStyle: 'italic', fontSize: '0.95em', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
                    "An intelligent heart acquires knowledge,<br />
                    and the ear of the wise seeks knowledge."
                </p>
                <a 
                    href="https://www.biblegateway.com/passage/?search=Proverbs+18:15&version=ESV" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ display: 'block', marginTop: '0.8em', color: 'var(--text-muted)', fontSize: '0.85em', fontWeight: '600', letterSpacing: '0.05em', textDecoration: 'none' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
                >
                    Proverbs 18:15 (ESV)
                </a>
            </div>

        </div>
    );
}
