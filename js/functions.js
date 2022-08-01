//menu
window.addEventListener("load", () => {
    document.body.classList.remove("preload")
})

document.addEventListener('DOMContentLoaded', () =>{
    const nav = document.querySelector(".nav")

    document.querySelector("#btnNav").addEventListener("click", ()=>{
        nav.classList.add("nav-open")
    })

    document.querySelector(".nav-overlay").addEventListener("click", ()=>{
        nav.classList.remove("nav-open")
    })


    document.querySelector(".close").addEventListener("click", ()=>{
        nav.classList.remove("nav-open")
    })

})


//slider clicker

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


