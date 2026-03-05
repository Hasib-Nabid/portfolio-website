const phases = [
    { num: '01', time: 'Now — 2 Years', title: 'Foundation Building', desc: 'Strengthen data science foundations with Python, statistics, machine learning algorithms, and deep learning architectures. Build a strong publication record.' },
    { num: '02', time: '3 — 5 Years', title: 'Research & Publication', desc: 'Pursue graduate research, publish papers in health informatics and bioinformatics, and contribute to open-source ML platforms for healthcare.' },
    { num: '03', time: '5+ Years', title: 'Research Leadership', desc: 'Lead research in AI-driven public health technology as a faculty member or principal investigator at a research institution.' },
]

export default function Career() {
    return (
        <section className="section section-alt" id="career">
            <div className="container">
                <h2 className="section-title">Research Roadmap</h2>
                <div className="roadmap">
                    {phases.map(p => (
                        <div className="roadmap-item" key={p.num}>
                            <div className="roadmap-marker"><span className="roadmap-number">{p.num}</span></div>
                            <div className="roadmap-content">
                                <span className="roadmap-timeline">{p.time}</span>
                                <h3>{p.title}</h3>
                                <p>{p.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
