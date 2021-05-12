$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y >650 && $(window).width() > 1000) {
    $('.bottomMenu').fadeIn();
  } else {
    $('.bottomMenu').fadeOut();
  }
});
