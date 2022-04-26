/* eslint-disable linebreak-style */
const imageContainer = document.querySelector('.img-container');
const previousBtn = document.querySelector('.previous-btn');
const nextBtn = document.querySelector('.next-btn');
const circleButtons = document.querySelectorAll('span');

const imagesArray = ['./images/1.jpg', './images/2.jpg', './images/3.jpg'];

let currentIndex = 0;

function slideShow(imagesArr) {
  imageContainer.style.backgroundImage = `url(${imagesArr[currentIndex]})`;

  nextBtn.addEventListener('click', () => {
    currentIndex += 1;
    if (currentIndex >= imagesArray.length) {
      currentIndex = 0;
    }
    imageContainer.style.backgroundImage = `url(${imagesArray[currentIndex]})`;
  });

  previousBtn.addEventListener('click', () => {
    currentIndex -= 1;
    if (currentIndex < 0) {
      currentIndex = imagesArray.length - 1;
    }
    imageContainer.style.backgroundImage = `url(${imagesArray[currentIndex]})`;
  });
}

function fadeToNextImage() {
  imageContainer.style.opacity = '1';
  setTimeout(() => {
    imageContainer.style.opacity = '0';
  }, 4000);
}

function autoSlideShow(imagesArr) {
  // will fire only once at initial call for first image
  fadeToNextImage();
  setInterval(() => {
    currentIndex += 1;
    if (currentIndex >= imagesArr.length) {
      currentIndex = 0;
    }
    imageContainer.style.backgroundImage = `url(${imagesArr[currentIndex]})`;
    // will fire after each image
    fadeToNextImage();
  }, 5000);
}

function circleButtonSelection(imagesArr) {
  circleButtons.forEach((circleButton, index) => {
    circleButton.addEventListener('click', () => {
      currentIndex = index;
      imageContainer.style.backgroundImage = `url(${imagesArr[currentIndex]})`;
    });
  });
}

function circleStyle() {
  circleButtons.forEach((circleButton, index) => {
    const button = circleButton;
    if (index === currentIndex) {
      button.innerHTML = '&#9679';
    } else {
      button.innerHTML = '&#9675';
    }
  });
}

setInterval(() => {
  circleStyle();
}, 100);

circleButtonSelection(imagesArray);
slideShow(imagesArray);
autoSlideShow(imagesArray);