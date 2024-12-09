const images = [
    "./photos/image-1.jpg",
    "./photos/image-2.jpg",
    "./photos/image-3.jpg",
    "./photos/image-4.jpg",
    "./photos/image-5.jpg",
    "./photos/image-6.jpg",
    "./photos/image-7.jpg",
    "./photos/image-8.jpg",
    "./photos/image-9.jpg",
    "./photos/image-10.jpg",
    "./photos/image-11.jpg",


];

let imageShown = document.getElementById("carousel-img")
let buttonForward = document.getElementById("forward-btn")
let buttonBackward= document.getElementById("backward-btn")
let buttonAutoForward= document.getElementById("auto-forward-btn")
let buttonAutoBackward= document.getElementById("auto-backward-btn")
let buttonStop= document.getElementById("stop-btn")
let slideshow

//manual slideshow
buttonForward.addEventListener('click', moveForward);

let currentIndex = 0
function moveForward() {
    currentIndex = (currentIndex + 1) % images.length;
    imageShown.src = images[currentIndex];
}

buttonBackward.addEventListener('click', moveBackward);
    
function moveBackward(){
    currentIndex = (currentIndex -1 + images.length) % images.length;
    imageShown.src = images[currentIndex];
}

// automatic slideshow
buttonAutoForward.addEventListener('click', slideshowForward);
buttonAutoBackward.addEventListener('click', slideshowBackward);
buttonStop.addEventListener('click', stopSlideshow);

function slideshowForward() {
    stopSlideshow()
   slideshow= setInterval(function() { 
        currentIndex = (currentIndex + 1) % images.length;
    imageShown.src = images[currentIndex]
     }, 3000)
}

function slideshowBackward() {
    stopSlideshow()
  slideshow=  setInterval(function() { 
        currentIndex = (currentIndex -1 + images.length) % images.length;
        imageShown.src = images[currentIndex];
     }, 3000)
}

function stopSlideshow (){
    clearInterval(slideshow)
}

// pseudocode 
// first store the html id of the img and the two buttons in variables
// then we need to add event listeners to buttons that listen for click
// when they are clicked the image should Change 
// and then execute a funciton which chnages the inner HTML of the given thingy

// I might need this code later:  imageShown.innerHTML = `<img id="carousel-img" src= ${images[currentIndex]} alt="vacation-pic" />`



