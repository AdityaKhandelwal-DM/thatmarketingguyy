/* thatmarketingguy — shared site script (null-safe across all pages) */
(function () {
  // year
  var yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();

  // mobile nav
  var ham = document.getElementById('hamburger');
  var links = document.getElementById('navLinks');
  if (ham && links) {
    ham.addEventListener('click', function () {
      var open = links.classList.toggle('mobile');
      ham.classList.toggle('open', open);
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        links.classList.remove('mobile');
        ham.classList.remove('open');
      });
    });
  }

  // case-study filters (only on results page)
  var filters = document.getElementById('filters');
  var grid = document.getElementById('caseGrid');
  if (filters && grid) {
    var chips = filters.querySelectorAll('.chip');
    var cases = Array.prototype.slice.call(grid.querySelectorAll('.case'));
    chips.forEach(function (c) {
      c.addEventListener('click', function () {
        chips.forEach(function (x) { x.classList.remove('active'); });
        c.classList.add('active');
        var f = c.dataset.f;
        cases.forEach(function (card) {
          card.style.display = (f === 'all' || card.dataset.cat === f) ? '' : 'none';
        });
      });
    });
  }

  // intent toggle (only on contact page)
  var intents = document.querySelectorAll('.intent-btn');
  var bizField = document.getElementById('bizField');
  if (intents.length) {
    intents.forEach(function (b) {
      b.addEventListener('click', function () {
        intents.forEach(function (x) { x.classList.remove('active'); });
        b.classList.add('active');
        if (bizField) bizField.style.display = (b.dataset.intent === 'learner') ? 'none' : '';
      });
    });
  }

  // scroll reveal
  var reveals = document.querySelectorAll('.reveal');
  if (reveals.length && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }
})();
