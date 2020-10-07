const autoSlide = document.getElementById("partners")
const autoSlideScrollWidth = autoSlide.scrollWidth

window.addEventListener("load", () => {
    self.setInterval(() => {
        if (autoSlide.scrollLeft !== autoSlideScrollWidth) {
            autoSlide.scrollTo(autoSlide.scrollLeft + 1, 0);
            // console.log(autoSlideScrollWidth);
            // console.log(autoSlide.scrollLeft);
        }
        if (autoSlide.scrollLeft === autoSlideScrollWidth) {
            console.log(123);
            autoSlide.scrollTo(autoSlide.scrollWidth - 1, 0);
        }
    }, 15);
})