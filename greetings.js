const $sucessMessage = document.getElementsByClassName("sucessMessage")[0]
const buttonReturn = document.createElement('button')
const $testButton= document.querySelector('#testButton')
const $redirect=document.querySelector('.redirect')
const breakLine = document.createElement('br')
console.log($redirect.innerHTML);
buttonReturn.innerHTML = 'Regresar'
const url = new URLSearchParams(window.location.search);

values=[]
url.forEach((value, titleName) =>{
    values.push(value)
    // sucessMessage.append(`${value}`)
    // sucessMessage.append(document.createElement('br'))
})
$sucessMessage.innerHTML = `Apreciable, ${values[0]} su registro fue exitoso! ⭐` 
$testButton.innerHTML= `Regresar`


setTimeout(()=>{$redirect.innerHTML= `Será redirigido automáticamente en unos momentos...`}, 3000)




$testButton.addEventListener("click", (e) => { 
    window.location.href="index.html"
  })

  //Esto no tiene ninguna utilidad pero es un recordatorio del append
$sucessMessage.append(breakLine)

