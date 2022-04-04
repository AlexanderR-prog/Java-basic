const sliderLine = document.querySelector('.slider-line'),
    prevButton = document.querySelector('.button-prev'),
    nextButton = document.querySelector('.button-next')

let position = 0


const nextSlide = () => {
    if (position < 786) {
        position += 262
    } else {
        position = 0
    }
    sliderLine.style.left = -position + 'px'

}
const prevSlide = () => {
    if (position > 0) {
        position -= 262
    } else {
        position = 0
    }
    sliderLine.style.left = -position + 'px'

}


nextButton.addEventListener('click', nextSlide)
prevButton.addEventListener('click', prevSlide)


setInterval(() => {
    nextSlide()
}, 4000)