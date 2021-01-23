var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  slides[slideIndex-1].style.transition = "all 1s cubic-bezier(0.23, 1, 0.320, 1)";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}