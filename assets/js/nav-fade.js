(function () {
  const links = document.querySelectorAll('#sidebar nav a[href^="#"]');
  const wrapper = document.querySelector('#wrapper');
  if (!links.length || !wrapper) return;

  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      const target = document.querySelector(targetId);
      if (!target) return;
      e.preventDefault();

      wrapper.classList.add('fading-out');

      window.setTimeout(() => {
        target.scrollIntoView({ behavior: 'auto', block: 'start' });
        window.history.replaceState(null, '', targetId);
        wrapper.classList.remove('fading-out');
        wrapper.classList.add('fading-in');
        window.setTimeout(() => wrapper.classList.remove('fading-in'), 400);
      }, 220);
    });
  });
})();
