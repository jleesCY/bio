import React, { useState, useEffect } from "react";
import ReactMarkdown from 'react-markdown';
import { blogPosts } from "../../data/blog";

export default function Blog() {
    const [selectedPost, setSelectedPost] = useState(null);
    const [markdownContent, setMarkdownContent] = useState("");

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
                    onClick={() => setSelectedPost(null)}
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
            <h2 className="view-title">Blog</h2>
            {blogPosts.length === 0 ? (
                <div className="blog-content" style={{ textAlign: "center" }}>
                    <p style={{ color: "var(--text-secondary)", fontStyle: 'italic' }}>No posts yet. Check back soon for updates!</p>
                </div>
            ) : (
                <div className="blog-list" style={{ display: 'flex', flexDirection: 'column', gap: '1.5em' }}>
                    {blogPosts.map((post) => (
                        <div 
                            key={post.id} 
                            className="blog-card"
                            onClick={() => setSelectedPost(post)}
                            style={{
                                padding: '1.5em',
                                borderRadius: 'var(--window-curve)',
                                backgroundColor: 'var(--card-bg)',
                                border: '1px solid var(--window-barrier)',
                                cursor: 'pointer',
                                transition: 'all 0.2s ease',
                                boxShadow: '1px 1px 5px var(--card-shadow)'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <h3 style={{ margin: '0 0 0.5em 0', color: 'var(--text-primary)' }}>{post.title}</h3>
                            <p style={{ margin: '0 0 0.5em 0', fontSize: '0.85em', color: 'var(--text-muted)' }}>{post.date}</p>
                            <p style={{ margin: '0', color: 'var(--text-secondary)', lineHeight: '1.4' }}>{post.description}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
