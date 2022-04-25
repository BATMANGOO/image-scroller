const imageContainer = document.querySelector('.img-container');
const previousBtn = document.querySelector('.previous-btn');
const nextBtn = document.querySelector('.next-btn');

const imagesArray = ['./images/1.jpg', './images/2.jpg', './images/3.jpg'];

let currentIndex = 0;

function slideShow(imagesArray) {
  imageContainer.style.backgroundImage = `url(${imagesArray[currentIndex]})`;

  nextBtn.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= imagesArray.length) {
      currentIndex = 0;
    }
    imageContainer.style.backgroundImage = `url(${imagesArray[currentIndex]})`;
  });

  previousBtn.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = imagesArray.length - 1;
    }
    imageContainer.style.backgroundImage = `url(${imagesArray[currentIndex]})`;
  });
};

// function()

slideShow(imagesArray);