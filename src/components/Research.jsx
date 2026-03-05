const areas = [
    {
        title: 'Machine Learning',
        desc: 'Supervised and unsupervised learning algorithms, model optimization, feature engineering, and predictive analytics for structured and unstructured data.',
        tags: ['Scikit-learn', 'XGBoost', 'Statistical Learning'],
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2a4 4 0 0 0-4 4c0 2 1 3 2 4l-5 8h14l-5-8c1-1 2-2 2-4a4 4 0 0 0-4-4z" /><circle cx="12" cy="6" r="1.5" /><path d="M8 18v4M16 18v4M12 18v4" />
            </svg>
        )
    },
    {
        title: 'Deep Learning',
        desc: 'Neural network architectures including CNNs, RNNs, and Transformers for image classification, natural language processing, and sequence modeling.',
        tags: ['PyTorch', 'TensorFlow', 'Neural Networks'],
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="6" width="4" height="12" rx="1" /><rect x="10" y="4" width="4" height="16" rx="1" /><rect x="18" y="8" width="4" height="8" rx="1" />
            </svg>
        )
    },
    {
        title: 'Health Informatics',
        desc: 'Leveraging AI and data analytics for disease prediction, medical imaging analysis, and building decision-support systems for public health.',
        tags: ['Medical Imaging', 'EHR Analysis', 'Epidemiology'],
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
        )
    },
    {
        title: 'Computer Vision',
        desc: 'Image recognition, object detection, and visual data processing using convolutional neural networks and modern vision architectures.',
        tags: ['OpenCV', 'CNN', 'Image Processing'],
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
            </svg>
        )
    },
]

export default function Research() {
    return (
        <section className="section section-alt" id="research">
            <div className="container">
                <h2 className="section-title">Research Interests</h2>
                <p className="section-subtitle">Exploring AI-driven approaches to solve complex engineering and healthcare challenges</p>
                <div className="research-grid">
                    {areas.map(a => (
                        <div className="research-card" key={a.title}>
                            <div className="research-icon">{a.icon}</div>
                            <h3>{a.title}</h3>
                            <p>{a.desc}</p>
                            <div className="research-tags">{a.tags.map(t => <span key={t}>{t}</span>)}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
