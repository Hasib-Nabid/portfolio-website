import useCountUp from '../hooks/useCountUp'

function Metric({ value, label }) {
    const display = useCountUp(value)
    return (
        <div className="metric">
            <span className="metric-value">{display}</span>
            <span className="metric-label">{label}</span>
        </div>
    )
}

export default function About() {
    return (
        <section className="section" id="about">
            <div className="container">
                <h2 className="section-title">About</h2>
                <div className="about-layout">
                    <div className="about-text">
                        <p className="lead">Software Engineering undergraduate at <strong>Daffodil International University</strong> with a strong foundation in <strong>Data Science</strong>, <strong>Machine Learning</strong>, and <strong>Deep Learning</strong>.</p>
                        <p>I build end-to-end data pipelines, develop predictive models, and engineer software solutions that turn raw data into actionable insights. My technical expertise spans Python, C++, and modern ML frameworks including PyTorch, TensorFlow, and Scikit-learn.</p>
                        <p>With a strong competitive programming background including ICPC and NCPC participation, I bring analytical rigor and problem-solving efficiency to every project. Currently focused on deepening expertise in neural network architectures and computer vision systems.</p>
                    </div>
                    <div className="about-metrics">
                        <Metric value={8} label="Projects" />
                        <Metric value={10} label="Competitions" />
                    </div>
                </div>
            </div>
        </section>
    )
}
