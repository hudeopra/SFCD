$(document).ready(function () {

  var toggle = $('.nav-toggle');
  toggle.on('click', function (e) {
    $(this).toggleClass('opened');
  });

  $('.nav-toggle').click(function () {
    $('#mainnav').slideToggle();
  });

  //for flash news
  $('.news').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    arrows: false,
    infinite: true,
  });
  //for latest use slider
  $('.mt-latest-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    infinite: true,
    responsive: [{
      breakpoint: 1025,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
      }
    },
    {
      breakpoint: 650,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      }
    }]
  });


  //for news use slider
  $('.mt-news-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  });
  // video slider
  $('.mt-video_slider').slick({
    dots: false,
    arrows: false,
    autoplay: true,
    vertical: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    verticalSwiping: true,
  });


  $('.mt-video_thumb').click(function () {
    var videoId = $(this).attr('data-videoid');
    $('.mt-video iframe').attr('src', 'https://www.youtube.com/embed/' + videoId + '?autoplay=0&rel=0&controls=0&showinfo=0&loop=1');
  })
});
function youframe() {
  var frameWidthBanner = $('.mt-video_thumb iframe').width();
  var frameWidth = $('.mt-video iframe').width();
  $('.mt-video_thumb iframe').css('height', frameWidthBanner * .471875);
  $('.mt-video iframe').css('height', frameWidth * .563);
}
youframe();
$(window).resize(youframe);