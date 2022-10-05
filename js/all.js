$(document).ready(function () {
  $(".navigation-toggle").click(function () {
    $("nav").slideToggle(600);
  });

  $(".section-content h1").hover(
    function () {
      $(this).addClass('animate__heartBeat');
    }, function () {
      $(this).removeClass('animate__heartBeat');
    }
  );
  $(".section-top-right-image").hover(
    function () {
      $(this).addClass('animate__heartBeat');
    }, function () {
      $(this).removeClass('animate__heartBeat');
    }
  );
  scrollAnimate();
});

function scrollAnimate() {
  $('.main-navigation a').click(function (e) {
    e.preventDefault();
    var target = $(this).attr('href');
    var targetPos = $(target).offset().top;
    $('body,html').animate({ scrollTop: targetPos }, 1000);
  });
}