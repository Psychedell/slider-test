// $(document).ready(function () {
//   $('.slider-top').slick({
//     slidesToShow: 2,
//     arrows: false,
//     fade: true,
//     asNavFor: ".slider",
    
//   });
// });

// $(document).ready(function () {
//   $('.slider').slick({
//     slidesToShow: 1,
//     asNavFor:".slider-top"
//   });
// });


// $('.slider').slick({
//   dots: true,
//   infinite: true,
//   speed: 300,
//   slidesToShow: 1,
//   adaptiveHeight: true,
// });

new Swiper(".mySwiper", {
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
});
      

