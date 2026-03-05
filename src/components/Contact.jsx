const items = [
    { href: 'mailto:nabid4424@gmail.com', label: 'Email', detail: 'nabid4424@gmail.com', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg> },
    { href: 'https://www.linkedin.com/in/hasib-nabid/', label: 'LinkedIn', detail: 'hasib-nabid', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>, external: true },
    { href: 'https://github.com/Hasib-Nabid', label: 'GitHub', detail: 'Hasib-Nabid', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>, external: true },
    { href: 'https://fb.com/hasibnabid', label: 'Facebook', detail: 'hasibnabid', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>, external: true },
    { href: 'https://instagram.com/hasib_nabid', label: 'Instagram', detail: 'hasib_nabid', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="5" /><circle cx="17.5" cy="6.5" r="1.5" /></svg>, external: true },
    { href: 'https://twitter.com/hasibnabid', label: 'Twitter / X', detail: 'hasibnabid', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4l11.733 16h4.267l-11.733-16zM4 20l6.768-6.768M13.232 10.768L20 4" /></svg>, external: true },
]

export default function Contact() {
    return (
        <section className="section" id="contact">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>
                <p className="section-subtitle">Have a project idea or want to collaborate? Let's connect.</p>
                <div className="contact-grid contact-grid-6">
                    {items.map(c => (
                        <a key={c.label} href={c.href} className="contact-card" {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
                            {c.icon}
                            <strong>{c.label}</strong>
                            <span>{c.detail}</span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}
