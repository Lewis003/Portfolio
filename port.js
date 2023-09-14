// Smooth scrolling using jQuery easing
$('a.nav-link').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html, body').animate({
                scrollTop: (target.offset().top - 72)
            }, 1000, "easeInOutExpo");
            return false;
        }
    }
});

$(document).ready(function(){

  // Initiate venobox (lightbox feature used in portfolio)
  $(window).on('load', function() {
    $('.venobox').venobox();
  });

  // Portfolio isotope filter
  $(window).on('load', function() {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
    });
  });
});
