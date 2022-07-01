AOS.init({
   offset: 200,
   duration: 600,
   easing: 'ease-in-sine',
   delay: 50,
 });

 var swiper = new Swiper(".mySwiper", {
   slidesPerView: 1,
   spaceBetween: 30,
   loop: true,
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
   autoplay: {
      delay: 3000,
    },
 });