/* Swastik Plastic — interactions */
(() => {
  // Header shadow on scroll
  const header = document.querySelector('.site-header');
  const onScroll = () => {
    if (window.scrollY > 20) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile menu
  const toggle = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('.nav-mobile');
  if (toggle && mobileNav) {
    toggle.addEventListener('click', () => {
      const open = mobileNav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open);
    });
    mobileNav.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => mobileNav.classList.remove('open'))
    );
  }

  // Reveal on scroll
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal, .reveal-stagger').forEach(el => io.observe(el));

  // Counter animation
  const counters = document.querySelectorAll('[data-count]');
  const counterIO = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = parseInt(el.dataset.count, 10);
      const dur = 1600;
      const start = performance.now();
      const tick = (now) => {
        const p = Math.min((now - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.floor(target * eased).toLocaleString('en-IN');
        if (p < 1) requestAnimationFrame(tick);
        else el.textContent = target.toLocaleString('en-IN');
      };
      requestAnimationFrame(tick);
      counterIO.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach(c => counterIO.observe(c));

  // FAQ accordion
  document.querySelectorAll('.faq-item').forEach(item => {
    const q = item.querySelector('.faq-q');
    q.addEventListener('click', () => {
      item.classList.toggle('open');
      q.setAttribute('aria-expanded', item.classList.contains('open'));
    });
  });

  // Active nav link on scroll
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
  const navIO = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + e.target.id));
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  sections.forEach(s => navIO.observe(s));

  // RFQ form — posts to FormSubmit.co. Adds light client-side validation + submitting state.
  const rfqForm = document.getElementById('rfq-form');
  if (rfqForm) {
    rfqForm.addEventListener('submit', (e) => {
      const required = rfqForm.querySelectorAll('[required]');
      let ok = true;
      required.forEach(el => {
        if (!el.value.trim()) { ok = false; el.style.borderColor = 'tomato'; }
        else el.style.borderColor = '';
      });
      if (!ok) { e.preventDefault(); return; }
      const btn = rfqForm.querySelector('button[type="submit"]');
      if (btn) { btn.disabled = true; btn.style.opacity = '.7'; btn.innerHTML = 'Sending…'; }
      const status = document.getElementById('rfq-status');
      if (status) status.textContent = 'Submitting your enquiry…';
    });
  }

  // Cookie banner
  const cookie = document.getElementById('cookie');
  if (cookie && !localStorage.getItem('cookie-ok')) {
    setTimeout(() => cookie.classList.add('show'), 1200);
    cookie.querySelector('[data-cookie-ok]').addEventListener('click', () => {
      localStorage.setItem('cookie-ok', '1');
      cookie.classList.remove('show');
    });
  }

  // Year in footer
  const yr = document.getElementById('year');
  if (yr) yr.textContent = new Date().getFullYear();

  // Dynamic lead-time indicator (rotates by week, gives "live" feel)
  const lt = document.getElementById('lead-time');
  if (lt) {
    const weekOfYear = Math.floor(((Date.now() / 86400000) + 4) / 7) % 4;
    const ranges = ['4–6 weeks', '5–7 weeks', '4–8 weeks', '6–8 weeks'];
    lt.textContent = ranges[weekOfYear];
  }

  // Quick-quote form (hero) — same submit-state UX as RFQ
  const qq = document.getElementById('quick-quote');
  if (qq) {
    qq.addEventListener('submit', (e) => {
      const phone = qq.querySelector('input[name="phone"]');
      if (!phone.value.trim()) { e.preventDefault(); phone.style.borderColor = 'tomato'; return; }
      const btn = qq.querySelector('button[type="submit"]');
      if (btn) { btn.disabled = true; btn.style.opacity = '.7'; btn.textContent = 'Sending…'; }
    });
  }
})();
