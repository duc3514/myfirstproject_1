
// carousel
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const indicators_item = document.querySelectorAll('.indicators-item')
const carousel_item = document.querySelectorAll('.carousel-item')
let number = 0


indicators_item.forEach((item, index) => {
    item.onclick = (e) => {
        number = index
        $('.carousel-item.active').classList.remove('active')
        carousel_item[number].classList.add('active')
        $('.indicators-item.active').classList.remove('active')
        indicators_item[number].classList.add('active')
    }
})

setInterval(() => {
    number++
    if(number > 2) {
        number = 0
    }
    console.log(number)
    $('.indicators-item.active').classList.remove('active')
    $('.carousel-item.active').classList.remove('active')
    carousel_item[number].classList.add('active')
    indicators_item[number].classList.add('active')
    
}, 6000)


var header = document.querySelector('.navbar')
var mobileMenu = document.querySelector('.navbar-menu')
var headerHeight = header.clientHeight
mobileMenu.onclick = () => {
    const clientHight = header.clientHeight;
    const isCLosed = header.clientHeight === headerHeight
    if(isCLosed) {
        header.style.height = 'auto';
    }else{
        header.style.height = null;
    }
}



// Couter 
let couter_Element = document.querySelectorAll('.couter')
let couter = [];

const count = function(start, value, id) {
    var localStart = start;
    if(value > 200) {
        let count_up_1 = setInterval(() => {
            if(localStart < value) {
                localStart++
                couter_Element[id].innerHTML = localStart
            }else{
                clearInterval(count_up_1)
            }
        }, 1)
    }else {
        let count_up_2 = setInterval(() => {
            if(localStart < value) {
                localStart++
                couter_Element[id].innerHTML = localStart
            }else {
                clearInterval(count_up_2)
            }
        }, 40)
    }
}


for(let i = 0; i < couter_Element.length; i++) {
    count(0, couter_Element[i].textContent, i)
}


(function ($) {
    "use strict";


    

    // Team carousel
    $(".team-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        dots: true,
        loop: true,
        margin: 40,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        dots: true,
        loop: true,
        margin: 20,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            }
        }
    });
    
})(jQuery);