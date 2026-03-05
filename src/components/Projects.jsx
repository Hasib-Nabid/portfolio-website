const projects = [
    { badge: 'Machine Learning', title: 'Sentiment Analysis Engine', desc: 'NLP-based sentiment classifier trained on large-scale text data using TF-IDF vectorization and ensemble methods. Achieves high accuracy on multi-class sentiment prediction tasks.', tech: ['Python', 'Scikit-learn', 'NLTK', 'Pandas'], featured: true, link: null },
    { badge: 'Machine Learning', title: 'House Price Prediction Model', desc: 'Regression model for real estate price prediction using gradient boosting and feature engineering on structured housing datasets with cross-validation optimization.', tech: ['Python', 'XGBoost', 'Pandas', 'Matplotlib'], featured: true, link: null },
    { badge: 'Data Science', title: 'Exploratory Data Analysis — COVID-19 Insights', desc: 'Comprehensive EDA on global COVID-19 datasets with statistical analysis, trend visualization, and correlation studies to uncover patterns in pandemic data.', tech: ['Python', 'Pandas', 'Seaborn', 'Matplotlib'], featured: true, link: null },
    { badge: 'Full Stack', title: 'Anwesha — Community Skill Sharing Platform', desc: 'A full-stack community platform connecting learners and mentors for skill exchange, featuring user authentication, real-time messaging, and dynamic course listings.', tech: ['React', 'Next.js', 'Tailwind CSS', 'Node.js'], featured: true, link: 'https://anwesha-diu.vercel.app/' },
    { badge: 'Database & Analytics', title: 'Football Transfer Tracker — SQL Analytics', desc: 'Relational database system with complex analytical queries for tracking player transfers, valuations, and performance metrics.', tech: ['SQL', 'Data Modeling', 'Query Optimization'], link: null },
    { badge: 'IoT & Embedded', title: 'Smart Bin — IoT Waste Management', desc: 'Sensor-driven smart bin with automatic lid control and real-time fill-level monitoring for smart city applications.', tech: ['Robotics', 'IoT Sensors', 'Embedded Systems'], link: null },
    { badge: 'Java', title: 'To-Do List Manager', desc: 'Task management application built with object-oriented design, CRUD operations, priority sorting, and persistent data storage.', tech: ['Java', 'OOP', 'File I/O'], link: 'https://github.com/Hasib-Nabid/To-Do-List-Manager' },
    { badge: 'C', title: 'Restaurant Management System', desc: 'Console-based management application implementing data structures, file I/O operations, and modular design patterns.', tech: ['C', 'Data Structures', 'File I/O'], link: 'https://github.com/Hasib-Nabid/Restaurant-Management-System' },
]

export default function Projects() {
    return (
        <section className="section section-alt" id="projects">
            <div className="container">
                <h2 className="section-title">Projects</h2>
                <p className="section-subtitle">Software engineering, ML, and data science projects</p>
                <div className="projects-grid">
                    {projects.map(p => (
                        <div className={`project-card${p.featured ? ' featured' : ''}`} key={p.title}>
                            <div className="project-card-top">
                                <div className="project-badge">{p.badge}</div>
                                {p.link && (
                                    <a href={p.link} target="_blank" rel="noopener noreferrer" className="project-link" aria-label="View project">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                                    </a>
                                )}
                            </div>
                            <h3>{p.title}</h3>
                            <p>{p.desc}</p>
                            <div className="project-stack">{p.tech.map(t => <span key={t}>{t}</span>)}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
