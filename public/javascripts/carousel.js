const track = document.querySelector(".carousel__track");
const slides = Array.from(track.children);
const nextButton = document.querySelector(".carousel__button--right");
const prevButton = document.querySelector(".carousel__button--left");
const dotsNav = document.querySelector(".carousel__nav");
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

// change to clicked dot's image
dots.forEach(dot =>{
    dot.addEventListener("click",e =>{
        const currentSlide = track.querySelector(".current-slide");
        const index = dots.indexOf(dot);
        const targetSlide = slides[index];
        moveToSlide(currentSlide ,targetSlide, e );
    })
})


// arrange slides next to one another
const setSlidePostion = (slide,index) =>{
    slide.style.left= slideWidth * index + "px";
}

slides.forEach(setSlidePostion);

const moveToSlide = (currentSlide, targetSlide, e) =>{
    track.style.transform = "translateX(-" + targetSlide.style.left + ")";
    currentSlide.classList.remove("current-slide");
    targetSlide.classList.add("current-slide");
    changeDot(targetSlide, e)
}
const changeDot = (targetSlide, e) => {
    const currentDot = dotsNav.querySelector(".current-slide");
    let index = slides.indexOf(targetSlide);
    const targetDot = dots[index];
    if (index === 0){
        // if first remove previous button
        prevButton.classList.add("d-none");
        nextButton.classList.remove("d-none");

    }
    else if (index === 29) {
        // if last remove next button
        nextButton.classList.add("d-none");
        prevButton.classList.remove("d-none");

    }
    else{
        // if not first or last, show both
        prevButton.classList.remove("d-none");
        nextButton.classList.remove("d-none");

    }
    // chnage dots
    currentDot.classList.remove("current-slide");
    targetDot.classList.add("current-slide");
    
    
}


// moving to next picture on click
nextButton.addEventListener("click", e =>{
    const currentSlide = track.querySelector(".current-slide");
    const nextSlide = currentSlide.nextElementSibling;
    // move to the next slide
    moveToSlide(currentSlide, nextSlide, e);
})

prevButton.addEventListener("click", e =>{
    const currentSlide = track.querySelector(".current-slide");
    const previousSlide = currentSlide.previousElementSibling;
    // move to the previous slide
    moveToSlide(currentSlide, previousSlide, e);
})