import { useState, useEffect } from 'react'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [open, setOpen] = useState(false)
    const [active, setActive] = useState('home')

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 50)
            const sections = document.querySelectorAll('section[id]')
            let cur = 'home'
            sections.forEach(s => {
                if (window.scrollY + 200 >= s.offsetTop && window.scrollY + 200 < s.offsetTop + s.offsetHeight)
                    cur = s.id
            })
            setActive(cur)
        }
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const links = [
        ['home', 'Home'], ['about', 'About'], ['research', 'Research'],
        ['skills', 'Skills'], ['projects', 'Projects'], ['education', 'Education'], ['contact', 'Contact']
    ]

    const handleClick = (e, id) => {
        e.preventDefault()
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
        setOpen(false)
        document.body.style.overflow = ''
    }

    return (
        <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
            <div className="nav-container">
                <a href="#home" className="nav-logo" onClick={e => handleClick(e, 'home')}>
                    <span className="logo-letter">N</span>
                    <span className="logo-text">abid</span>
                    <span className="logo-dot">.</span>
                </a>
                <div className={`nav-links${open ? ' open' : ''}`}>
                    {links.map(([id, label]) => (
                        <a key={id} href={`#${id}`} className={`nav-link${active === id ? ' active' : ''}`}
                            onClick={e => handleClick(e, id)}>{label}</a>
                    ))}
                </div>
                <button className={`nav-toggle${open ? ' active' : ''}`}
                    onClick={() => { setOpen(!open); document.body.style.overflow = open ? '' : 'hidden' }}
                    aria-label="Toggle navigation">
                    <span /><span /><span />
                </button>
            </div>
        </nav>
    )
}
