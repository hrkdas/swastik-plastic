/* ==========================================================================
   Swastik Plastic — interactions + motion choreography
   Libs (loaded via CDN in index.html, optional):
     window.gsap, window.ScrollTrigger, window.Lenis, window.THREE
   Tokens: window.MOTION (motion.config.js)
   ========================================================================== */
(() => {
  'use strict';

  const MO = window.MOTION || {};
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const touch   = matchMedia('(pointer: coarse)').matches;
  const lowEnd  = (navigator.deviceMemory && navigator.deviceMemory <= 4)
                  || (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4);
  const $  = (s, r=document) => r.querySelector(s);
  const $$ = (s, r=document) => Array.from(r.querySelectorAll(s));
  const lerp = (a, b, t) => a + (b - a) * t;

  /* =========================================================================
     PRELOADER
     ========================================================================= */
  function runPreloader() {
    const pre = $('#preloader');
    const counter = $('#pre-counter');
    if (!pre) return Promise.resolve();
    const seen = sessionStorage.getItem('sp-loaded');
    const hold = seen ? 600 : 1400;

    if (counter) {
      const start = performance.now();
      const tick = (t) => {
        const p = Math.min((t - start) / hold, 1);
        counter.textContent = String(Math.floor(p * 100)).padStart(3, '0');
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }
    return new Promise(res => {
      setTimeout(() => {
        sessionStorage.setItem('sp-loaded', '1');
        document.body.classList.add('loaded');
        $$('.pre-panel').forEach(p => p.classList.add('split'));
        pre.classList.add('hide');
        setTimeout(() => { pre.classList.add('gone'); res(); }, 700);
      }, hold);
    });
  }

  /* =========================================================================
     CUSTOM CURSOR
     ========================================================================= */
  function initCursor() {
    if (touch || reduced) return;
    const ring = $('.cursor');
    const dot  = $('.cursor-dot');
    if (!ring || !dot) return;
    let mx = innerWidth / 2, my = innerHeight / 2;
    let rx = mx, ry = my, dx = mx, dy = my;
    const lerpV = (MO.cursor && MO.cursor.lerp) || 0.18;

    addEventListener('mousemove', (e) => { mx = e.clientX; my = e.clientY; });
    addEventListener('mouseleave', () => { ring.style.opacity = 0; dot.style.opacity = 0; });
    addEventListener('mouseenter', () => { ring.style.opacity = ''; dot.style.opacity = ''; });

    function loop() {
      rx = lerp(rx, mx, lerpV);
      ry = lerp(ry, my, lerpV);
      dx = lerp(dx, mx, 0.5);
      dy = lerp(dy, my, 0.5);
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      dot.style.transform  = `translate(${dx}px, ${dy}px) translate(-50%, -50%)`;
      requestAnimationFrame(loop);
    }
    loop();

    // hover states
    const setLabel = (l) => ring.setAttribute('data-label', l || '');
    $$('a, button, .magnetic, .gal-chip, .faq-q, .testi-card, .ind-tile').forEach(el => {
      el.addEventListener('mouseenter', () => {
        ring.classList.add('hover');
        dot.classList.add('hidden');
        setLabel(el.getAttribute('data-cursor') || '');
      });
      el.addEventListener('mouseleave', () => {
        ring.classList.remove('hover');
        dot.classList.remove('hidden');
        setLabel('');
      });
    });
    $$('.g-item').forEach(el => {
      el.addEventListener('mouseenter', () => { ring.classList.add('hover'); dot.classList.add('hidden'); setLabel('VIEW'); });
      el.addEventListener('mouseleave', () => { ring.classList.remove('hover'); dot.classList.remove('hidden'); setLabel(''); });
    });
    $$('.testi-rail-wrap').forEach(el => {
      el.addEventListener('mouseenter', () => { ring.classList.add('hover'); dot.classList.add('hidden'); setLabel('DRAG'); });
      el.addEventListener('mouseleave', () => { ring.classList.remove('hover'); dot.classList.remove('hidden'); setLabel(''); });
    });
  }

  /* =========================================================================
     MAGNETIC BUTTONS
     ========================================================================= */
  function initMagnetic() {
    if (touch || reduced) return;
    const radius = (MO.cursor && MO.cursor.magnetRadius) || 80;
    const strength = (MO.cursor && MO.cursor.magnetStrength) || 0.35;
    $$('.magnetic, .btn-primary, .btn-shutter').forEach(el => {
      let raf;
      const move = (e) => {
        const r = el.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        const dx = e.clientX - cx;
        const dy = e.clientY - cy;
        const d = Math.hypot(dx, dy);
        if (d < radius + Math.max(r.width, r.height) / 2) {
          cancelAnimationFrame(raf);
          raf = requestAnimationFrame(() => {
            el.style.transform = `translate(${dx * strength}px, ${dy * strength}px)`;
          });
        }
      };
      const reset = () => {
        cancelAnimationFrame(raf);
        el.style.transition = 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
        el.style.transform = '';
        setTimeout(() => { el.style.transition = ''; }, 600);
      };
      el.addEventListener('mousemove', move);
      el.addEventListener('mouseleave', reset);
    });
  }

  /* =========================================================================
     LENIS SMOOTH SCROLL
     ========================================================================= */
  let lenis = null;
  function initSmoothScroll() {
    if (reduced || !window.Lenis) return null;
    lenis = new window.Lenis({
      lerp: (MO.scroll && MO.scroll.lerp) || 0.1,
      smoothWheel: true,
      wheelMultiplier: 1.0
    });
    document.documentElement.classList.add('lenis-smooth');
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    if (window.ScrollTrigger) {
      lenis.on('scroll', window.ScrollTrigger.update);
      window.gsap.ticker.add((t) => lenis.raf(t * 1000));
      window.gsap.ticker.lagSmoothing(0);
    }
    // jump-to-anchor compatibility
    $$('a[href^="#"]').forEach(a => {
      a.addEventListener('click', (e) => {
        const id = a.getAttribute('href');
        if (id.length > 1 && document.querySelector(id)) {
          e.preventDefault();
          lenis.scrollTo(id, { offset: -60, duration: 1.2 });
        }
      });
    });
    return lenis;
  }

  /* =========================================================================
     SPLIT WORDS / LINES — text reveal
     ========================================================================= */
  function splitWords(el) {
    if (!el || el.dataset.split === '1') return;
    const text = el.textContent;
    el.innerHTML = '';
    text.split(/(\s+)/).forEach(w => {
      if (!w.trim()) { el.appendChild(document.createTextNode(' ')); return; }
      const wrap = document.createElement('span');
      wrap.className = 'word';
      const inner = document.createElement('span');
      inner.textContent = w;
      wrap.appendChild(inner);
      el.appendChild(wrap);
    });
    el.dataset.split = '1';
  }

  function splitLines(el) {
    if (!el || el.dataset.lines === '1') return;
    const lines = el.dataset.lines || el.innerHTML.split(/<br\s*\/?>/i);
    if (!Array.isArray(lines)) return;
    el.innerHTML = '';
    lines.forEach(t => {
      const line = document.createElement('span');
      line.className = 'line';
      const inner = document.createElement('span');
      inner.textContent = t;
      line.appendChild(inner);
      el.appendChild(line);
    });
    el.dataset.lines = '1';
  }

  /* =========================================================================
     SCROLL REVEALS
     ========================================================================= */
  function initReveals() {
    const opts = { threshold: 0.12, rootMargin: '0px 0px -40px 0px' };
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, opts);
    $$('.reveal, .reveal-stagger, .clip-reveal-host, .about-quote, .split-panels, .cta-banner, .gallery-masonry')
      .forEach(el => io.observe(el));
  }

  /* =========================================================================
     ODOMETER STATS
     ========================================================================= */
  function odoNum(el, target) {
    el.innerHTML = '';
    const digits = String(target).split('');
    digits.forEach(ch => {
      if (/\d/.test(ch)) {
        const d = document.createElement('span');
        d.className = 'digit';
        const stack = document.createElement('span');
        stack.className = 'stack';
        for (let i = 0; i <= 9; i++) {
          const s = document.createElement('span');
          s.textContent = i;
          stack.appendChild(s);
        }
        d.appendChild(stack);
        el.appendChild(d);
        // animate
        requestAnimationFrame(() => {
          stack.style.transform = `translateY(-${parseInt(ch, 10)}em)`;
        });
      } else {
        const t = document.createElement('span');
        t.textContent = ch;
        el.appendChild(t);
      }
    });
  }
  function initOdometer() {
    const els = $$('[data-odo]');
    if (!els.length) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        odoNum(e.target, e.target.dataset.odo);
        io.unobserve(e.target);
      });
    }, { threshold: 0.4 });
    els.forEach(el => io.observe(el));
  }

  /* =========================================================================
     LEGACY data-count counters (used in hero)
     ========================================================================= */
  function initCounters() {
    const counters = $$('[data-count]');
    const io = new IntersectionObserver((entries) => {
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
        io.unobserve(el);
      });
    }, { threshold: 0.5 });
    counters.forEach(c => io.observe(c));
  }

  /* =========================================================================
     HEADER state + active nav
     ========================================================================= */
  function initHeader() {
    const header = $('.site-header');
    const update = () => {
      if (scrollY > 20) header.classList.add('scrolled');
      else header.classList.remove('scrolled');
    };
    addEventListener('scroll', update, { passive: true });
    update();

    const toggle = $('.menu-toggle');
    const mobile = $('.nav-mobile');
    if (toggle && mobile) {
      toggle.addEventListener('click', () => {
        const open = mobile.classList.toggle('open');
        toggle.setAttribute('aria-expanded', open);
        document.body.style.overflow = open ? 'hidden' : '';
      });
      $$('.nav-mobile a').forEach(a => a.addEventListener('click', () => {
        mobile.classList.remove('open');
        document.body.style.overflow = '';
      }));
    }

    const sections = $$('main section[id]');
    const links = $$('.nav-links a[href^="#"]');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + e.target.id));
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px' });
    sections.forEach(s => io.observe(s));
  }

  /* =========================================================================
     FAQ accordion
     ========================================================================= */
  function initFAQ() {
    $$('.faq-item').forEach(item => {
      const q = item.querySelector('.faq-q');
      q.addEventListener('click', () => {
        item.classList.toggle('open');
        q.setAttribute('aria-expanded', item.classList.contains('open'));
      });
    });
  }

  /* =========================================================================
     FORM FIELD float labels + RFQ submit
     ========================================================================= */
  function initForms() {
    $$('.field input, .field textarea, .field select').forEach(input => {
      const field = input.closest('.field');
      const sync = () => field.classList.toggle('has-value', input.value && input.value.length > 0);
      input.addEventListener('focus', () => field.classList.add('focused'));
      input.addEventListener('blur', () => {
        field.classList.remove('focused');
        sync();
        if (input.required && !input.value.trim()) {
          field.classList.add('error', 'field-shake');
          setTimeout(() => field.classList.remove('field-shake'), 320);
        } else field.classList.remove('error');
      });
      input.addEventListener('input', () => { sync(); field.classList.remove('error'); });
      sync();
    });

    const rfq = $('#rfq-form');
    if (rfq) {
      rfq.addEventListener('submit', (e) => {
        const required = rfq.querySelectorAll('[required]');
        let ok = true;
        required.forEach(el => {
          const f = el.closest('.field');
          if (!el.value.trim()) {
            ok = false;
            if (f) f.classList.add('error', 'field-shake');
          }
        });
        if (!ok) { e.preventDefault(); return; }
        const btn = rfq.querySelector('button[type="submit"]');
        if (btn) { btn.disabled = true; btn.style.opacity = '.7'; btn.innerHTML = 'Sending…'; }
        const status = $('#rfq-status');
        if (status) status.textContent = 'Submitting your enquiry…';
      });
    }

    const qq = $('#quick-quote');
    if (qq) {
      qq.addEventListener('submit', (e) => {
        const phone = qq.querySelector('input[name="phone"]');
        if (!phone.value.trim()) { e.preventDefault(); phone.style.borderColor = 'var(--warn)'; return; }
        const btn = qq.querySelector('button[type="submit"]');
        if (btn) { btn.disabled = true; btn.style.opacity = '.7'; btn.textContent = 'Sending…'; }
      });
    }
  }

  /* =========================================================================
     COOKIE BANNER + YEAR + LEAD TIME
     ========================================================================= */
  function initMisc() {
    const cookie = $('#cookie');
    if (cookie && !localStorage.getItem('cookie-ok')) {
      setTimeout(() => cookie.classList.add('show'), 1400);
      cookie.querySelector('[data-cookie-ok]').addEventListener('click', () => {
        localStorage.setItem('cookie-ok', '1');
        cookie.classList.remove('show');
      });
    }
    const yr = $('#year');
    if (yr) yr.textContent = new Date().getFullYear();
    const lt = $('#lead-time');
    if (lt) {
      const w = Math.floor(((Date.now() / 86400000) + 4) / 7) % 4;
      lt.textContent = ['4–6 weeks', '5–7 weeks', '4–8 weeks', '6–8 weeks'][w];
    }
  }

  /* =========================================================================
     THEME TOGGLE
     ========================================================================= */
  function initTheme() {
    const btn = $('.theme-toggle');
    if (!btn) return;
    const pref = localStorage.getItem('sp-theme');
    if (pref) document.documentElement.dataset.theme = pref;
    btn.addEventListener('click', () => {
      const next = document.documentElement.dataset.theme === 'light' ? '' : 'light';
      if (next) document.documentElement.dataset.theme = next;
      else delete document.documentElement.dataset.theme;
      localStorage.setItem('sp-theme', next);
    });
  }

  /* =========================================================================
     HERO 3D — Three.js wireframe (with fallback)
     ========================================================================= */
  function initHero3D() {
    const canvas = $('#hero-canvas');
    if (!canvas || reduced || !window.THREE || lowEnd) return;
    try {
      const THREE = window.THREE;
      const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 50);
      camera.position.set(0, 0, 6);

      const fit = () => {
        const r = canvas.parentElement.getBoundingClientRect();
        renderer.setSize(r.width, r.height, false);
        camera.aspect = r.width / r.height;
        camera.updateProjectionMatrix();
      };
      fit();
      addEventListener('resize', fit);

      // Procedural chrome environment (gradient sky → ground) for reflections
      const pmrem = new THREE.PMREMGenerator(renderer);
      const envScene = new THREE.Scene();
      const envGeo = new THREE.SphereGeometry(50, 32, 16);
      const envCanvas = document.createElement('canvas');
      envCanvas.width = 256; envCanvas.height = 256;
      const ectx = envCanvas.getContext('2d');
      const grad = ectx.createLinearGradient(0, 0, 0, 256);
      grad.addColorStop(0.00, '#f4f6f8');
      grad.addColorStop(0.45, '#a8b0ba');
      grad.addColorStop(0.55, '#3a4048');
      grad.addColorStop(1.00, '#1a1d22');
      ectx.fillStyle = grad; ectx.fillRect(0, 0, 256, 256);
      // a few horizontal highlight bands → streaky chrome reflections
      ectx.fillStyle = 'rgba(255,255,255,0.6)';
      ectx.fillRect(0, 60, 256, 4);
      ectx.fillStyle = 'rgba(255,255,255,0.3)';
      ectx.fillRect(0, 110, 256, 2);
      ectx.fillStyle = 'rgba(255,176,32,0.18)';
      ectx.fillRect(0, 170, 256, 6);
      const envTex = new THREE.CanvasTexture(envCanvas);
      envTex.mapping = THREE.EquirectangularReflectionMapping;
      const envMap = pmrem.fromEquirectangular(envTex).texture;
      scene.environment = envMap;

      // Group: torus knot (mould-like core) + outer wireframe icosahedron
      const group = new THREE.Group();
      const knotGeo = new THREE.TorusKnotGeometry(1.1, 0.32, 160, 24);
      const knotMat = new THREE.MeshStandardMaterial({
        color: 0xeef0f3, metalness: 1.0, roughness: 0.08,
        envMap, envMapIntensity: 1.4
      });
      const knot = new THREE.Mesh(knotGeo, knotMat);
      group.add(knot);

      const wireGeo = new THREE.IcosahedronGeometry(2.2, 1);
      const wireMat = new THREE.LineBasicMaterial({ color: 0xb8c0cc, transparent: true, opacity: 0.28 });
      const wire = new THREE.LineSegments(new THREE.WireframeGeometry(wireGeo), wireMat);
      group.add(wire);

      scene.add(group);

      const dir = new THREE.DirectionalLight(0xffffff, 1.4);
      dir.position.set(2, 3, 4);
      scene.add(dir);
      const amb = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(amb);
      const pt = new THREE.PointLight(0xFFB020, 0.6, 10);
      pt.position.set(-3, -2, 3);
      scene.add(pt);

      let mouseX = 0, mouseY = 0;
      addEventListener('mousemove', (e) => {
        mouseX = (e.clientX / innerWidth - 0.5) * 0.16;
        mouseY = (e.clientY / innerHeight - 0.5) * 0.16;
      });

      let scrollProg = 0;
      addEventListener('scroll', () => {
        scrollProg = Math.min(scrollY / innerHeight, 1);
      }, { passive: true });

      const clock = new THREE.Clock();
      let raf;
      function tick() {
        const t = clock.getElapsedTime();
        knot.rotation.y = t * 0.25 + scrollProg * 1.2;
        knot.rotation.x = t * 0.18 + mouseY * 2;
        wire.rotation.y = -t * 0.12 - mouseX * 2;
        wire.rotation.x = mouseY * 1.5;
        group.position.y = -scrollProg * 0.8;
        group.rotation.z = Math.sin(t * 0.4) * 0.04;
        renderer.render(scene, camera);
        raf = requestAnimationFrame(tick);
      }
      tick();

      // pause off-screen
      const obs = new IntersectionObserver(([e]) => {
        if (!e.isIntersecting) cancelAnimationFrame(raf);
        else tick();
      });
      obs.observe(canvas.parentElement);
    } catch (err) {
      console.warn('Hero 3D failed, using static fallback:', err);
    }
  }

  /* =========================================================================
     SERVICES — horizontal pin (GSAP ScrollTrigger)
     ========================================================================= */
  function initServicesPin() {
    if (!window.gsap || !window.ScrollTrigger || matchMedia('(max-width: 880px)').matches) return;
    const wrap = $('.services-pin');
    const rail = $('.services-pin .pin-rail');
    if (!wrap || !rail) return;
    const compute = () => rail.scrollWidth - innerWidth + 80;
    let dist = compute();
    addEventListener('resize', () => { dist = compute(); ScrollTrigger.refresh(); });

    gsap.to(rail, {
      x: () => -compute(),
      ease: 'none',
      scrollTrigger: {
        trigger: wrap,
        pin: true,
        scrub: (MO.scroll && MO.scroll.scrub) || 1,
        end: () => `+=${compute()}`,
        invalidateOnRefresh: true
      }
    });
  }

  /* =========================================================================
     PROCESS scroll-driven pellet on path
     ========================================================================= */
  function initProcess() {
    const path = $('#process-path');
    const fill = $('#process-path-fill');
    const pellet = $('#process-pellet');
    const stations = $$('.proc-station');
    if (!path || !pellet) return;
    const len = path.getTotalLength();
    if (fill) {
      fill.style.strokeDasharray = len;
      fill.style.strokeDashoffset = len;
    }
    const wrap = $('.process-track');
    if (!wrap) return;
    const update = () => {
      const r = wrap.getBoundingClientRect();
      const total = r.height + innerHeight * 0.4;
      const passed = innerHeight - r.top;
      const p = Math.max(0, Math.min(passed / total, 1));
      const point = path.getPointAtLength(len * p);
      pellet.setAttribute('cx', point.x);
      pellet.setAttribute('cy', point.y);
      if (fill) fill.style.strokeDashoffset = len * (1 - p);
      const idx = Math.min(Math.floor(p * stations.length), stations.length - 1);
      stations.forEach((s, i) => s.classList.toggle('active', i <= idx));
    };
    addEventListener('scroll', update, { passive: true });
    addEventListener('resize', update);
    update();
  }

  /* =========================================================================
     CAPABILITY VISUALIZER
     ========================================================================= */
  function initVisualizer() {
    const root = $('#capability-viz');
    if (!root) return;
    const sliders = $$('input[type=range]', root);
    const out = {
      tonnage: $('#viz-tonnage', root),
      cycle:   $('#viz-cycle', root),
      cavity:  $('#viz-cavity', root),
      lead:    $('#viz-lead', root)
    };
    const grid = $('#viz-cavity-grid', root);

    const compute = () => {
      const v = {};
      sliders.forEach(s => v[s.dataset.axis] = +s.value);
      // tonnage: volume + complexity + material
      const tonnage = Math.round(50 + v.volume * 1.5 + v.complexity * 1.2 + v.material * 0.6);
      const cycle   = Math.round(8 + (10 - v.complexity * 0.06) + (v.material * 0.12));
      const cavities = v.complexity < 25 ? 1 : v.complexity < 50 ? 2 : v.complexity < 75 ? 4 : 8;
      const leadWk  = Math.round(4 + v.complexity * 0.06 + v.material * 0.04);

      out.tonnage && (out.tonnage.innerHTML = `<em>${tonnage}</em> T`);
      out.cycle   && (out.cycle.innerHTML = `<em>${cycle}</em> s`);
      out.cavity  && (out.cavity.innerHTML = `<em>${cavities}</em>×`);
      out.lead    && (out.lead.innerHTML = `<em>${leadWk}</em> wks`);

      // mould visual cavity grid
      if (grid) {
        const cols = cavities === 1 ? 1 : cavities === 2 ? 2 : cavities === 4 ? 2 : 4;
        const rows = cavities / cols;
        grid.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
        grid.innerHTML = '';
        for (let i = 0; i < cavities; i++) {
          const c = document.createElement('div');
          c.className = 'viz-cav';
          c.style.animationDelay = (i * 0.15) + 's';
          grid.appendChild(c);
        }
      }
    };

    sliders.forEach(s => {
      const updateFill = () => {
        const min = +s.min || 0, max = +s.max || 100;
        const pct = ((s.value - min) / (max - min)) * 100;
        s.style.setProperty('--fill', pct + '%');
      };
      s.addEventListener('input', () => { updateFill(); compute(); });
      updateFill();
    });
    compute();
  }

  /* =========================================================================
     GALLERY filters + lightbox
     ========================================================================= */
  function initGallery() {
    const chips = $$('.gal-chip');
    const items = $$('.g-item');
    chips.forEach(c => c.addEventListener('click', () => {
      chips.forEach(x => x.classList.remove('active'));
      c.classList.add('active');
      const cat = c.dataset.cat;
      items.forEach(it => {
        const match = !cat || cat === 'all' || it.dataset.cat === cat;
        it.style.display = match ? '' : 'none';
      });
    }));

    const lb = $('#lightbox');
    const lbImg = $('#lightbox-img');
    const close = $('#lightbox-close');
    if (!lb || !lbImg) return;
    items.forEach(it => it.addEventListener('click', () => {
      const img = it.querySelector('img');
      if (!img) return;
      lbImg.src = img.src;
      lbImg.alt = img.alt || '';
      lb.classList.add('open');
    }));
    close && close.addEventListener('click', () => lb.classList.remove('open'));
    lb.addEventListener('click', (e) => { if (e.target === lb) lb.classList.remove('open'); });
    addEventListener('keydown', (e) => { if (e.key === 'Escape') lb.classList.remove('open'); });
  }

  /* =========================================================================
     TESTIMONIALS — drag carousel with momentum
     ========================================================================= */
  function initTesti() {
    const wrap = $('.testi-rail-wrap');
    const rail = $('.testi-rail');
    if (!wrap || !rail) return;
    let isDown = false, startX = 0, startTx = 0, tx = 0, vel = 0, lastX = 0;
    const max = () => -(rail.scrollWidth - wrap.clientWidth + 0);

    const apply = () => { rail.style.transform = `translateX(${tx}px)`; };
    const clamp = () => { tx = Math.max(max(), Math.min(0, tx)); };

    wrap.addEventListener('pointerdown', (e) => {
      isDown = true; wrap.classList.add('dragging');
      startX = e.clientX; lastX = e.clientX; startTx = tx;
      wrap.setPointerCapture(e.pointerId);
    });
    wrap.addEventListener('pointermove', (e) => {
      if (!isDown) return;
      vel = e.clientX - lastX; lastX = e.clientX;
      tx = startTx + (e.clientX - startX);
      clamp(); apply();
    });
    const release = () => {
      isDown = false; wrap.classList.remove('dragging');
      // momentum
      const decel = () => {
        vel *= 0.93;
        tx += vel;
        clamp(); apply();
        if (Math.abs(vel) > 0.4) requestAnimationFrame(decel);
      };
      decel();
    };
    wrap.addEventListener('pointerup', release);
    wrap.addEventListener('pointercancel', release);
    wrap.addEventListener('pointerleave', () => { if (isDown) release(); });

    // auto-advance
    let auto;
    const advance = () => {
      if (isDown) return;
      tx -= 280;
      if (tx < max() - 80) tx = 0;
      clamp();
      rail.style.transition = 'transform 0.9s cubic-bezier(0.16,1,0.3,1)';
      apply();
      setTimeout(() => rail.style.transition = '', 950);
    };
    const start = () => { auto = setInterval(advance, 6000); };
    const stop  = () => clearInterval(auto);
    wrap.addEventListener('mouseenter', stop);
    wrap.addEventListener('mouseleave', start);
    start();
  }

  /* =========================================================================
     FOOTER WORDMARK fill on reach
     ========================================================================= */
  function initFooter() {
    const wm = $('.footer-wordmark');
    if (!wm) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) wm.classList.add('fill');
    }, { threshold: 0.3 });
    io.observe(wm);
  }

  /* =========================================================================
     EASTER EGGS — Konami + logo 5x
     ========================================================================= */
  function initEastereggs() {
    const seq = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
    let idx = 0;
    const overlay = document.createElement('div');
    overlay.className = 'blueprint';
    document.body.appendChild(overlay);
    addEventListener('keydown', (e) => {
      const k = e.key;
      if (k.toLowerCase() === seq[idx].toLowerCase()) {
        idx++;
        if (idx === seq.length) {
          idx = 0;
          document.body.classList.add('blueprint-active');
          overlay.classList.add('on');
          setTimeout(() => {
            document.body.classList.remove('blueprint-active');
            overlay.classList.remove('on');
          }, 10000);
        }
      } else idx = 0;
    });

    // logo 5x click → year cycle
    const brand = $('.site-header .brand');
    if (!brand) return;
    let clicks = 0, lastClick = 0;
    brand.addEventListener('click', (e) => {
      const now = Date.now();
      if (now - lastClick < 600) clicks++; else clicks = 1;
      lastClick = now;
      if (clicks >= 5) {
        clicks = 0;
        e.preventDefault();
        const small = brand.querySelector('.brand-text small');
        if (!small) return;
        const orig = small.textContent;
        const year = new Date().getFullYear();
        let y = 2005;
        const tick = () => {
          small.textContent = `SINCE ${y} · MUMBAI`;
          y++;
          if (y <= year) setTimeout(tick, 60);
          else small.textContent = orig;
        };
        tick();
      }
    });
  }

  /* =========================================================================
     PAGE TRANSITION
     ========================================================================= */
  function initPageWipe() {
    const wipe = document.createElement('div');
    wipe.className = 'page-wipe';
    document.body.appendChild(wipe);
    requestAnimationFrame(() => wipe.classList.add('out'));
    $$('a[href]').forEach(a => {
      const url = a.getAttribute('href');
      if (!url || url.startsWith('#') || url.startsWith('mailto:') || url.startsWith('tel:')
          || a.target === '_blank' || a.hostname !== location.hostname) return;
      a.addEventListener('click', (e) => {
        e.preventDefault();
        wipe.classList.remove('out');
        wipe.classList.add('in');
        setTimeout(() => location.href = url, 500);
      });
    });
  }

  /* =========================================================================
     BENTO mouse-follow gradient
     ========================================================================= */
  function initBentoGradient() {
    if (touch) return;
    $$('.bento .cell').forEach(cell => {
      cell.addEventListener('mousemove', (e) => {
        const r = cell.getBoundingClientRect();
        cell.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100) + '%');
        cell.style.setProperty('--my', ((e.clientY - r.top)  / r.height * 100) + '%');
      });
    });
  }

  /* =========================================================================
     HERO HEADLINE split + reveal
     ========================================================================= */
  function initHeroText() {
    $$('[data-split="words"]').forEach(splitWords);
    $$('[data-split="lines"]').forEach(el => {
      const arr = (el.dataset.lines || '').split('|');
      if (!arr.length) return;
      el.dataset.lines = '';
      el.innerHTML = '';
      arr.forEach(t => {
        const line = document.createElement('span');
        line.className = 'line';
        const inner = document.createElement('span');
        inner.textContent = t;
        line.appendChild(inner);
        el.appendChild(line);
      });
    });
  }

  /* =========================================================================
     PAUSE HEAVY ANIM when tab hidden
     ========================================================================= */
  function initVisibility() {
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        $$('.marquee-track').forEach(t => t.style.animationPlayState = 'paused');
      } else {
        $$('.marquee-track').forEach(t => t.style.animationPlayState = '');
      }
    });
  }

  /* =========================================================================
     BOOT
     ========================================================================= */
  document.addEventListener('DOMContentLoaded', async () => {
    initHeroText();
    await runPreloader();
    initSmoothScroll();
    initCursor();
    initMagnetic();
    initHeader();
    initReveals();
    initOdometer();
    initCounters();
    initFAQ();
    initForms();
    initMisc();
    initTheme();
    initBentoGradient();
    initServicesPin();
    initProcess();
    initVisualizer();
    initGallery();
    initTesti();
    initFooter();
    initEastereggs();
    initVisibility();
    initHero3D();
    // initPageWipe();  // disabled by default — uncomment for full SPA-style wipe
  });
})();
