document.addEventListener("DOMContentLoaded", () => {
  // Feature cards fade-in on scroll
  const features = document.querySelectorAll('.feature');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.2 });
  features.forEach(f => obs.observe(f));

  // Search input focus effect
  const searchInput = document.querySelector('main > section:first-of-type input');
  searchInput.addEventListener('focus', () => {
    searchInput.style.borderColor = '#6d4c41';
    searchInput.style.boxShadow = '0 0 8px rgba(109,76,65,0.4)';
  });
  searchInput.addEventListener('blur', () => {
    searchInput.style.borderColor = '#a1887f';
    searchInput.style.boxShadow = 'none';
  });
});
