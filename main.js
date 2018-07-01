// Slider

const arrowLeft = document.getElementsByClassName('arrow-left')[0];
const arrowRight = document.getElementsByClassName('arrow-right')[0];
const carousel = document.getElementsByClassName('carousel')[0];
const slider = document.getElementsByClassName('slider')[0];


let counter = 3;
arrowLeft.addEventListener('click', function () {
    counter--;
    if (counter === -1) {
        counter = 6

    }
    console.log(counter);
    carousel.style.backgroundImage = 'url(./images/carousel/' + counter + '.jpg)'
})

arrowRight.addEventListener('click', function () {
    counter++;
    if (counter === 7) {
        counter = 0

    }
    console.log(counter);
    carousel.style.backgroundImage = 'url(./images/carousel/' + counter + '.jpg)'
})


// Travel text

const tablet = document.getElementById('tablet');
window.addEventListener('resize', function () {
    if (window.outerWidth > 768) {
        tablet.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ulnisi ut aliquip ex ea commodo. consequat.'

    } else if (window.outerWidth < 768) {
        tablet.innerText = 'Lorem ipsum dolor sit amet, consectetur ipisicing elit, sed do eiusmod tempor inciunt'
    }
})

