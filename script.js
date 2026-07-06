var sections = document.querySelectorAll('section, header.cover, footer.doc-footer');
var navLinks = document.querySelectorAll('[data-nav]');
var io = new IntersectionObserver(function(entries) {
  entries.forEach(function(e) {
    if (e.isIntersecting) e.target.classList.add('in');
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(function(el) { io.observe(el); });

var spy = new IntersectionObserver(function(entries) {
  entries.forEach(function(e) {
    if (!e.isIntersecting) return;
    var id = e.target.getAttribute('id');
    navLinks.forEach(function(a) {
      a.classList.toggle('active', a.getAttribute('href') === '#' + id);
    });
  });
}, { rootMargin: '-40% 0px -55% 0px' });
sections.forEach(function(s) { if (s.id) spy.observe(s); });
