$(function () {
  $('a[href^="#"]').click(function () {
    var adjust = -($("#headerFixed").height());
    var speed = 400;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top + adjust;
    $('body,html').animate({
      scrollTop: position
    }, speed, 'swing');
    return false;
  });
});
$(document).ready(function () {
  var scrollTop = $("#scrollTop");
  $(window).scroll(function () {
    var topPos = $(this).scrollTop();
    if (topPos > 100) {
      $(scrollTop).css("opacity", "1");
    } else {
      $(scrollTop).css("opacity", "0");
    }
  });
  $(scrollTop).click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
    return false;
  });
});
