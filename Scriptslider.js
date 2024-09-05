
let slideIndex = 1;
slider(slideIndex);
/*definerer piltasten velger forrige eller neste bilde*/
function slideTrykk(n) {
  slider(slideIndex += n);
}
/*definerer dottene under slider sin funskjon*/
function dotTrykk(n) {
  slider(slideIndex = n);
}
/*gjør at et trykk= + eller - en slide. samt samspillet med dottene. Gjør også at bildene som ikke er i fokus av slider skjules*/
function slider(n) {
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