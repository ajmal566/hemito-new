


var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    effect: "slide",
    speed: 1000,
    // Autoplay configuration
    autoplay: {
        delay: 3000, // Delay between transitions in milliseconds
        disableOnInteraction: false, // Autoplay will not be disabled after user interactions
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


$('.client  .owl-carousel').owlCarousel({
    loop: false,
    margin: 0,
    smartSpeed: 1000,
    dots: false,
    autoplay:false,
    autoplayTimeout:3000,
    autoWidth:true,
    
    nav: false,
    responsive: {
        0: {
            items: 3,
            stagePadding:40,
        },
        600: {
            items: 3,
            stagePadding:40,
        },
        1000: {
            items: 6
        }
    }
});

Fancybox.bind("[data-fancybox]", {
    // Your custom options
  });


  $('.aboutus .owl-carousel').owlCarousel({
    loop: true,
    margin: 8,
    smartSpeed: 1000,
    dots: false,
    autoplay: false,
    autoplayTimeout: 3000,
    nav: true,
    navText: ["<img src='assets/media/ar.svg'>", "<img src='assets/media/al.svg'>"],
    autoWidth: true,
    center: true,




});
$('.testimonial  .owl-carousel').owlCarousel({
    loop: false,
    margin: 15,
    smartSpeed: 1000,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,


    nav: true,
    navText: ["<img src='assets/media/ar.svg'>", "<img src='assets/media/al.svg'>"],
    responsive: {
        0: {
            items: 3,
            stagePadding: 40,
        },
        600: {
            items: 3,
            stagePadding: 40,
        },
        1000: {
            items: 4
        }
    }
});
$('.portfolio  .owl-carousel').owlCarousel({
    loop: true,
    margin: 15,
    smartSpeed: 1000,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,


    nav: false,
   
    responsive: {
        0: {
            items: 1,
            stagePadding: 40,
        },
        600: {
            items: 3,
            stagePadding: 40,
        },
        1000: {
            items: 3
        }
    }
});



$('.what-we-do  .owl-carousel').owlCarousel({
    loop: false,
    margin: 15,
    smartSpeed: 1000,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,


    nav: true,
    navText: ["<img src='assets/media/ar.svg'>", "<img src='assets/media/al.svg'>"],
    responsive: {
        0: {
            items: 1,
            stagePadding: 40,
        },
        600: {
            items: 3,
            stagePadding: 40,
        },
        1000: {
            items: 3
        }
    }
});

$('.testi .owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    dots:false,
    smartSpeed: 1500,
     autoplay: true,
    autoplayTimeout: 3000,
    autoWidth:true,
    nav:false,
    navText:["<img src='assets/media/prev.svg'>","<img src='assets/media/next.svg'>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
});



