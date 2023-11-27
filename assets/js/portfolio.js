/*-----about  animation effect----*/
window.onload = function() {
    const aboutSection = document.getElementById('about');
    aboutSection.classList.remove('animate-section');
    void aboutSection.offsetWidth; // Trigger reflow to restart animation
    aboutSection.classList.add('animate-section');
  };
    // JavaScript to show/hide the back to top button
    window.onscroll = function() {
      scrollFunction();
    };

    function scrollFunction() {
      var backToTopBtn = document.getElementById("back-to-top");

      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = "block";
      } else {
        backToTopBtn.style.display = "none";
      }
    }

    // Smooth scroll to top functionality
    document.getElementById("back-to-top").addEventListener("click", function(event) {
      event.preventDefault();
      topFunction();
    });

    function topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
     // JavaScript to show/hide the menu