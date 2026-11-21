(function () {
  // Mobile menu
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open);
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) nav.classList.remove('open');
    });
  }

  // Active nav link on scroll
  var links = Array.prototype.slice.call(document.querySelectorAll('.nav-link'));
  var sections = ['home', 'about', 'services', 'projects', 'contact']
    .map(function (id) { return document.getElementById(id); })
    .filter(Boolean);

  function setActive() {
    var y = window.scrollY + 120;
    var current = sections[0];
    sections.forEach(function (s) { if (s.offsetTop <= y) current = s; });
    links.forEach(function (a) {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current.id);
    });
  }
  window.addEventListener('scroll', setActive, { passive: true });
  setActive();

  // Testimonial slider
  var cards = document.querySelectorAll('.t-card');
  var dots = document.querySelectorAll('.dot');
  var idx = 0, timer;

  function show(i) {
    idx = (i + cards.length) % cards.length;
    cards.forEach(function (c, n) { c.classList.toggle('active', n === idx); });
    dots.forEach(function (d, n) { d.classList.toggle('active', n === idx); });
  }
  function auto() { clearInterval(timer); timer = setInterval(function () { show(idx + 1); }, 5000); }

  dots.forEach(function (d, n) {
    d.addEventListener('click', function () { show(n); auto(); });
  });
  if (cards.length > 1) auto();
})();
