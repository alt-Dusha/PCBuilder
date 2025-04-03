const handImageChange = (offset) =>{
    const activeSlide = document.querySelector("[main-activ-slide]")
    const slides = [...document.querySelectorAll(".slide")]
    const currentIndex = slides.indexOf(activeSlide)
    let newIndex = currentIndex + offset;

    if(newIndex < 0) newIndex = slides.length - 1
    if(newIndex >= slides.length) newIndex = 0
    console.log(slides)
    slides[newIndex].dataset.active = true;
    delete activeSlide.dataset.active
}

const onNext = () => handImageChange(1)
const onPrev = () => handImageChange(-1)
