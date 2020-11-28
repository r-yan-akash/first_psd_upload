$(document).ready(function () {
    "use strict";

    // course_section
    $('.testimonials_active').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 3000,
        autoplay:true,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    autoplay:true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
          
        ]
    });
    // course_section
    $('.company_logo_active').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        autoplay: false,
        slidesToShow: 8,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
          
        ]
    });

    // upcoming_section
    if ($(window).width() <= 1200) {
        $('.').slick({
            dots: false,
            arrows: false,
            infinite: true,
            speed: 2000,
            autoplay: false,
            slidesToShow: 8,
            slidesToScroll: 1,
            responsive: [
               
                {
                    breakpoint: 1500,
                    settings: {
                        slidesToShow: 6,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
            ]
        });
    }
    
   

});


// for_mobile_menu
var mobile_nav = document.querySelector('.mobile_menu_wrapper')
var mobile_menu_wrp = document.querySelector('.mobile_menu')
var bugar = document.querySelector('.bugar')


bugar.addEventListener('click',function(){
    toggleMobNav()
});

function toggleMobNav(){
    mobile_nav.classList.toggle('active');
    mobile_menu_wrp.classList.toggle('active');
    // icon_btn.classList.toggle('fa-times');
    var icon_btn = document.querySelector('#icon_btn i')
    var ico = document.querySelector('.fa-bars')

    if(icon_btn.contains(ico)){
        icon_btn.classList.add('fa-times')
        icon_btn.classList.remove('fa-bars')
    }else{
        icon_btn.classList.remove('fa-times')
        icon_btn.classList.add('fa-bars')
    }
}

var sub_menu_btn = document.getElementsByClassName('sub_menu_wrap')
var mobileWrp = document.querySelector('.mobile_menu')

document.addEventListener('click', function(e){
    if(e.target.classList.contains('mobile_menu')){
        toggleMobNav()
    }
})


for(var i=0; i<sub_menu_btn.length; i++){
    sub_menu_btn[i].addEventListener('click',function(){
        if(this.classList.contains('active')){
            this.classList.remove('active')
        }else{
            closeAll()
            this.classList.add('active')
        }
    })
}

function closeAll(){
    for(var i=0; i<sub_menu_btn.length; i++){
        sub_menu_btn[i].classList.remove('active')
    }
}
