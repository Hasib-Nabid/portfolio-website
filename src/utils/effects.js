export function initCursorGlow() {
    const glow = document.getElementById('cursorGlow')
    if (!glow) return
    let mx = 0, my = 0, gx = 0, gy = 0
    document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY })
        ; (function loop() {
            gx += (mx - gx) * 0.07; gy += (my - gy) * 0.07
            glow.style.left = gx + 'px'; glow.style.top = gy + 'px'
            requestAnimationFrame(loop)
        })()
}

export function initParticles() {
    const c = document.getElementById('heroParticles')
    if (!c) return
    for (let i = 0; i < 40; i++) {
        const p = document.createElement('div')
        const s = Math.random() * 2.5 + 0.8
        p.style.cssText = `position:absolute;width:${s}px;height:${s}px;background:${Math.random() > .5 ? '#6366f1' : '#22d3ee'};border-radius:50%;left:${Math.random() * 100}%;top:${Math.random() * 100}%;opacity:${Math.random() * .25 + .05};animation:pf ${Math.random() * 18 + 10}s ease-in-out ${Math.random() * 8}s infinite;pointer-events:none`
        c.appendChild(p)
    }
    const s = document.createElement('style')
    s.textContent = `@keyframes pf{0%,100%{transform:translate(0,0)}25%{transform:translate(${Math.random() * 60 - 30}px,${Math.random() * 60 - 30}px)}50%{transform:translate(${Math.random() * 60 - 30}px,${Math.random() * 60 - 30}px)}75%{transform:translate(${Math.random() * 60 - 30}px,${Math.random() * 60 - 30}px)}}`
    document.head.appendChild(s)
}

export function initScrollReveal() {
    const els = document.querySelectorAll('.research-card,.skill-group,.project-card,.edu-card,.achiev-item,.roadmap-item,.contact-card,.about-layout,.about-metrics .metric,.section-title,.section-subtitle')
    els.forEach(el => el.classList.add('reveal'))
    const obs = new IntersectionObserver(entries => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                setTimeout(() => entry.target.classList.add('visible'), i * 60)
                obs.unobserve(entry.target)
            }
        })
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' })
    els.forEach(el => obs.observe(el))
}
