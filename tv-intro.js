// Hides the TV intro overlay after animation
document.addEventListener("DOMContentLoaded", function() {
  // Fade out the Occy gif after 1.5s, then hide the overlay after 2.7s
  setTimeout(function() {
    var occyClip = document.querySelector('.tv-clip');
    if (occyClip) {
      occyClip.style.opacity = '0';
      occyClip.style.transition = 'opacity 1.2s ease';
    }
  }, 1500);
  setTimeout(function() {
    document.getElementById('tv-intro').style.display = 'none';
  }, 2700); // time in ms for the effect to finish
});
