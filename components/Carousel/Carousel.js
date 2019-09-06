/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function carouselComponent() {
  carousel = document.createElement('div');
  carousel.classList.add('carousel');
  leftButton = document.createElement('div');
  leftButton.classList.add('left-button');
  image1 = document.createElement('img');
  image1.setAttribute('src', './assets/carousel/mountains.jpeg');
  image2 = document.createElement('img');
  image2.setAttribute('src', './assets/carousel/computer.jpeg');
  image3 = document.createElement('img');
  image3.setAttribute('src', './assets/carousel/trees.jpeg');
  image4 = document.createElement('img');
  image4.setAttribute('src', './assets/carousel/turntable.jpeg');
  rightButton = document.createElement('div');
  rightButton.classList.add('right-button');

  carousel.appendChild(leftButton);
  carousel.appendChild(image1);
  carousel.appendChild(image2);
  carousel.appendChild(image3);
  carousel.appendChild(image4);
  carousel.appendChild(rightButton);

  return carousel;
}

const carouselHolder = carouselComponent();
document.querySelector('.carousel-container').appendChild(carouselHolder);

document.querySelectorAll('.carousel-container img').forEach(img => img.style.display = 'block');

leftButton.addEventListener('click', a{
  
})

rightButton.addEventListener('click', a{
  
})