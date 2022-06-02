$(document).ready(function () {
  $('.slider-top').slick({
    slidesToShow: 3,
    arrows: false,
    // fade: true,
    asNavFor: ".slider",
    
  });
});

$(document).ready(function () {
  $('.slider').slick({
    slidesToShow: 1,
    asNavFor:".slider-top"
  });
});


// $('.slider').slick({
//   dots: true,
//   infinite: true,
//   speed: 300,
//   slidesToShow: 1,
//   adaptiveHeight: true,
// });

new Swiper(".mySwiper", {
  slidesPerGroup: 1,
  slidesPerView: 3,
  autoHeight: true,
  // spaceBetween: 32,
  initialSlide: 1,
  centeredSlides: true,
  // touchAngle: 50,
  slideToClickedSlide: true,
  loop: true,
        breakpoints: {
          320: {
                  slidesPerView: 1,
          },  
          768: {
                  slidesPerView: 3,
                }
          },
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
});
      

