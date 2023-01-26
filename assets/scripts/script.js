let burgerImageOpen = document.querySelector(".burger-image_open");
let burgerImage = document.querySelector(".burger-image");
let burger = document.querySelector(".burger-menu");
let burgerList = document.querySelector(".burger-menu_list");
let burgerItem = document.querySelectorAll(".burger-item");
let header = document.querySelector(".header");
let overlay = document.querySelector(".overlay");
let leftArrow = document.querySelector(".left");
let rightArrow = document.querySelector(".right");
let sliderImages = document.querySelectorAll(".image-block");
let count = 0;


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


function slider() {
  for (let i=0; i<sliderImages.length; i++) {
    sliderImages[i].classList.add("opacity");
}
sliderImages[count].classList.remove("opacity");

};

slider();

function sliderRight() {

    for (let i=0; i<sliderImages.length; i++) {
        sliderImages[i].classList.add("opacity");
    
    }
    sliderImages[count].classList.remove("opacity");
    
    if (count+1 === sliderImages.length) {
      count =0;
    } else {
      count++;
      
    }
  };


  function sliderLeft() {
    for (let i=0; i<sliderImages.length; i++) {
      sliderImages[i].classList.add("opacity");
     
    }
    sliderImages[count].classList.remove("opacity");
   
    if (count-1 === -1) {
      count = sliderImages.length-1;
    } else {
      count--;
    }
  };

rightArrow.addEventListener("click", sliderRight);
leftArrow.addEventListener("click", sliderLeft);

