const achievements = [
    { rank: '🏅', title: 'ICPC Asia Dhaka Regional', sub: '2023, 2024 · Participant' },
    { rank: '🏅', title: 'NCPC — National Collegiate Programming Contest', sub: '2023 · Participant' },
    { rank: '3rd', title: 'ITM SUMMIT Case Competition', sub: '2023' },
    { rank: '3rd', title: 'DIU Unlock the Algorithm — Preliminary', sub: 'Fall 2024' },
    { rank: '6th', title: 'DIU Unlock the Algorithm — Main Round', sub: 'Fall 2024' },
    { rank: '8th', title: 'DIU CODETRAP', sub: 'Spring 2023' },
    { rank: '★', title: 'Codeforces', sub: 'Pupil Rating' },
    { rank: '★★', title: 'CodeChef', sub: '2-Star Rating' },
]

export default function Education() {
    return (
        <section className="section" id="education">
            <div className="container">
                <h2 className="section-title">Education & Achievements</h2>
                <div className="edu-achiev-layout">
                    <div className="edu-column">
                        <h3 className="column-title">Academic Background</h3>
                        <div className="edu-card current">
                            <div className="edu-badge">Current</div>
                            <h4>B.Sc. in Software Engineering</h4>
                            <p className="edu-institution">Daffodil International University</p>
                            <p className="edu-detail">2023–2026</p>
                            <div className="edu-gpa"><span>3.95</span> CGPA</div>
                        </div>
                        <div className="edu-card">
                            <h4>Higher Secondary Certificate</h4>
                            <p className="edu-institution">RAJUK Uttara Model College</p>
                            <p className="edu-detail">2021</p>
                            <div className="edu-gpa"><span>5.00</span> GPA</div>
                        </div>
                        <div className="edu-card">
                            <h4>Secondary School Certificate</h4>
                            <p className="edu-institution">RAJUK Uttara Model College</p>
                            <p className="edu-detail">2019</p>
                            <div className="edu-gpa"><span>5.00</span> GPA</div>
                        </div>
                    </div>
                    <div className="achiev-column">
                        <h3 className="column-title">Competitive Programming</h3>
                        <div className="achiev-list">
                            {achievements.map((a, i) => (
                                <div className="achiev-item" key={i}>
                                    <div className="achiev-rank">{a.rank}</div>
                                    <div>
                                        <strong>{a.title}</strong>
                                        <p>{a.sub}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
