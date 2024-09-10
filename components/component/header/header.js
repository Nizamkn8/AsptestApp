(function ($) {
    function headerResponsive() {
      $(".toggler").click(function (e) {
        e.preventDefault();
        $(this).toggleClass("toggle-open");
        $(".menu-search-section").toggleClass("show-menu");
      });
    }
    function headerAnimation() {
      if ($(window).scrollTop() > 10) {
        $("body").addClass("header-animated");
      } else {
        $("body").removeClass("header-animated");
      }
    }
    $(document).ready(function () {
      headerResponsive();
      headerAnimation();
    });
  
    $(window).on("scroll", function () {
      headerAnimation();
    });
  })(jQuery);
  

$(window).on("scroll", function () {

    if ($(document).scrollTop() >= $(".banner-title").position().top) {
      $('.site-header').animate({ 
        backgroundColor : '#062135' 
      })
    };

  });