document.addEventListener('DOMContentLoaded', () => {
    initCursorGlow();
    initNavbar();
    initTypingEffect();
    initParticles();
    initScrollReveal();
    initCountUp();
    initActiveNavLink();
});

/* Cursor Glow */
function initCursorGlow() {
    const glow = document.getElementById('cursorGlow');
    if (!glow) return;
    let mx = 0, my = 0, gx = 0, gy = 0;
    document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
    (function loop() {
        gx += (mx - gx) * 0.07; gy += (my - gy) * 0.07;
        glow.style.left = gx + 'px'; glow.style.top = gy + 'px';
        requestAnimationFrame(loop);
    })();
}

/* Navbar */
function initNavbar() {
    const nav = document.getElementById('navbar');
    const toggle = document.getElementById('navToggle');
    const links = document.getElementById('navLinks');
    window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 50));
    if (toggle && links) {
        toggle.addEventListener('click', () => {
            toggle.classList.toggle('active');
            links.classList.toggle('open');
            document.body.style.overflow = links.classList.contains('open') ? 'hidden' : '';
        });
        links.querySelectorAll('.nav-link').forEach(l => l.addEventListener('click', () => {
            toggle.classList.remove('active');
            links.classList.remove('open');
            document.body.style.overflow = '';
        }));
    }
}

/* Typing Effect */
function initTypingEffect() {
    const roles = [
        'Machine Learning Researcher',
        'Data Scientist',
        'Deep Learning Enthusiast',
        'Bioinformatics Explorer',
        'Competitive Programmer'
    ];
    const el = document.getElementById('typedRole');
    if (!el) return;
    let ri = 0, ci = 0, del = false, speed = 70;
    (function type() {
        const role = roles[ri];
        if (del) { el.textContent = role.substring(0, --ci); speed = 35; }
        else { el.textContent = role.substring(0, ++ci); speed = 70; }
        if (!del && ci === role.length) { del = true; speed = 2200; }
        else if (del && ci === 0) { del = false; ri = (ri + 1) % roles.length; speed = 400; }
        setTimeout(type, speed);
    })();
}

/* Particles */
function initParticles() {
    const c = document.getElementById('heroParticles');
    if (!c) return;
    for (let i = 0; i < 40; i++) {
        const p = document.createElement('div');
        const s = Math.random() * 2.5 + 0.8;
        p.style.cssText = `position:absolute;width:${s}px;height:${s}px;background:${Math.random() > .5 ? '#6366f1' : '#22d3ee'};border-radius:50%;left:${Math.random() * 100}%;top:${Math.random() * 100}%;opacity:${Math.random() * .25 + .05};animation:pf ${Math.random() * 18 + 10}s ease-in-out ${Math.random() * 8}s infinite;pointer-events:none`;
        c.appendChild(p);
    }
    const s = document.createElement('style');
    s.textContent = `@keyframes pf{0%,100%{transform:translate(0,0)}25%{transform:translate(${Math.random() * 60 - 30}px,${Math.random() * 60 - 30}px)}50%{transform:translate(${Math.random() * 60 - 30}px,${Math.random() * 60 - 30}px)}75%{transform:translate(${Math.random() * 60 - 30}px,${Math.random() * 60 - 30}px)}}`;
    document.head.appendChild(s);
}

/* Scroll Reveal */
function initScrollReveal() {
    const els = document.querySelectorAll('.research-card,.skill-group,.project-card,.edu-card,.achiev-item,.roadmap-item,.contact-card,.about-layout,.about-metrics .metric,.section-title,.section-subtitle');
    els.forEach(el => el.classList.add('reveal'));
    const obs = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                setTimeout(() => entry.target.classList.add('visible'), i * 60);
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    els.forEach(el => obs.observe(el));
}

/* Count Up */
function initCountUp() {
    const stats = document.querySelectorAll('.metric-value[data-count]');
    const obs = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const t = parseFloat(entry.target.dataset.count);
            const dec = t % 1 !== 0;
            const start = performance.now();
            (function update(now) {
                const p = Math.min((now - start) / 1800, 1);
                const e = 1 - Math.pow(1 - p, 3);
                entry.target.textContent = dec ? (e * t).toFixed(2) : Math.floor(e * t);
                if (p < 1) requestAnimationFrame(update);
                else entry.target.textContent = dec ? t.toFixed(2) : t;
            })(start);
            obs.unobserve(entry.target);
        });
    }, { threshold: 0.5 });
    stats.forEach(s => obs.observe(s));
}

/* Active Nav */
function initActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const links = document.querySelectorAll('.nav-link');
    window.addEventListener('scroll', () => {
        let cur = '';
        sections.forEach(s => {
            if (window.scrollY + 200 >= s.offsetTop && window.scrollY + 200 < s.offsetTop + s.offsetHeight)
                cur = s.id;
        });
        links.forEach(l => {
            l.classList.toggle('active', l.getAttribute('href') === '#' + cur);
        });
    });
}
