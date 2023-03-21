let box = document.getElementById('cardbox')
console.log(box)
let slides = document.getElementsByClassName('image')
console.log(slides)
var slideIndex = 0;

const prevBtn = () => {
    let width = box.clientWidth
    box.scrollLeft = box.scrollLeft-width
    console.log(box.scrollLeft-width)
}
const nextBtn = () => {
    // for(slideIndex = 0; slideIndex < slides.length; slideIndex++){
        let width = box.clientWidth
        box.scrollLeft = box.scrollLeft+width
        console.log(box.scrollLeft+width)
    // }
    // slideIndex = 0; 
}


// let slideIndex = 0;
// showSlides();

// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}    
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
//   setTimeout(showSlides, 2000); // Change image every 2 seconds
// }
