const imageContainer = document.querySelector('.img-container');
const previousBtn = document.querySelector('.previous-btn');
const nextBtn = document.querySelector('.next-btn');
const circleButtons = document.querySelectorAll('span');

const imagesArray = ['./images/1.jpg', './images/2.jpg', './images/3.jpg'];

let currentIndex = 0;

function slideShow(imagesArray) {
  imageContainer.style.backgroundImage = `url(${imagesArray[currentIndex]})`;

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
};

function autoSlideShow(imagesArray) {
  setInterval(() => {
    currentIndex += 1;
    if (currentIndex >= imagesArray.length) {
      currentIndex = 0;
    }
    imageContainer.style.backgroundImage = `url(${imagesArray[currentIndex]})`;
  }, 5000);
};

function circleButtonSelection(imagesArray) {
  circleButtons.forEach((circleButton, index) => {
    circleButton.addEventListener('click', () => {
      currentIndex = index;
      imageContainer.style.backgroundImage = `url(${imagesArray[currentIndex]})`;
    });
  });
};

function circleStyle() {
  circleButtons.forEach((circleButton, index) => {
    if (index === currentIndex) {
      circleButton.innerHTML = '&#9679';
    } else {
      circleButton.innerHTML = '&#9675';
    }
  });
};


setInterval(() => {
  circleStyle();
}, 100);

circleStyle();
circleButtonSelection(imagesArray);
slideShow(imagesArray);
autoSlideShow(imagesArray);