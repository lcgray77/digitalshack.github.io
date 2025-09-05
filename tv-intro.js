// Hides the TV intro overlay after animation
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
      document.getElementById('tv-intro').style.display = 'none';
    }, 2500); // time in ms for the effect to finish
  });
  