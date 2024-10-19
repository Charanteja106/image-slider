let slides = document.querySelectorAll(".images")
let container = document.querySelector(".image-container")

var counter = 0;

slides.forEach(
    (slide , index) =>{
        slide.style.left=`${index *100}%`

    }
)

const goPrev = () => {
    counter--
    slideImage()
}

const goNext =() => {
    counter++
    slideImage()
}

const slideImage = () =>{
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`
        }
        
    )
}

let dotsContainer = document.querySelector(".dots-container")
let dots = document.querySelectorAll(".dot")



dots.forEach((dot , index ) => {

    dot.addEventListener("click" , () =>{
        counter=index;
        slideImage();
    })
}) 

