$(document).ready(function() {
  $(window).scroll(function() {
    var top = $(window).scrollTop();
    if (top >= 60) {
      $("nav").addClass('secondary');
    } else if ($("nav").hasClass('secondary')) {
      $("nav").removeClass('secondary');
    }
  });

  $(document).on('click', 'a[href^="#"]', function(event) {
    event.preventDefault();

    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
  });
});
