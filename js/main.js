let shadow = document.querySelector('.bg-box');
let form = document.querySelector('.form-box');

let controlsOne = document.querySelector('.conOne');
let controlsTwo = document.querySelector('.conTwo');
let btnIn = document.querySelector('.in');
let btnUp = document.querySelector('.up');

let rightBox = document.querySelector('.right');
let leftBox = document.querySelector('.left');

controlsOne.addEventListener('click', sliderOne);

function sliderOne() {
    shadow.style.left = "65%";
    form.style.right = "35%";
    controlsOne.style.zIndex = 0;
    controlsTwo.style.zIndex = 1;
    btnIn.style.top = "-2.2rem";
    btnUp.style.top = "0rem";
    rightBox.style.right = '0';
    leftBox.style.right = '130%';
};

controlsTwo.addEventListener('click', sliderTwo);

function sliderTwo() {
    shadow.style.left = "0%";
    form.style.right = "0%";
    controlsTwo.style.zIndex = 0;
    controlsOne.style.zIndex = 1;
    btnIn.style.top = "0rem";
    btnUp.style.top = "2.2rem";
    rightBox.style.right = '-130%';
    leftBox.style.right = '0';
};