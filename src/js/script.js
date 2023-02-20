// $(document).ready(function(){
//     $('.carousel__inner').slick({
//         speed: 800,
//         // adaptiveHeight: true,
//         prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.png" alt="left"></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="icons/right.png" alt="right"></button>',
//         responsive: [{
//             breakpoint: 992,
//             settings: {
//               dots: true,
//               arrows: false
//             }
//           }]
//     });
//   });

var slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false
  });

  const left = document.querySelector('[data-controls=prev]');
  left.innerHTML=`
  <img src="icons/left.png" alt="left">
  `;

  const right = document.querySelector('[data-controls=next]');
  right.innerHTML=`
  <img src="icons/right.png" alt="left">
  `;