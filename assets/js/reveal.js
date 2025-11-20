(function() {
  const revealables = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window) || revealables.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  revealables.forEach((el, idx) => {
    el.style.setProperty('--reveal-delay', `${idx * 80}ms`);
    observer.observe(el);
  });
})();
