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