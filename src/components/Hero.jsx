import useTypingEffect from '../hooks/useTypingEffect'

export default function Hero() {
    const typed = useTypingEffect([
        'Software Engineer',
        'Data Scientist',
        'ML Engineer',
        'Deep Learning Practitioner',
        'Problem Solver'
    ])

    return (
        <section className="hero" id="home">
            <div className="hero-particles" id="heroParticles"></div>
            <div className="hero-content">
                <div className="hero-badge">
                    <span className="badge-dot"></span>
                    Open to Opportunities
                </div>
                <h1 className="hero-name">Hasibul Islam <span className="name-accent">Nabid</span></h1>
                <div className="hero-roles">
                    <span className="role-typed">{typed}</span>
                    <span className="typed-cursor">|</span>
                </div>
                <p className="hero-tagline">
                    Software Engineer specializing in <strong>Data Science</strong>,{' '}
                    <strong>Machine Learning</strong>, and <strong>Deep Learning</strong> — solving
                    complex problems with data-driven solutions.
                </p>
                <div className="hero-cta">
                    <a href="#projects" className="btn btn-primary" onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}>
                        <span>View Projects</span>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </a>
                    <a href="#contact" className="btn btn-outline" onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}>
                        Get In Touch
                    </a>
                    <a href="https://www.linkedin.com/in/hasib-nabid/" target="_blank" rel="noopener noreferrer" className="btn btn-icon" aria-label="LinkedIn">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
                    </a>
                    <a href="https://github.com/Hasib-Nabid" target="_blank" rel="noopener noreferrer" className="btn btn-icon" aria-label="GitHub">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
                    </a>
                </div>
            </div>
            <div className="hero-terminal">
                <div className="terminal-header">
                    <div className="terminal-dots"><span /><span /><span /></div>
                    <span className="terminal-title">engineer.py</span>
                </div>
                <div className="terminal-body">
                    <pre><code>{`\n`}<span className="kw">class</span> <span className="cls">Engineer</span>:{`\n`}
                        {`    `}<span className="kw">def</span> <span className="fn">__init__</span>(<span className="arg">self</span>):{`\n`}
                        {`        `}<span className="arg">self</span>.name = <span className="str">"Hasibul Islam Nabid"</span>{`\n`}
                        {`        `}<span className="arg">self</span>.stack = [{`\n`}
                        {`            `}<span className="str">"Python"</span>, <span className="str">"C++"</span>,{`\n`}
                        {`            `}<span className="str">"React"</span>, <span className="str">"SQL"</span>{`\n`}
                        {`        `}]{`\n`}
                        {`        `}<span className="arg">self</span>.focus = [{`\n`}
                        {`            `}<span className="str">"Machine Learning"</span>,{`\n`}
                        {`            `}<span className="str">"Deep Learning"</span>,{`\n`}
                        {`            `}<span className="str">"Data Science"</span>{`\n`}
                        {`        `}]{`\n`}
                        {`        `}<span className="arg">self</span>.tools = [{`\n`}
                        {`            `}<span className="str">"PyTorch"</span>, <span className="str">"TensorFlow"</span>,{`\n`}
                        {`            `}<span className="str">"Scikit-learn"</span>, <span className="str">"Pandas"</span>{`\n`}
                        {`        `}]</code></pre>
                </div>
            </div>
        </section>
    )
}
