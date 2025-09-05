// Wait a few seconds, then fade out the TV intro
setTimeout(() => {
  const intro = document.getElementById('tv-intro');
  intro.classList.add('fade-out');
}, 4000); // TV intro lasts 4 seconds

// Optional: remove overlay from DOM after fade
document.getElementById('tv-intro').addEventListener('animationend', () => {
  document.getElementById('tv-intro').remove();
});


