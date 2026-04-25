/* Swastik Plastic — motion design tokens.
   Tune globally. All durations in seconds. */
window.MOTION = {
  ease: {
    out:    'cubic-bezier(0.16, 1, 0.3, 1)',     // expo-out — primary reveal
    inOut:  'cubic-bezier(0.65, 0, 0.35, 1)',    // smooth in-out
    inExpo: 'cubic-bezier(0.7, 0, 0.84, 0)',     // page-wipe in
    outQ:   'cubic-bezier(0.22, 1, 0.36, 1)',    // ui out
    spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)'  // toggle / pop
  },
  dur: {
    micro:   0.18,
    short:   0.32,
    base:    0.6,
    reveal:  0.9,
    hero:    1.1,
    page:    0.6
  },
  stagger: {
    word: 0.08,
    char: 0.012,
    list: 0.06,
    grid: 0.04
  },
  scroll: {
    lerp: 0.1,           // Lenis smoothing
    scrub: 1.0           // GSAP scrub seconds
  },
  cursor: {
    lerp: 0.18,
    magnetRadius: 80,
    magnetStrength: 0.35
  }
};
