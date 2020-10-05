var loder=document.getElementById("preloder");

  // Preloader
  $(window).on('load', function() {
    if ($('#preloader').length) {
      $('#preloader').delay(2500).fadeOut('slow', function() {
        $(this).remove();
      });
    }
  });


// Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    autoplayTimeout: 6000,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      900: {
        items: 3
      }
    }
  });

$('.gallery-carousel').owlCarousel({
autoplay:true,
  loop:true,
  dots:true,
  nav:true,
  autoplayTimeout:5000,
  responsive:{
      0:{
          items:1
      },
      768:{
          items:3
      },
      1000:{
          items:4
      }
  }
})

  // Init AOS(animate on scroll)
  function aos_init() {
    AOS.init({
      duration: 1000,
      once: true
    });
  }
  $(window).on('load', function() {
    aos_init();
  });

