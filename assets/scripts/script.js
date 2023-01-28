"use strict"

let burgerImageOpen = document.querySelector(".burger-image_open");
let burgerImage = document.querySelector(".burger-image");
let burger = document.querySelector(".burger-menu");
let burgerList = document.querySelector(".burger-menu_list");
let burgerItem = document.querySelectorAll(".burger-item");
let header = document.querySelector(".header");
let overlay = document.querySelector(".overlay");
let leftArrow = document.querySelector(".left");
let rightArrow = document.querySelector(".right");
let sliderImages = document.querySelector(".slider-images");
let slide =document.querySelectorAll(".image-block");
let countMove = 1; // шаг слайдера
let step = 1;
let position = 0; // положение ленты прокрутки

if(window.innerWidth > 1050) {
  var widthImage = 1000; 
} else if (window.innerWidth <= 1050 && window.innerWidth > 1000 ) {
  var widthImage = 950; 
} else if (window.innerWidth <= 1000 && window.innerWidth > 900 ) {
  var widthImage = 800;  
} else if (window.innerWidth <= 900 && window.innerWidth > 850 ) {
  var widthImage = 750; 
} else if (window.innerWidth <= 850 && window.innerWidth > 700 ) {
  var widthImage = 650; 
} else if (window.innerWidth <= 700 && window.innerWidth > 600 ) {
  var widthImage = 550; 
} else if (window.innerWidth <= 600 && window.innerWidth > 550 ) {
  var widthImage = 500;
} else if (window.innerWidth <= 550 && window.innerWidth > 500 ) {
    var widthImage = 450; 
} else if (window.innerWidth <= 500 && window.innerWidth > 450 ) {
    var widthImage = 400; 
} else if (window.innerWidth <= 450 && window.innerWidth > 400 ) {
    var widthImage = 350; }
  else if (window.innerWidth <= 400 && window.innerWidth > 350 ) {
      var widthImage = 300; 
}   else if (window.innerWidth <= 350 && window.innerWidth > 300 ) {
  var widthImage = 250; 
}// ширина картинки

function burgerOpen() {
    burger.classList.add("open-burger");
    burgerList.classList.add("open-menu");
    burgerImageOpen.classList.add("open-image");
    header.classList.add("header-padding");
    overlay.style.display="block";
}

function burgerClose() {
    burger.classList.remove("open-burger");
    burgerList.classList.remove("open-menu");
    burgerImageOpen.classList.remove("open-image");
    header.classList.remove("header-padding");
    overlay.style.display="none";
}

burgerImage.addEventListener("click",burgerOpen);
overlay.addEventListener("click",burgerClose);
burgerImageOpen.addEventListener("click",burgerClose);
burgerItem.forEach((element)=> element.addEventListener("click", burgerClose));



function sliderLeft() {
   if (countMove < slide.length) {
    position -= widthImage;
    countMove++;
  } else {
    position = 0;
    countMove = 1;
  }
   sliderImages.style.left =position+'px';
   console.log(position);
   console.log(countMove);
  };


function sliderRight() {
   if (countMove <= slide.length) {
     position += widthImage;

    if (countMove>1) {
      countMove--;
    } else {
       countMove = slide.length;
       position = -(countMove-1)*widthImage;
    }
    
  } else {
    position = 0;
    countMove = 1;
  }
   sliderImages.style.left =position+'px';
   console.log(position);
   console.log(countMove);
  };

rightArrow.addEventListener("click", sliderLeft);
leftArrow.addEventListener("click", sliderRight);

