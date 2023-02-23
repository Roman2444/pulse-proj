
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


    function toggleSlide(item) {
      $(item).each(function(i) {
        $(this).on('click', function(e) {
          e.preventDefault();
          $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
          $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        });
      });
    }
    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    $('[data-modal="consultaion"]').on('click', function() {
      $('.overlay, #consultaion').fadeIn('slow');
    });
    $('.modal__close').on('click', function() {
      $('.overlay, #consultaion, #thanks, #order').fadeOut('slow');
    }); 

    $('.button_mini').each(function(i) {
      $(this).on('click', function() {
        $('#order .modal__text').text($('.catalog-item__subtitle').eq(i).text());
        $('.overlay, #order').fadeIn('slow');
      })
    });
  });
})(jQuery);
