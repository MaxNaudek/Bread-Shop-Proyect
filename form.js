// SLIDESHOW
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
// TERMINA SLIDESHOW

const $name= document.getElementById('name')
const $lastname= document.getElementById('lastname')
const $mailname= document.getElementById('mailname')
const $password= document.getElementById('password')
const $confirmpassword= document.getElementById('confirmpassword')
const $register= document.getElementById('Register-Form')
const $form= document.getElementsByClassName('form-container')[0]
const $validation= document.getElementsByClassName('error-Validation')[0]
const $sucessMessage= document.getElementsByClassName('sucessMessage')[0]

//$sucessMessage.innerHTML=`<h1>max</h1>`

$form.addEventListener("submit", (e) => {
  
  if ($name.value.length < 3) {return $validation.innerHTML= `<h3>Tu nombre debe contener al menos tres letras</h3>`, e.preventDefault() }
  if ($name.value === $lastname.value) {return $validation.innerHTML= `<h3>Tu nombre debe ser distinto a tu apellido!</h3>`,e.preventDefault()}
  if (!$mailname.value.includes('@')) {return $validation.innerHTML= `<h3>No es un nombre de correo válido</h3>`,e.preventDefault()}
  if ($password.value !== $confirmpassword.value) {return $validation.innerHTML= `<h3>Tu contraseña no coincide!</h3>`, e.preventDefault()}
  
})


  const url = new URL(window.location.href);


// $sucessMessage.innerHTML=`<h1>max</h1>`