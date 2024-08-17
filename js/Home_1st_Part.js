document.addEventListener('DOMContentLoaded', function() {
  // Navbar elements
  const navbar = document.getElementById("navbar");
  const links = document.querySelector('.navbar-links');
  const menuIcon = document.querySelector('.menu-icon');

  // Change navbar background color on scroll
  window.addEventListener('scroll', changeNavbarBackground);

  function changeNavbarBackground() {
    const scrollPercent = Math.min(1, window.scrollY / (document.body.scrollHeight - window.innerHeight));
    const bgColor = `rgba(0, 0, 0, ${scrollPercent})`;
    navbar.style.backgroundColor = bgColor;
  }

  // Dropdown functionality
  const dropdowns = document.querySelectorAll('.dropdown');
  dropdowns.forEach(dropdown => {
    dropdown.addEventListener('mouseenter', function() {
      const content = this.querySelector('.dropdown-content');
      if (content) {
        content.style.display = 'flex';
        setTimeout(() => {
          content.style.opacity = '1';
        }, 10); // Small delay to allow display to set before starting opacity transition
      }
    });

    dropdown.addEventListener('mouseleave', function() {
      const content = this.querySelector('.dropdown-content');
      if (content) {
        content.style.opacity = '0';
        setTimeout(() => {
          content.style.display = 'none';
        }, 500); // Delay matches the duration of the opacity transition
      }
    });
  });

  // Slideshow code
  (function($) {
    $(document).ready(function() {
      var s = $('.slider1'),
          sWrapper = s.find('.slider1-wrapper'),
          sItem = s.find('.slide1'),
          btn = s.find('.slider1-link'),
          sWidth = sItem.width(),
          sCount = sItem.length,
          slide_title = s.find('.slide1-title'),
          slide_text = s.find('.slide1-text'),
          slide_image = s.find('.slide1-image .img1'),
          sTotalWidth = sCount * sWidth;

      sWrapper.css('width', sTotalWidth);

      var clickCount = 0;

      btn.on('click', function(e) {
        e.preventDefault();

        if ($(this).hasClass('next1')) {
          (clickCount < (sCount - 1)) ? clickCount++ : clickCount = 0;
        } else if ($(this).hasClass('prev1')) {
          (clickCount > 0) ? clickCount-- : (clickCount = sCount - 1);
        }

        // Animate slide movement
        TweenLite.to(sWrapper, 0.4, { x: '-' + (sWidth * clickCount) });

        // CONTENT ANIMATIONS
        var fromProperties = { autoAlpha: 0, x: '-40', y: '-10' };
        var toProperties = { autoAlpha: 0.8, x: '0', y: '0' };

        TweenLite.fromTo(slide_image, 1, { autoAlpha: 0, y: '30' }, { autoAlpha: 1, y: '0' });
        TweenLite.fromTo(slide_title, 0.6, fromProperties, toProperties);
        TweenLite.fromTo(slide_text, 0.8, fromProperties, toProperties);
      });
    });
  })(jQuery);
});
