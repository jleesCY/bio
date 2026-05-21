import React, { useState } from "react";

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const subject = encodeURIComponent(`Contact Form: Message from ${name}`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
        window.location.href = `mailto:jleescy@gmail.com?subject=${subject}&body=${body}`;
    };

    return (
        <div className="view-container fade-in">
            <h2 className="view-title">Contact Me</h2>
            <div className="contact-form-container">
                <p style={{ marginBottom: '1.5em', color: 'var(--text-secondary)', lineHeight: '1.5' }}>Have a question or want to work together? Send me a message!</p>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="Name" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required 
                    />
                    <input 
                        type="email" 
                        placeholder="Email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required 
                    />
                    <textarea 
                        placeholder="Message" 
                        rows="5" 
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    ></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
    );
}
