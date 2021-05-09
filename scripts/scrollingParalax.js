$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 900) {
    $('.bottomMenu').fadeIn();
  } else {
    $('.bottomMenu').fadeOut();
  }
});
