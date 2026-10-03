/* Hotel Suite Royal · interacciones de la landing */
(() => {
  'use strict';

  // ===== CONFIGURACIÓN =====
  // Número de WhatsApp del hotel en formato internacional, solo dígitos (57 = Colombia).
  // TODO: reemplazar por el número real del hotel.
  const WHATSAPP_NUMBER = '573000000000';

  const LANG = document.documentElement.lang === 'en' ? 'en' : 'es';
  const BASE = document.body.dataset.base || '';
  const IMG = `${BASE}assets/img/`;

  const T = {
    es: {
      locale: 'es-CO',
      greeting: 'Hola, quisiera información para reservar en el Hotel Suite Royal.',
      menuOpen: 'Abrir menú', menuClose: 'Cerrar menú',
      errIn: 'Elige tu fecha de llegada.', errOut: 'Elige tu fecha de salida.',
      errOrder: 'La salida debe ser posterior a la llegada.',
      opening: 'Abriendo WhatsApp…',
      msgIntro: 'Hola, quisiera reservar en el Hotel Suite Royal:',
      msgIn: 'Llegada', msgOut: 'Salida', msgAdults: 'Adultos', msgRoom: 'Habitación',
      night: 'noche', nights: 'noches',
      msgEnd: '¿Tienen disponibilidad y cuál sería la tarifa?',
      enlarge: 'Ampliar', more: 'Ver todas las fotos',
    },
    en: {
      locale: 'en-US',
      greeting: 'Hello, I would like information about booking at Hotel Suite Royal.',
      menuOpen: 'Open menu', menuClose: 'Close menu',
      errIn: 'Please choose your check-in date.', errOut: 'Please choose your check-out date.',
      errOrder: 'Check-out must be after check-in.',
      opening: 'Opening WhatsApp…',
      msgIntro: 'Hello, I would like to book at Hotel Suite Royal:',
      msgIn: 'Check-in', msgOut: 'Check-out', msgAdults: 'Adults', msgRoom: 'Room',
      night: 'night', nights: 'nights',
      msgEnd: 'Do you have availability, and what would the rate be?',
      enlarge: 'Enlarge', more: 'View all photos',
    },
  }[LANG];

  // Etiquetas de la galería en inglés (clave = etiqueta en español)
  const LABELS_EN = {
    'Piscina en la azotea': 'Rooftop pool', 'Habitación Doble': 'Double Room', 'Terraza lounge': 'Lounge terrace',
    'Fachada': 'Façade', 'Habitación con balcón': 'Room with balcony', 'Piscina jardín': 'Garden pool',
    'Jacuzzi': 'Jacuzzi', 'Bar de la azotea': 'Rooftop bar', 'Piscina interior': 'Courtyard pool',
    'Habitación Familiar': 'Family Room', 'Restaurante': 'Restaurant', 'Azotea': 'Rooftop',
    'Terraza panorámica': 'Panoramic terrace', 'Habitación': 'Guest room', 'Entrada': 'Entrance',
    'Habitación con vista': 'Room with a view', 'Terraza comedor': 'Dining terrace', 'Baño con jacuzzi': 'Jacuzzi bathroom',
    'Lounge': 'Lounge', 'Habitación Triple': 'Triple Room', 'Acceso principal': 'Main entrance',
    'Patio interior': 'Inner courtyard', 'Vista exterior': 'Exterior view', 'Detalle de bienvenida': 'Welcome touch',
  };
  const label = (g) => (LANG === 'en' ? LABELS_EN[g.label] || g.label : g.label);
  // cat: hab | pis | esp | fac · size: tall | wide | ''
  const GALLERY = [
    { f: 'piscina-azotea-2',  cat: 'pis', size: 'wide', label: 'Piscina en la azotea' },
    { f: 'hab-doble-detalle', cat: 'hab', size: 'tall', label: 'Habitación Doble' },
    { f: 'terraza-lounge',    cat: 'esp', size: '',     label: 'Terraza lounge' },
    { f: 'fachada-1',         cat: 'fac', size: 'tall', label: 'Fachada' },
    { f: 'hab-balcon',        cat: 'hab', size: '',     label: 'Habitación con balcón' },
    { f: 'piscina-cenital',   cat: 'pis', size: '',     label: 'Piscina jardín' },
    { f: 'jacuzzi-balcon',    cat: 'hab', size: 'tall', label: 'Jacuzzi' },
    { f: 'bar-azotea',        cat: 'esp', size: 'wide', label: 'Bar de la azotea' },
    { f: 'hab-doble-2',       cat: 'hab', size: '',     label: 'Habitación Doble' },
    { f: 'piscina-interior-1',cat: 'pis', size: '',     label: 'Piscina interior' },
    { f: 'hab-familiar-1',    cat: 'hab', size: 'tall', label: 'Habitación Familiar' },
    { f: 'restaurante',       cat: 'esp', size: '',     label: 'Restaurante' },
    { f: 'piscina-azotea-bar',cat: 'pis', size: 'wide', label: 'Azotea' },
    { f: 'terraza-azotea',    cat: 'esp', size: 'tall', label: 'Terraza panorámica' },
    { f: 'hab-superior',      cat: 'hab', size: '',     label: 'Habitación' },
    { f: 'fachada-festiva',   cat: 'fac', size: 'tall', label: 'Entrada' },
    { f: 'hab-vista-1',       cat: 'hab', size: '',     label: 'Habitación con vista' },
    { f: 'terraza-comedor',   cat: 'esp', size: '',     label: 'Terraza comedor' },
    { f: 'piscina-interior-2',cat: 'pis', size: 'wide', label: 'Piscina interior' },
    { f: 'hab-doble-1',       cat: 'hab', size: 'tall', label: 'Habitación Doble' },
    { f: 'jacuzzi-2',         cat: 'hab', size: '',     label: 'Baño con jacuzzi' },
    { f: 'lounge-patio',      cat: 'esp', size: 'tall', label: 'Lounge' },
    { f: 'hab-triple-1',      cat: 'hab', size: '',     label: 'Habitación Triple' },
    { f: 'hab-familiar-2',    cat: 'hab', size: '',     label: 'Habitación Familiar' },
    { f: 'piscina-azotea-1',  cat: 'pis', size: 'tall', label: 'Piscina en la azotea' },
    { f: 'fachada-entrada',   cat: 'fac', size: 'tall', label: 'Acceso principal' },
    { f: 'hab-doble-5',       cat: 'hab', size: 'wide', label: 'Habitación Doble' },
    { f: 'patio-cenital',     cat: 'esp', size: 'tall', label: 'Patio interior' },
    { f: 'hab-familiar-3',    cat: 'hab', size: '',     label: 'Habitación Familiar' },
    { f: 'hab-doble-6',       cat: 'hab', size: '',     label: 'Habitación Doble' },
    { f: 'fachada-lateral',   cat: 'fac', size: 'tall', label: 'Vista exterior' },
    { f: 'hab-triple-2',      cat: 'hab', size: '',     label: 'Habitación Triple' },
    { f: 'jacuzzi-1',         cat: 'hab', size: 'tall', label: 'Jacuzzi' },
    { f: 'hab-doble-7',       cat: 'hab', size: 'wide', label: 'Habitación Doble' },
    { f: 'fachada-2',         cat: 'fac', size: 'tall', label: 'Fachada' },
    { f: 'hab-vista-2',       cat: 'hab', size: 'tall', label: 'Detalle de bienvenida' },
    { f: 'hab-familiar-balcon',cat:'hab', size: 'tall', label: 'Habitación Familiar' },
    { f: 'hab-doble-3',       cat: 'hab', size: 'tall', label: 'Habitación Doble' },
    { f: 'hab-doble-4',       cat: 'hab', size: '',     label: 'Habitación Doble' },
  ];
  const GALLERY_INITIAL = 16;

  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  document.documentElement.classList.remove('no-js');

  // ===== WhatsApp =====
  const waLink = (text) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  $$('.js-whatsapp').forEach((a) => {
    a.href = waLink(T.greeting);
    a.target = '_blank';
    a.rel = 'noopener';
  });

  // ===== Header =====
  const header = $('.site-header');
  const waFloat = $('.wa-float');
  const onScroll = () => {
    const y = window.scrollY;
    header.classList.toggle('is-scrolled', y > 40);
    waFloat.classList.toggle('is-shown', y > window.innerHeight * 0.6);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ===== Menú móvil =====
  const toggle = $('.nav-toggle');
  const nav = $('#main-nav');
  const setNav = (open) => {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? T.menuClose : T.menuOpen);
    nav.classList.toggle('is-open', open);
    document.body.classList.toggle('nav-open', open);
  };
  toggle.addEventListener('click', () => setNav(toggle.getAttribute('aria-expanded') !== 'true'));
  $$('a', nav).forEach((a) => a.addEventListener('click', () => setNav(false)));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && nav.classList.contains('is-open')) setNav(false); });

  // Sección actual en el menú
  const navLinks = $$('.main-nav ul a');
  const sectionObs = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      navLinks.forEach((l) => l.classList.toggle('is-current', l.getAttribute('href') === `#${en.target.id}`));
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  navLinks.forEach((l) => { const s = $(l.getAttribute('href')); if (s) sectionObs.observe(s); });

  // ===== Hero slider =====
  const slides = $$('.hero-slide');
  const dots = $$('.hero-dots button');
  let current = 0;
  let timer;
  const goTo = (i) => {
    slides[current].classList.remove('is-active');
    dots[current].setAttribute('aria-selected', 'false');
    current = (i + slides.length) % slides.length;
    slides[current].classList.add('is-active');
    dots[current].setAttribute('aria-selected', 'true');
  };
  const autoplay = () => {
    if (reduceMotion) return;
    clearInterval(timer);
    timer = setInterval(() => goTo(current + 1), 6500);
  };
  dots.forEach((d, i) => d.addEventListener('click', () => { goTo(i); autoplay(); }));
  document.addEventListener('visibilitychange', () => (document.hidden ? clearInterval(timer) : autoplay()));
  autoplay();

  // ===== Reveal al hacer scroll =====
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add('is-visible'); revealObs.unobserve(en.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  $$('.reveal').forEach((el) => revealObs.observe(el));

  // ===== Formulario de reserva =====
  const form = $('#booking-form');
  const checkin = $('#checkin');
  const checkout = $('#checkout');
  const room = $('#room');
  const msg = $('#booking-msg');
  const defaultMsg = msg.textContent;

  const iso = (d) => new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
  const today = new Date();
  const addDays = (d, n) => { const x = new Date(d); x.setDate(x.getDate() + n); return x; };
  checkin.min = iso(today);
  checkin.value = iso(addDays(today, 7));
  checkout.min = iso(addDays(today, 1));
  checkout.value = iso(addDays(today, 8));

  checkin.addEventListener('change', () => {
    if (!checkin.value) return;
    const next = iso(addDays(new Date(checkin.value + 'T00:00'), 1));
    checkout.min = next;
    if (!checkout.value || checkout.value <= checkin.value) checkout.value = next;
  });

  const fmt = (v) => new Date(v + 'T00:00').toLocaleDateString(T.locale, { weekday: 'short', day: 'numeric', month: 'long', year: 'numeric' });

  const setError = (text, field) => {
    msg.textContent = text;
    msg.classList.add('is-error');
    $$('.field', form).forEach((f) => f.classList.remove('has-error'));
    if (field) { field.closest('.field').classList.add('has-error'); field.focus(); }
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!checkin.value) return setError(T.errIn, checkin);
    if (!checkout.value) return setError(T.errOut, checkout);
    if (checkout.value <= checkin.value) return setError(T.errOrder, checkout);

    $$('.field', form).forEach((f) => f.classList.remove('has-error'));
    msg.classList.remove('is-error');
    msg.textContent = T.opening;

    const nights = Math.round((new Date(checkout.value) - new Date(checkin.value)) / 86400000);
    const text = [
      T.msgIntro,
      `• ${T.msgIn}: ${fmt(checkin.value)}`,
      `• ${T.msgOut}: ${fmt(checkout.value)} (${nights} ${nights === 1 ? T.night : T.nights})`,
      `• ${T.msgAdults}: ${$('#adults').value}`,
      `• ${T.msgRoom}: ${room.value}`,
      T.msgEnd,
    ].join('\n');
    window.open(waLink(text), '_blank', 'noopener');
    setTimeout(() => { msg.textContent = defaultMsg; }, 4000);
  });

  // Enlaces "Reservar esta habitación" preseleccionan el tipo
  $$('[data-room]').forEach((a) => a.addEventListener('click', () => {
    const value = a.dataset.room;
    if (![...room.options].some((o) => o.value === value)) room.add(new Option(value, value));
    room.value = value;
    setTimeout(() => checkin.focus({ preventScroll: true }), 700);
  }));

  // ===== Galería =====
  const grid = $('#gal-grid');
  let filter = 'all';
  let expanded = false;

  GALLERY.forEach((g, i) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = `gal-item ${g.size}`.trim();
    b.dataset.cat = g.cat;
    b.dataset.label = label(g);
    b.dataset.index = i;
    b.setAttribute('aria-label', `${T.enlarge}: ${label(g)}`);
    b.innerHTML = `<img src="${IMG}${g.f}.jpg" alt="${label(g)}" loading="lazy" decoding="async">`;
    grid.appendChild(b);
  });

  const moreWrap = document.createElement('div');
  moreWrap.className = 'gal-more';
  moreWrap.innerHTML = `<button type="button" class="btn">${T.more}</button>`;
  grid.after(moreWrap);
  const moreBtn = $('button', moreWrap);

  const visibleItems = () => $$('.gal-item', grid).filter((el) => !el.hidden);

  const renderGallery = () => {
    let shown = 0;
    let total = 0;
    $$('.gal-item', grid).forEach((el) => {
      const match = filter === 'all' || el.dataset.cat === filter;
      if (match) total++;
      const show = match && (expanded || filter !== 'all' || shown < GALLERY_INITIAL);
      if (show) shown++;
      el.hidden = !show;
    });
    moreWrap.hidden = expanded || filter !== 'all' || total <= GALLERY_INITIAL;
  };

  $$('.chip').forEach((c) => c.addEventListener('click', () => {
    $$('.chip').forEach((x) => { x.classList.toggle('is-active', x === c); x.setAttribute('aria-pressed', String(x === c)); });
    filter = c.dataset.filter;
    renderGallery();
  }));
  moreBtn.addEventListener('click', () => { expanded = true; renderGallery(); });
  renderGallery();

  // ===== Lightbox =====
  const lb = $('#lightbox');
  const lbImg = $('#lb-img');
  const lbCap = $('#lb-cap');
  let lbList = [];
  let lbPos = 0;
  let lastFocus = null;

  const showLb = (pos) => {
    lbPos = (pos + lbList.length) % lbList.length;
    const g = GALLERY[+lbList[lbPos].dataset.index];
    lbImg.src = `${IMG}${g.f}.jpg`;
    lbImg.alt = label(g);
    lbCap.textContent = `${label(g)} · ${lbPos + 1} / ${lbList.length}`;
  };
  const openLb = (item) => {
    lbList = visibleItems();
    lastFocus = item;
    lb.hidden = false;
    document.body.style.overflow = 'hidden';
    showLb(lbList.indexOf(item));
    $('.lb-close', lb).focus();
  };
  const closeLb = () => {
    lb.hidden = true;
    document.body.style.overflow = '';
    if (lastFocus) lastFocus.focus();
  };

  grid.addEventListener('click', (e) => { const it = e.target.closest('.gal-item'); if (it) openLb(it); });
  $('.lb-close', lb).addEventListener('click', closeLb);
  $('.lb-prev', lb).addEventListener('click', () => showLb(lbPos - 1));
  $('.lb-next', lb).addEventListener('click', () => showLb(lbPos + 1));
  lb.addEventListener('click', (e) => { if (e.target === lb || e.target.classList.contains('lb-figure')) closeLb(); });
  document.addEventListener('keydown', (e) => {
    if (lb.hidden) return;
    if (e.key === 'Escape') closeLb();
    else if (e.key === 'ArrowLeft') showLb(lbPos - 1);
    else if (e.key === 'ArrowRight') showLb(lbPos + 1);
    else if (e.key === 'Tab') {
      const f = $$('.lb-btn', lb);
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  // Swipe en el lightbox
  let touchX = null;
  lb.addEventListener('touchstart', (e) => { touchX = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener('touchend', (e) => {
    if (touchX === null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 50) showLb(lbPos + (dx < 0 ? 1 : -1));
    touchX = null;
  });

  // Año del footer
  $('#year').textContent = new Date().getFullYear();
})();
