// 28th code goes Headers, writing the script for swiper
var swiper = new Swiper(".popular-content", {
    // 31st code goes Headers, adding slidesPerView
    slidesPerView: 1,
    spaceBetween: 10, /*-31st continues.. changing the value to 10 from 30-*/
    // centeredSlides: true, /*31st contonues...changing removing this form code */
    autoplay: {
        delay: 55500, /*31st continues...changing the value to 55500 from 2500 */
        disableOnIntearction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    // 32nd code goes Headers, adding the breakpoints 
    breakpoints: {
        280: {
            slidesPerView: 1, 
            spaceBetween: 10,
        },
        320: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        510: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        758: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        900: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    }
});


// ---NAVBAR ANIMATION---
function changeBg(){
    var navbar = document.getElementById('navbar');
    var scrollValue = window.scrollY;
    if(scrollValue < 550){
        navbar.classList.remove('nav-links2');
    }
    else{
        navbar.classList.add('nav-links2');
    }
}

window.addEventListener('scroll', changeBg);

function changeBg1(){
    var navbar = document.getElementById('navbar1');
    var scrollValue = window.scrollY;
    if(scrollValue < 550){
        navbar.classList.remove('nav-links3');
    }
    else{
        navbar.classList.add('nav-links3');
    }
}

window.addEventListener('scroll', changeBg1);

function changeBg2(){
    var navbar = document.getElementById('navbar2');
    var scrollValue = window.scrollY;
    if(scrollValue < 550){
        navbar.classList.remove('nav-links4');
    }
    else{
        navbar.classList.add('nav-links4');
    }
}

window.addEventListener('scroll', changeBg2);

function changeBg3(){
    var navbar = document.getElementById('navbar3');
    var scrollValue = window.scrollY;
    if(scrollValue < 550){
        navbar.classList.remove('nav-links5');
    }
    else{
        navbar.classList.add('nav-links5');
    }
}

window.addEventListener('scroll', changeBg3);

function changeBg4(){
    var navbar = document.getElementById('navbar4');
    var scrollValue = window.scrollY;
    if(scrollValue < 550){
        navbar.classList.remove('nav-links6');
    }
    else{
        navbar.classList.add('nav-links6');
    }
}

window.addEventListener('scroll', changeBg4);

// --Preloader--
var preloader = document.getElementById("loading");

function myFunction(){
    preloader.style.display = 'none';
}