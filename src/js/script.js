
const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    mouseDrag: true,
    nav: false,
    controlsText: [
      '<img src="icons/left.png" alt="left">',
      '<img src="icons/right.png" alt="right">'
    ],
    responsive: {
      900: {
        nav: false,
        controls: true
      }, 
      300: {
        nav: true,
        controls: false
      }
    }

  });


(function ($) {
  $(function () {

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

  });
})(jQuery);
