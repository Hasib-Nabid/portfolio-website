const groups = [
    {
        title: 'Programming Languages',
        icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>,
        pills: [
            { label: 'Python', variant: 'primary' }, { label: 'C++', variant: 'primary' },
            { label: 'C', variant: 'primary' }, { label: 'Java', variant: 'primary' },
            { label: 'JavaScript', variant: 'primary' }, { label: 'R', variant: 'primary' },
            { label: 'SQL', variant: 'primary' },
        ]
    },
    {
        title: 'ML / DL Frameworks',
        icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /></svg>,
        pills: [
            { label: 'TensorFlow', variant: 'accent' }, { label: 'PyTorch', variant: 'accent' },
            { label: 'Scikit-learn', variant: 'accent' }, { label: 'Keras', variant: 'accent' },
            { label: 'Pandas', variant: 'accent' }, { label: 'NumPy', variant: 'accent' },
        ]
    },
    {
        title: 'Data & Visualization',
        icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /></svg>,
        pills: [
            { label: 'Matplotlib', variant: 'secondary' }, { label: 'Seaborn', variant: 'secondary' },
            { label: 'Jupyter', variant: 'secondary' }, { label: 'SQL', variant: 'secondary' },
            { label: 'Excel', variant: 'secondary' },
        ]
    },
    {
        title: 'Development & Tools',
        icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>,
        pills: [
            { label: 'Git' }, { label: 'Linux' }, { label: 'HTML/CSS' },
            { label: 'React' }, { label: 'Next.js' }, { label: 'PHP' }, { label: 'LaTeX' },
        ]
    },
]

export default function Skills() {
    return (
        <section className="section" id="skills">
            <div className="container">
                <h2 className="section-title">Technical Skills</h2>
                <div className="skills-layout">
                    {groups.map(g => (
                        <div className="skill-group" key={g.title}>
                            <h3 className="skill-group-title">{g.icon}{g.title}</h3>
                            <div className="skill-pills">
                                {g.pills.map(p => (
                                    <span key={p.label} className={`pill${p.variant ? ` pill-${p.variant}` : ''}`}>{p.label}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
